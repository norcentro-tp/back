import { ApiProperty } from '@nestjs/swagger';
export class CreateMarcaDto {
  @ApiProperty({
    type: String,
    description: 'Nombre',
  })
  nombre: string;
  @ApiProperty({
    type: String,
    description: 'Descripcion',
  })
  descripcion: string;
  @ApiProperty({
    type: String,
    description: 'Estado',
  })
  estado: string;
  @ApiProperty({
    type: String,
    description: 'Nombre',
  })
  icono: string ;
}

