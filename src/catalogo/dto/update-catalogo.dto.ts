import { PartialType } from '@nestjs/swagger';
import { CreateModeloDto } from './create-catalogo.dto';

export class UpdateModeloDto extends PartialType(CreateModeloDto) {}
