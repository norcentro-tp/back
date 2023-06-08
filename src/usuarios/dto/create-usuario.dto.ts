import { ApiProperty } from '@nestjs/swagger';
export class CreateUsuarioDto {
    @ApiProperty({
      type: String,
      description: 'Nombres',
    })
    nombre_usuario: string;
    @ApiProperty({
      type: String,
      description: 'Contraseña',
    })
    password: string;
    @ApiProperty({
      type: String,
      description: 'Tipo de Usuario',
    })
    tipo_usuario: string;
    @ApiProperty({
      type: String,
      description: 'Correo',
    })
    correo: string;
    @ApiProperty({
      type: String,
      description: 'Estado',
    })
    estado: string;
  }
