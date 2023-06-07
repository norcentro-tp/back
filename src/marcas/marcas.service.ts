import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './schemas/marcas.schema';
import { InjectModel } from '@nestjs/mongoose';
import { FirebaseService } from 'src/storage/firebase.service';

@Injectable()
export class MarcasService {
  constructor(@InjectModel(Marca.name) private marcaModel: Model<Marca>,private readonly firebaseService: FirebaseService) {}

  async create(createMarcaDto: CreateMarcaDto, imageFiles: Express.Multer.File[]) {
    if (imageFiles && imageFiles.length>0) {
      const uploadedUrl = await this.firebaseService.uploadImageToFirebase("Marca", imageFiles);
      createMarcaDto.icono = uploadedUrl;
    }
    return await this.marcaModel.create({
      _id: new Types.ObjectId(),
      nombre: createMarcaDto.nombre,
      descripcion: createMarcaDto.descripcion,
      estado: 'activo',
      icono:createMarcaDto.icono,
    });
  }

 async findAll(): Promise<Marca[]> {
    return await this.marcaModel
      .find({ estado: { $ne: 'inactivo' } })
      .exec();
  }


  async findOne(id: string) {
    return await this.marcaModel
      .findById(id)
  }

  async update(id: string, updateMarcaDto: UpdateMarcaDto,imageFiles: Express.Multer.File[]) {
    if (imageFiles && imageFiles.length>0) {
    const uploadedUrl = await this.firebaseService.uploadImageToFirebase("Marca",imageFiles);
    updateMarcaDto.icono = uploadedUrl;
  }
    return await this.marcaModel.findByIdAndUpdate(id, updateMarcaDto);
  }

  async remove(id: string) {
    return await this.marcaModel.findByIdAndUpdate(id, {
      estado: 'inactivo',
    });
  }
}
