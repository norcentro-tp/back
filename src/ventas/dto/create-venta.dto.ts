import { ApiProperty } from '@nestjs/swagger';
export class CreateVentaDto {
  @ApiProperty({
    type: String,
    description: 'Nombre',
  })
  nombre: string;
}

