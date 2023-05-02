import { Injectable } from '@nestjs/common';
import { CreateCategoriasMotoDto } from './dto/create-categorias_moto.dto';
import { UpdateCategoriasMotoDto } from './dto/update-categorias_moto.dto';

@Injectable()
export class CategoriasMotoService {
  create(createCategoriasMotoDto: CreateCategoriasMotoDto) {
    return 'This action adds a new categoriasMoto';
  }

  findAll() {
    return `This action returns all categoriasMoto`;
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
