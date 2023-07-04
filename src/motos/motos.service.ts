import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Moto } from './schemas/motos.schema';
@Injectable()
export class MotosService {
  constructor(@InjectModel(Moto.name) private motoModel: Model<Moto>) {}

  async create(createMotoDto: CreateMotoDto) {
    return await this.motoModel.create({
      _id: new Types.ObjectId(),
      codigo_vin: createMotoDto.codigo_vin,
      color: createMotoDto.color,
      modelo: new Types.ObjectId(createMotoDto.modelo),
      proveedor: new Types.ObjectId(createMotoDto.proveedor),
      estado: new Types.ObjectId(createMotoDto.estado),
    });
  }

  async findAll() {
    return await this.motoModel
      .find()
      .populate({
        path: 'modelo',
        populate: {
          path: 'marca'
        }
      })
      .populate('proveedor')
      .populate('estado');
  }

  async findOne(id: string) {
    return await this.motoModel
      .findById(id)
      .populate({
        path: 'modelo',
        populate: {
          path: 'marca'
        }
      })
      .populate('proveedor')
      .populate('estado');
  }

  async findAllVenta() {
    const estadoEnTienda = new Types.ObjectId('644985cfc5afa53631a30c13');
    return await this.motoModel
      .find({ estado: estadoEnTienda })
      .populate({
        path: 'modelo',
        populate: {
          path: 'marca'
        }
      })
      .populate('proveedor')
      .populate('estado');
  }

  async update(id: string, updateMotoDto: UpdateMotoDto) {
    return await this.motoModel.findByIdAndUpdate(id, updateMotoDto);
  }

  async remove(id: string) {
    const estadoInactivo = new Types.ObjectId('6455c77e676ef5d189c4923c');
    return await this.motoModel.findByIdAndUpdate(id, {
      estado: estadoInactivo,
    });
  }
}
