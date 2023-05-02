import { Module } from '@nestjs/common';
import { MotosService } from './motos.service';
import { MotosController } from './motos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Moto, MotoSchema } from 'src/motos/schemas/motos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Moto.name, schema: MotoSchema }]),
  ],
  controllers: [MotosController],
  providers: [MotosService],
})
export class MotosModule {}
