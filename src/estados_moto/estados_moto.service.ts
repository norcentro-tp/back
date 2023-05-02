import { Injectable } from '@nestjs/common';
import { CreateEstadosMotoDto } from './dto/create-estados_moto.dto';
import { UpdateEstadosMotoDto } from './dto/update-estados_moto.dto';

@Injectable()
export class EstadosMotoService {
  create(createEstadosMotoDto: CreateEstadosMotoDto) {
    return 'This action adds a new estadosMoto';
  }

  findAll() {
    return `This action returns all estadosMoto`;
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
