import { ApiProperty } from '@nestjs/swagger';
export class CreateMarcaDto {
  @ApiProperty({
    type: String,
    description: 'Nombre',
  })
  nombre: string;
}

