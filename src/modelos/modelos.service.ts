import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { Modelo } from './schemas/modelos.schema';
import { FirebaseService } from 'src/storage/firebase.service';


@Injectable()
export class ModelosService {
  constructor(@InjectModel(Modelo.name) private modeloModel: Model<Modelo>,private readonly firebaseService: FirebaseService ) {}

  async create(createModeloDto: CreateModeloDto,imageFiles: Express.Multer.File[]) {
    if (imageFiles && imageFiles.length>0) {
      const uploadedUrls = await this.firebaseService.uploadImagesToFirebase("Modelo",imageFiles);
      createModeloDto.fotos = uploadedUrls;
    }
    return await this.modeloModel.create({
      _id: new Types.ObjectId(),
      nombre: createModeloDto.nombre,
      descripcion: createModeloDto.descripcion,
      cilindrada: createModeloDto.cilindrada,
      velocidades: createModeloDto.velocidades,
      capacidad_tanque: createModeloDto.capacidad_tanque,
      torque: createModeloDto.torque,
      motor: createModeloDto.motor,
      potencia: createModeloDto.potencia,
      anio: createModeloDto.anio,
      precio: createModeloDto.precio,
      categoria: new Types.ObjectId(createModeloDto.categoria),
      marca: new Types.ObjectId(createModeloDto.marca),
      colores: createModeloDto.colores,
      fotos: createModeloDto.fotos,
      estado: 'activo',
      catalogo: 'inactivo'
    });
  }

  async findAll() {
    return await this.modeloModel.find()
    .find({ estado: { $ne: 'inactivo' } })
    .populate('categoria')
    .populate('marca')
    .exec();
  }

  async findOne(id: string) {
    return await this.modeloModel.findById(id)
    .populate('categoria')
    .populate('marca')
    .exec();
  }

  async update(id: string, updateModeloDto: UpdateModeloDto,imageFiles: Express.Multer.File[]) {
    if (imageFiles && imageFiles.length>0) {
      const uploadedUrls = await this.firebaseService.uploadImagesToFirebase("Modelo",imageFiles);
      updateModeloDto.fotos = uploadedUrls;
    }
    return await this.modeloModel.findByIdAndUpdate(id, updateModeloDto);
  }

  async updateCatalogue(id: string) {
    const entradaCatalogo = await this.modeloModel.findById(id);
    if (entradaCatalogo) {
      entradaCatalogo.catalogo = entradaCatalogo.catalogo === 'activo' ? 'inactivo' : 'activo';
      await entradaCatalogo.save();
      return entradaCatalogo;
    }
    return null; 
  }

  async remove(id: string) {
    return await this.modeloModel.findByIdAndUpdate(id, {
      estado: 'inactivo',
    });
  }
}