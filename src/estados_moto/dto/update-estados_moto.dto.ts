import { PartialType } from '@nestjs/swagger';
import { CreateEstadosMotoDto } from './create-estados_moto.dto';

export class UpdateEstadosMotoDto extends PartialType(CreateEstadosMotoDto) {}
