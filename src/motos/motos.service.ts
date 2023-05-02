import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Moto } from './schemas/motos.schema';

@Injectable()
export class MotosService {
  constructor(@InjectModel(Moto.name) private motoModel: Model<Moto>) {}

  create(createMotoDto: CreateMotoDto) {
    return 'This action adds a new moto';
  }

  async findAll() {
    return await this.motoModel
      .find()
      .populate({ path: 'modelo', populate: { path: 'categoria' } })
      .populate('proveedor')
      .populate('campania')
      .populate('estado');
  }

  findOne(id: number) {
    return `This action returns a #${id} moto`;
  }

  update(id: number, updateMotoDto: UpdateMotoDto) {
    return `This action updates a #${id} moto`;
  }

  remove(id: number) {
    return `This action removes a #${id} moto`;
  }
}
