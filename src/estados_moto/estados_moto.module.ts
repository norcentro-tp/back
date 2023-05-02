import { Module } from '@nestjs/common';
import { EstadosMotoService } from './estados_moto.service';
import { EstadosMotoController } from './estados_moto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EstadoMoto, EstadoMotoSchema } from './schemas/estados_moto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EstadoMoto.name, schema: EstadoMotoSchema },
    ]),
  ],
  controllers: [EstadosMotoController],
  providers: [EstadosMotoService],
})
export class EstadosMotoModule {}
