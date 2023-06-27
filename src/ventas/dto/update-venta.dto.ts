import { PartialType } from '@nestjs/swagger';
import { CreateVentaDto } from './create-venta.dto';

export class UpdateProveedorDto extends PartialType(CreateVentaDto) {}
