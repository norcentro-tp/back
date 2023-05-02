import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriasMotoService } from './categorias_moto.service';
import { CreateCategoriasMotoDto } from './dto/create-categorias_moto.dto';
import { UpdateCategoriasMotoDto } from './dto/update-categorias_moto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categorias Moto')
@Controller('categorias-moto')
export class CategoriasMotoController {
  constructor(private readonly categoriasMotoService: CategoriasMotoService) {}

  @Post()
  create(@Body() createCategoriasMotoDto: CreateCategoriasMotoDto) {
    return this.categoriasMotoService.create(createCategoriasMotoDto);
  }

  @Get()
  findAll() {
    return this.categoriasMotoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasMotoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriasMotoDto: UpdateCategoriasMotoDto,
  ) {
    return this.categoriasMotoService.update(+id, updateCategoriasMotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasMotoService.remove(+id);
  }
}
