import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { Proveedor } from './schemas/proveedores.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectModel(Proveedor.name) private proveedorModel: Model<Proveedor>,
  ) {}
  async create(createProveedoreDto: CreateProveedorDto) {
    return await this.proveedorModel.create({
      _id: new Types.ObjectId(),
      nombre: createProveedoreDto.nombre,
      telefono: createProveedoreDto.telefono,
      correo: createProveedoreDto.correo,
      direccion: createProveedoreDto.direccion,
      estado:'activo'
    });
  }

  async findAll(): Promise<Proveedor[]> {
    return await this.proveedorModel
      .find({ estado: { $ne: 'inactivo' } })
      .exec();
  }

  async findOne(id: string) {
    return await this.proveedorModel
      .findById(id)
  }

  async update(id: string, updateProveedoreDto: UpdateProveedorDto) {
    return await this.proveedorModel.findByIdAndUpdate(id, updateProveedoreDto);
  }

  async remove(id: string) {
    return await this.proveedorModel.findByIdAndUpdate(id, {
      estado: 'inactivo',
    });
  }
}
