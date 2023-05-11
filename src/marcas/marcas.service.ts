import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './schemas/marcas.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MarcasService {
  constructor(@InjectModel(Marca.name) private marcaModel: Model<Marca>) {}

  async create(createMarcaDto: CreateMarcaDto) {
    return await this.marcaModel.create({
      _id: new Types.ObjectId(),
      nombre: createMarcaDto.nombre
    });
  }

  findAll() {
    return this.marcaModel.find().exec();
  }


  async findOne(id: string) {
    return await this.marcaModel
      .findById(id)
  }

  async update(id: string, updateMarcaDto: UpdateMarcaDto) {
    return await this.marcaModel.findByIdAndUpdate(id, updateMarcaDto);
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }
}
