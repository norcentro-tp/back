import { Module } from '@nestjs/common';
import { CategoriasMotoService } from './categorias_moto.service';
import { CategoriasMotoController } from './categorias_moto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CategoriaMoto,
  CategoriaMotoSchema,
} from './schemas/categorias_moto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CategoriaMoto.name, schema: CategoriaMotoSchema },
    ]),
  ],
  controllers: [CategoriasMotoController],
  providers: [CategoriasMotoService],
})
export class CategoriasMotoModule {}
