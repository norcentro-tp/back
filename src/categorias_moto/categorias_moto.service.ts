import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoriasMotoDto } from './dto/create-categorias_moto.dto';
import { UpdateCategoriasMotoDto } from './dto/update-categorias_moto.dto';
import { CategoriaMoto } from './schemas/categorias_moto.schema';

@Injectable()
export class CategoriasMotoService {
  constructor(@InjectModel(CategoriaMoto.name) private categoriamotoModel: Model<CategoriaMoto>) {}

  create(createCategoriasMotoDto: CreateCategoriasMotoDto) {
    return 'This action adds a new categoriasMoto';
  }

  findAll() {
    return this.categoriamotoModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriasMoto`;
  }

  update(id: number, updateCategoriasMotoDto: UpdateCategoriasMotoDto) {
    return `This action updates a #${id} categoriasMoto`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriasMoto`;
  }
}