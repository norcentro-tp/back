import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@ApiTags('Marcas Moto')
@Controller('marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Proveedor agregado' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
  @Post()
  create(@Body() createMarcaDto: CreateMarcaDto) {
    return this.marcasService.create(createMarcaDto);
  }

  @Get()
  findAll() {
    return this.marcasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcasService.findOne(id);
  }

  @ApiOkResponse({ description: 'The resource was updated successfully' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateMarcaDto: UpdateMarcaDto,
  ) {
    return this.marcasService.update(id, updateMarcaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcasService.remove(+id);
  }
}
