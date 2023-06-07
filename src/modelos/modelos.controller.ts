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
  UseInterceptors,
  UploadedFiles
} from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
@ApiTags('Modelos Moto')
@Controller('modelos')
export class ModelosController {
  constructor(private readonly modelosService: ModelosService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Modelo agregado' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
  @Post()
  @UseInterceptors(FilesInterceptor('imageFiles'))
  create(
    @Body() createModeloDto: CreateModeloDto,
    @UploadedFiles() imageFiles: Express.Multer.File[]
  ) {
    return this.modelosService.create(createModeloDto, imageFiles);
  }

  @Get()
  findAll() {
    return this.modelosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modelosService.findOne(id);
  }


  @ApiOkResponse({ description: 'The resource was updated successfully' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @Put(':id')
  @UseInterceptors(FilesInterceptor('imageFiles'))
  update(
    @Param('id') id: string,
    @Body() updateModeloDto: UpdateModeloDto,
    @UploadedFiles() imageFiles: Express.Multer.File[]
  ) {
    return this.modelosService.update(id, updateModeloDto, imageFiles);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modelosService.remove(id);
  }
  
}
