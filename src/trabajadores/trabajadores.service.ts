import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { CreateTrabajadorDto } from './dto/create-trabajador.dto';
import { UpdateTrabajadorDto } from './dto/update-trabajador.dto';

import { Trabajador } from './schemas/trabajador.schema';

@Injectable()
export class TrabajadoresService {
  constructor(
    @InjectModel(Trabajador.name) private trabajadorModel: Model<Trabajador>,
    private readonly usersService: UsuariosService
    ) {}

  async create(createTrabajadorDto: CreateTrabajadorDto) {
    createTrabajadorDto.usuario.correo=createTrabajadorDto.correo;
    createTrabajadorDto.usuario.tipo_usuario="6455ad27676ef5d189c491ad";

    const usuarioDto = createTrabajadorDto.usuario;

    const usuarioCreado = await this.usersService.create(usuarioDto);

    return await this.trabajadorModel.create({
      _id: new Types.ObjectId(),
      nombres: createTrabajadorDto.nombres,
      apellido_paterno: createTrabajadorDto.apellido_paterno,
      apellido_materno: createTrabajadorDto.apellido_materno,
      correo: createTrabajadorDto.correo,
      telefono: createTrabajadorDto.telefono,
      fecha_nacimiento: createTrabajadorDto.fecha_nacimiento,
      documento_identificador: createTrabajadorDto.documento_identificador,
      usuario: usuarioCreado._id,
      estado: 'activo'
    });
  }

  async findAll(): Promise<Trabajador[]> {
    return await this.trabajadorModel      
      .find({ estado: { $ne: 'inactivo' } })
      .populate('usuario')
      .exec();
  }

  async findOne(id: string): Promise<Trabajador> {
    return await this.trabajadorModel
      .findById(id)
      .populate('usuario')
      .exec();
  }

  async update(id: string, updateTrabajadorDto: UpdateTrabajadorDto) {
    updateTrabajadorDto.usuario.correo=updateTrabajadorDto.correo;

    const usuarioDto = updateTrabajadorDto.usuario;

    await this.usersService.update(usuarioDto._id.toString(), usuarioDto);

    return await this.trabajadorModel.findByIdAndUpdate(id, updateTrabajadorDto);
  }

  async remove(id: string) {
    return await this.trabajadorModel.findByIdAndUpdate(id, {
      estado: 'inactivo',
    });
  }
}
