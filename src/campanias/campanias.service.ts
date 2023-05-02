import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCampaniaDto } from './dto/create-campania.dto';
import { UpdateCampaniaDto } from './dto/update-campania.dto';
import { Campania } from './schemas/campanias.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CampaniasService {
  constructor(
    @InjectModel(Campania.name) private campaniaModel: Model<Campania>,
  ) {}

  create(createCampaniaDto: CreateCampaniaDto) {
    return 'This action adds a new campania';
  }

  findAll() {
    return this.campaniaModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} campania`;
  }

  update(id: number, updateCampaniaDto: UpdateCampaniaDto) {
    return `This action updates a #${id} campania`;
  }

  remove(id: number) {
    return `This action removes a #${id} campania`;
  }
}
