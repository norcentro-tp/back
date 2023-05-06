import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './schemas/marcas.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MarcasService {
  constructor(@InjectModel(Marca.name) private marcaModel: Model<Marca>) {}

  create(createMarcaDto: CreateMarcaDto) {
    return 'This action adds a new marca';
  }

  findAll() {
    return this.marcaModel.find().exec();
  }

  findOne(id: string) {
    return this.marcaModel.findById(id).exec();
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return `This action updates a #${id} marca`;
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }
}
