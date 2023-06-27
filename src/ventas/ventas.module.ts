import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';

@Module({
  providers: [VentasService],
  controllers: [VentasController]
})
export class VentasModule {}
