import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EstadosMotoService } from './estados_moto.service';
import { CreateEstadosMotoDto } from './dto/create-estados_moto.dto';
import { UpdateEstadosMotoDto } from './dto/update-estados_moto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Estados Moto')
@Controller('estados-moto')
export class EstadosMotoController {
  constructor(private readonly estadosMotoService: EstadosMotoService) {}

  @Post()
  create(@Body() createEstadosMotoDto: CreateEstadosMotoDto) {
    return this.estadosMotoService.create(createEstadosMotoDto);
  }

  @Get()
  findAll() {
    return this.estadosMotoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadosMotoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstadosMotoDto: UpdateEstadosMotoDto,
  ) {
    return this.estadosMotoService.update(+id, updateEstadosMotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadosMotoService.remove(+id);
  }
}
