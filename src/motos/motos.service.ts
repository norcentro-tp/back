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
      campania: [],
      codigo_vin: createMotoDto.codigo_vin,
      color: createMotoDto.color,
      estado: new Types.ObjectId(createMotoDto.estado),
      modelo: new Types.ObjectId(createMotoDto.modelo),
      proveedor: new Types.ObjectId(createMotoDto.proveedor),
    });
  }

  async findAll() {
    return await this.motoModel
      .find()
      .populate({ path: 'modelo', populate: { path: 'categoria' } })
      .populate('proveedor')
      .populate('campania')
      .populate('categoria')
      .populate('estado')
      .populate('marca');
  }

  async findOne(id: string) {
    return await this.motoModel
      .findById(id)
      .populate({ path: 'modelo', populate: { path: 'categoria' } })
      .populate('proveedor')
      .populate('campania')
      .populate('categoria')
      .populate('estado')
      .populate('marca');
  }

  async update(id: string, updateMotoDto: UpdateMotoDto) {
    return await this.motoModel.findByIdAndUpdate(id, updateMotoDto);
  }

  remove(id: number) {
    return `This action removes a #${id} moto`;
  }
}
