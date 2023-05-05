import { Injectable } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { Proveedor } from './schemas/proveedores.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProveedoresService {
  constructor(@InjectModel(Proveedor.name) private proveedorModel: Model<Proveedor>) {}
  create(createProveedoreDto: CreateProveedoreDto) {
    return 'This action adds a new proveedore';
  }

  async findAll() {
    return await this.proveedorModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} proveedore`;
  }

  update(id: number, updateProveedoreDto: UpdateProveedoreDto) {
    return `This action updates a #${id} proveedore`;
  }

  remove(id: number) {
    return `This action removes a #${id} proveedore`;
  }
}
