import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MotosService } from './motos.service';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiUnprocessableEntityResponse,
  ApiUnauthorizedResponse,
  ApiNotFoundResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';

@ApiTags('Motos')
@Controller('motos')
export class MotosController {
  constructor(private readonly motosService: MotosService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Moto agregada' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
  @Post()
  create(@Body() createMotoDto: CreateMotoDto) {
    return this.motosService.create(createMotoDto);
  }

  @Get()
  findAll() {
    return this.motosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motosService.findOne(id);
  }

  @ApiOkResponse({ description: 'The resource was updated successfully' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMotoDto: UpdateMotoDto) {
    return this.motosService.update(id, updateMotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motosService.remove(+id);
  }
}
