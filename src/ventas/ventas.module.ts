import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { Venta, VentaSchema } from './schemas/venta.schema';
import { FirebaseService } from 'src/storage/firebase.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Venta.name, schema: VentaSchema }]),
  ],
  controllers: [VentasController],
  providers: [VentasService, FirebaseService],
})
export class VentasModule {}
