import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Moto } from './schemas/motos.schema';
@Injectable()
export class MotosService {
  constructor(@InjectModel(Moto.name) private motoModel: Model<Moto>) {}

  async create(createMotoDto: CreateMotoDto) {
    return await this.motoModel.create({
      _id: new Types.ObjectId(),
      codigo_vin: createMotoDto.codigo_vin,
      color: createMotoDto.color,
      categoria:new Types.ObjectId(createMotoDto.categoria),
      modelo: new Types.ObjectId(createMotoDto.modelo),
      marca: new Types.ObjectId(createMotoDto.marca),
      proveedor: new Types.ObjectId(createMotoDto.proveedor),
      estado: new Types.ObjectId(createMotoDto.estado),
    });
  }

  async findAll() {
    return await this.motoModel
      .find()
      .populate('categoria')
      .populate('modelo')
      .populate('marca')
      .populate('proveedor')
      .populate('estado_moto');
  }

  async findOne(id: string) {
    return await this.motoModel
      .findById(id)
      .populate('categoria')
      .populate('modelo')
      .populate('marca')
      .populate('proveedor')
      .populate('estado_moto');
  }

  async update(id: string, updateMotoDto: UpdateMotoDto) {
    return await this.motoModel.findByIdAndUpdate(id, updateMotoDto);
  }

  remove(id: number) {
    return `This action removes a #${id} moto`;
  }
}
