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
    description: 'ID de la categoria de la moto',
  })
  categoria: string;
  @ApiProperty({
    type: String,
    description: 'ID del modelo de la moto',
  })
  modelo: string;
  @ApiProperty({
    type: String,
    description: 'ID de la marca de la moto',
  })
  marca: string;
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
  @ApiProperty({
    type: String,
    description: 'Lista de ofertas',
  })
  oferta: Array<string>;
}
