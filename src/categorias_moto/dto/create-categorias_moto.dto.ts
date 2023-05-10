import { ApiProperty } from '@nestjs/swagger';
export class CreateCategoriasMotoDto {
  @ApiProperty({
    type: String,
    description: 'Nombre',
  })
  nombre: string;
}
