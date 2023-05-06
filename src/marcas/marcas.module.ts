import { Module } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { MarcasController } from './marcas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Marca, MarcaSchema } from './schemas/marcas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Marca.name, schema: MarcaSchema }]),
  ],
  controllers: [MarcasController],
  providers: [MarcasService],
})
export class MarcasModule {}
