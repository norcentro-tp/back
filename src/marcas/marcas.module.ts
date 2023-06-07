import { Module } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { MarcasController } from './marcas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Marca, MarcaSchema } from './schemas/marcas.schema';
import { FirebaseService } from 'src/storage/firebase.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Marca.name, schema: MarcaSchema }]),
  ],
  controllers: [MarcasController],
  providers: [MarcasService, FirebaseService],
})
export class MarcasModule {}
