import {
  UseInterceptors,
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TransformInterceptor } from 'src/common/interceptors/format-response.interceptor';
import { TrabajadoresService } from './trabajadores.service';
import { CreateTrabajadorDto } from './dto/create-trabajador.dto';
import { UpdateTrabajadorDto } from './dto/update-trabajador.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Trabajadores')
@UseInterceptors(TransformInterceptor)
@Controller('trabajador')
export class TrabajadoresController {
  constructor(private readonly trabajadoresService: TrabajadoresService) {}

  @Post()
  create(@Body() createTrabajadorDto: CreateTrabajadorDto) {
    return this.trabajadoresService.create(createTrabajadorDto);
  }

  @Get()
  findAll() {
    return this.trabajadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trabajadoresService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTrabajadorDto: UpdateTrabajadorDto) {
    return this.trabajadoresService.update(id, updateTrabajadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trabajadoresService.remove(id);
  }
}
