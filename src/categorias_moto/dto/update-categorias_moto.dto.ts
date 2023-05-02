import { PartialType } from '@nestjs/swagger';
import { CreateCategoriasMotoDto } from './create-categorias_moto.dto';

export class UpdateCategoriasMotoDto extends PartialType(CreateCategoriasMotoDto) {}
