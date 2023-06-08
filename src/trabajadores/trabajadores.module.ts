import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrabajadoresService } from './trabajadores.service';
import { TrabajadoresController } from './trabajadores.controller';
import { Trabajador, TrabajadorSchema } from './schemas/trabajador.schema';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trabajador.name, schema: TrabajadorSchema }]),
    UsuariosModule
  ],
  controllers: [TrabajadoresController],
  providers: [TrabajadoresService],
})
export class TrabajadoresModule {}