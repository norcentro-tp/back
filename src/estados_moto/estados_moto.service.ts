import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEstadosMotoDto } from './dto/create-estados_moto.dto';
import { UpdateEstadosMotoDto } from './dto/update-estados_moto.dto';
import { EstadoMoto } from './schemas/estados_moto.schema';

@Injectable()
export class EstadosMotoService {
  constructor(@InjectModel(EstadoMoto.name) private estadomotoModel: Model<EstadoMoto>) {}

  create(createEstadosMotoDto: CreateEstadosMotoDto) {
    return 'This action adds a new estadosMoto';
  }

  findAll() {
    return this.estadomotoModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} estadosMoto`;
  }

  update(id: number, updateEstadosMotoDto: UpdateEstadosMotoDto) {
    return `This action updates a #${id} estadosMoto`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadosMoto`;
  }
}
