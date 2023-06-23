import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Modelo } from 'src/modelos/schemas/modelos.schema';

@Injectable()
export class CatalogoService {
  constructor(@InjectModel(Modelo.name) private modeloModel: Model<Modelo>) {}

  async findAll() {
    return await this.modeloModel
      .find()
      .find({ estado: { $ne: 'inactivo' }, catalogo: { $ne: 'inactivo' } })
      .populate('categoria')
      .populate('marca')
      .exec();
  }

  async findOne(id: string) {
    return await this.modeloModel
      .findById(id)
      .populate('categoria')
      .populate('marca')
      .exec();
  }
}
