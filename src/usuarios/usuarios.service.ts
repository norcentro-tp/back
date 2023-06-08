import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

import { Usuario } from './schemas/usuario.schema';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuario.name) private userModel: Model<Usuario>) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.userModel.create({
      _id: new Types.ObjectId(),
      nombre_usuario: createUsuarioDto.nombre_usuario,
      password: createUsuarioDto.password,
      tipo_usuario: new Types.ObjectId(createUsuarioDto.tipo_usuario),
      correo: createUsuarioDto.correo,
      estado: 'activo'
    });
  }

  async findAll(): Promise<Usuario[]> {
    return this.userModel
      .find()
      .populate('tipo_usuario')
      .exec();
  }

  async findOne(id: string): Promise<Usuario> {
    return this.userModel
      .findById(id)
      .populate('tipo_usuario')
      .exec();
  }

  async findByEmail(email: string): Promise<Usuario> {
    return this.userModel.findOne({ correo: email }).exec();
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUsuarioDto);
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndUpdate(id, {
      estado: 'inactivo',
    });
  }
}
