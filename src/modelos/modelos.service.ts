import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { Modelo } from './schemas/modelos.schema';

@Injectable()
export class ModelosService {
  constructor(@InjectModel(Modelo.name) private modeloModel: Model<Modelo>) {}

  async create(createModeloDto: CreateModeloDto) {
    return await this.modeloModel.create({
      _id: new Types.ObjectId(),
      nombre: createModeloDto.nombre,
      cilindrada: createModeloDto.cilindrada,
      velocidades: createModeloDto.velocidades,
      torque: createModeloDto.torque,
      motor: createModeloDto.motor,
      potencia: createModeloDto.potencia,
      anio: createModeloDto.anio,
      precio: createModeloDto.precio,
      categoria: new Types.ObjectId(createModeloDto.categoria),
      marca: new Types.ObjectId(createModeloDto.marca),
      colores: createModeloDto.colores,
      fotos: createModeloDto.fotos,
    });
  }

  async findAll() {
    return await this.modeloModel.find()
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

  async update(id: string, updateModeloDto: UpdateModeloDto) {
    return await this.modeloModel.findByIdAndUpdate(id, updateModeloDto);
  }

  async remove(id: string) {
    return `This action removes a #${id} modelo`;
  }
}
