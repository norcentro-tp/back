import { Module } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CatalogoController } from './catalogo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Modelo, ModeloSchema } from 'src/modelos/schemas/modelos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Modelo.name, schema: ModeloSchema }]),
  ],
  controllers: [CatalogoController],
  providers: [CatalogoService],
})
export class CatalogoModule {}
