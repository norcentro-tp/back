import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoriasMotoDto } from './dto/create-categorias_moto.dto';
import { UpdateCategoriasMotoDto } from './dto/update-categorias_moto.dto';
import { CategoriaMoto } from './schemas/categorias_moto.schema';

@Injectable()
export class CategoriasMotoService {
  constructor(@InjectModel(CategoriaMoto.name) private categoriamotoModel: Model<CategoriaMoto>) {}

  async create(createCategoriasMotoDto: CreateCategoriasMotoDto) {
    return await this.categoriamotoModel.create({
      _id: new Types.ObjectId(),
      nombre: createCategoriasMotoDto.nombre,
      estado:'activo'
    });
  }

  async findAll(): Promise<CategoriaMoto[]> {
    return await this.categoriamotoModel
      .find({ estado: { $ne: 'inactivo' } })
      .exec();
  }


  async findOne(id: string) {
    return await this.categoriamotoModel.findById(id)
  }

  async update(id: string, updateCategoriasMotoDto: UpdateCategoriasMotoDto) {
    return await this.categoriamotoModel.findByIdAndUpdate(id, updateCategoriasMotoDto);
  }

  async remove(id: string) {
    return await this.categoriamotoModel.findByIdAndUpdate(id, {
      estado: 'inactivo',
    });
  }
}
