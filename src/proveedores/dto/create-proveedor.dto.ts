import { ApiProperty } from '@nestjs/swagger';
export class CreateProveedorDto {
  @ApiProperty({
    type: String,
    description: 'Nombre',
  })
  nombre: string;
  @ApiProperty({
    type: String,
    description: 'Telefono',
  })
  telefono: string;
  @ApiProperty({
    type: String,
    description: 'Correo',
  })
  correo: string;
  @ApiProperty({
    type: String,
    description: 'Direccion',
  })
  direccion: string;
}

