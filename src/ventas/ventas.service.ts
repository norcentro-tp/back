import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Venta } from './schemas/venta.schema';
import { FirebaseService } from 'src/storage/firebase.service';


@Injectable()
export class VentasService {
  constructor(@InjectModel(Venta.name) private ventaModel: Model<Venta>,private readonly firebaseService: FirebaseService ) {}

  async create(createVentaDto: CreateVentaDto,imageFiles: Express.Multer.File[]) {
    console.log(createVentaDto,imageFiles)
    if (imageFiles && imageFiles.length>0) {
      const uploadedUrls = await this.firebaseService.uploadImagesToFirebase("Venta",imageFiles);
      createVentaDto.boleta_pago = uploadedUrls;
      console.log(uploadedUrls)
    }
    return await this.ventaModel.create({
      _id: new Types.ObjectId(),
      monto: createVentaDto.monto,
      fecha_entrega: createVentaDto.fecha_entrega,
      fecha_venta: new Date(),
      metodo_pago: createVentaDto.metodo_pago,
      moto: new Types.ObjectId(createVentaDto.moto),
      cliente: new Types.ObjectId(createVentaDto.cliente),
      boleta_pago: createVentaDto.boleta_pago,
    });
  }

  async findAll() {
    return await this.ventaModel.find()
    .populate({
      path: 'moto',
      populate: {
        path: 'modelo',
        populate: {
          path: 'marca'
        }
      }
    })
    .populate('cliente')
    .exec();
  }

  async findOne(id: string) {
    return await this.ventaModel.findById(id)
    .populate({
      path: 'moto',
      populate: {
        path: 'modelo',
        populate: {
          path: 'marca'
        }
      }
    })
    .populate('cliente')
    .exec();
  }

  async update(id: string, updateVentaDto: UpdateVentaDto,imageFiles: Express.Multer.File[]) {
    console.log(updateVentaDto,imageFiles)
    if (imageFiles && imageFiles.length>0) {
      const uploadedUrls = await this.firebaseService.uploadImagesToFirebase("Venta",imageFiles);
      updateVentaDto.boleta_pago = uploadedUrls;
    }
    return await this.ventaModel.findByIdAndUpdate(id, updateVentaDto);
  }

  async remove(id: string) {
    return await this.ventaModel.findByIdAndUpdate(id, {
      estado: 'inactivo',
    });
  }
}