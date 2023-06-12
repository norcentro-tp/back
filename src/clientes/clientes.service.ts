import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

import { Cliente } from './schemas/cliente.schema';

@Injectable()
export class ClientesService {
  constructor(
    @InjectModel(Cliente.name) private clienteModel: Model<Cliente>,
    private readonly usersService: UsuariosService
    ) {}

  async create(createClienteDto: CreateClienteDto) {
    createClienteDto.usuario.correo=createClienteDto.correo;
    createClienteDto.usuario.tipo_usuario="6455ad27676ef5d189c491ae";

    const usuarioDto = createClienteDto.usuario;

    const usuarioCreado = await this.usersService.create(usuarioDto);

    return await this.clienteModel.create({
      _id: new Types.ObjectId(),
      nombres: createClienteDto.nombres,
      apellido_paterno: createClienteDto.apellido_paterno,
      apellido_materno: createClienteDto.apellido_materno,
      correo: createClienteDto.correo,
      telefono: createClienteDto.telefono,
      direccion: createClienteDto.direccion,
      documento_identificador: createClienteDto.documento_identificador,
      usuario: usuarioCreado._id,
      estado: 'activo'
    });
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteModel
      .find({ estado: { $ne: 'inactivo' } })
      .populate('usuario')
      .exec();
  }

  async findOne(id: string): Promise<Cliente> {
    return await this.clienteModel
      .findById(id)
      .populate('usuario')
      .exec();
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    updateClienteDto.usuario.correo=updateClienteDto.correo;

    const usuarioDto = updateClienteDto.usuario;

    await this.usersService.update(usuarioDto._id.toString(), usuarioDto);

    return await this.clienteModel.findByIdAndUpdate(id, updateClienteDto);
  }

  async remove(id: string) {
    return await this.clienteModel.findByIdAndUpdate(id, {
      estado: 'inactivo',
    });
  }
}
