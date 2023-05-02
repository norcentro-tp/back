import { Module } from '@nestjs/common';
import { CampaniasService } from './campanias.service';
import { CampaniasController } from './campanias.controller';
import {
  Campania,
  CampaniaSchema,
} from 'src/campanias/schemas/campanias.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Campania.name, schema: CampaniaSchema },
    ]),
  ],
  controllers: [CampaniasController],
  providers: [CampaniasService],
})
export class CampaniasModule {}
