import { Module } from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { ModelosController } from './modelos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Modelo, ModeloSchema } from 'src/modelos/schemas/modelos.schema';
import { FirebaseService } from 'src/storage/firebase.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Modelo.name, schema: ModeloSchema }]),
  ],
  controllers: [ModelosController],
  providers: [ModelosService, FirebaseService],
})
export class ModelosModule {}
