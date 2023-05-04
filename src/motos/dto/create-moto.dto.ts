import { ApiProperty } from '@nestjs/swagger';
export class CreateMotoDto {
  @ApiProperty({
    type: String,
    description: 'Codigo Vin',
  })
  codigo_vin: string;
  @ApiProperty({
    type: String,
    description: 'Color de la moto',
  })
  color: string;
  @ApiProperty({
    type: String,
    description: 'ID del modelo de la moto',
  })
  modelo: string;
  @ApiProperty({
    type: String,
    description: 'Lista de campanias',
  })
  campania: Array<string>;
  @ApiProperty({
    type: String,
    description: 'ID del proveedor',
  })
  proveedor: string;
  @ApiProperty({
    type: String,
    description: 'ID del estado',
  })
  estado: string;
}
