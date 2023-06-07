import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
  UseInterceptors,
  UploadedFiles
} from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@ApiTags('Marcas Moto')
@Controller('marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Marca agregada' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
  @Post()
  @UseInterceptors(FilesInterceptor('imageFiles'))
  create(
    @Body() createMarcaDto: CreateMarcaDto,
    @UploadedFiles() imageFiles: Express.Multer.File[]
  ) {
    console.log(imageFiles)
    return this.marcasService.create(createMarcaDto,imageFiles);
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
  @UseInterceptors(FilesInterceptor('imageFiles'))
  update(
    @Param('id') id: string,
    @Body() updateMarcaDto: UpdateMarcaDto,
    @UploadedFiles() imageFiles: Express.Multer.File[]
  ) {
    return this.marcasService.update(id, updateMarcaDto,imageFiles);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcasService.remove(id);
  }
}
