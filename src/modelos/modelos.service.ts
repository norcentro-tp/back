import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { Modelo } from './schemas/modelos.schema';

@Injectable()
export class ModelosService {
  constructor(@InjectModel(Modelo.name) private modeloModel: Model<Modelo>) {}

  create(createModeloDto: CreateModeloDto) {
    return 'This action adds a new modelo';
  }

  findAll() {
    return this.modeloModel.find().exec();
  }

  findOne(id: string) {
    return this.modeloModel.findById(id).exec();
  }

  update(id: number, updateModeloDto: UpdateModeloDto) {
    return `This action updates a #${id} modelo`;
  }

  remove(id: number) {
    return `This action removes a #${id} modelo`;
  }
}
