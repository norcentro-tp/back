import { ApiProperty } from '@nestjs/swagger';
export class CreateVentaDto {
  @ApiProperty({
    type: String,
    description: 'Monto',
  })
  monto: number;
  @ApiProperty({
    type: String,
    description: 'Metodo de Pago',
  })
  metodo_pago: string;
  @ApiProperty({
    type: String,
    description: 'Fecha de Venta',
  })
  fecha_venta: string;
  @ApiProperty({
    type: String,
    description: 'Fecha de Entrega',
  })
  fecha_entrega: string;
  @ApiProperty({
    type: String,
    description: 'ID de la moto',
  })
  moto: string;
  @ApiProperty({
    type: String,
    description: 'ID del cliente',
  })
  cliente: string;
  @ApiProperty({
    type: String,
    description: 'Boleta de Pago',
  })
  boleta_pago: Array<object>;
}

