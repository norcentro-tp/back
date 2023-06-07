import { ApiProperty } from '@nestjs/swagger';
export class CreateModeloDto {
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
      description: 'Cilindrada',
    })
    cilindrada: string;
    @ApiProperty({
      type: Number,
      description: 'Velocidades',
    })
    velocidades: number;
    @ApiProperty({
      type: Number,
      description: 'Capacidad de Tanque',
    })
    capacidad_tanque: number;
    @ApiProperty({
      type: String,
      description: 'Torque',
    })
    torque: string;
    @ApiProperty({
      type: String,
      description: 'Motor',
    })
    motor: string;
    @ApiProperty({
      type: String,
      description: 'Potencia',
    })
    potencia: string;
    @ApiProperty({
      type: String,
      description: 'Anio',
    })
    anio: string;
    @ApiProperty({
      type: Number,
      description: 'Precio',
    })
    precio: number;
    @ApiProperty({
      type: String,
      description: 'ID de la categoria del modelo',
    })
    categoria: string;
    @ApiProperty({
      type: String,
      description: 'ID de la marca del modelo',
    })
    marca: string;
    @ApiProperty({
      type: String,
      description: 'Lista de colores disponibles',
    })
    colores: Array<object>;
    @ApiProperty({
      type: String,
      description: 'Lista de fotos del modelo',
    })
    fotos: Array<object>;
    @ApiProperty({
      type: String,
      description: 'Estado',
    })
    estado: string;
  }
