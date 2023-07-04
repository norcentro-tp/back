import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Patch,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
    UseInterceptors,
    UploadedFiles
  } from '@nestjs/common';
  import { VentasService } from './ventas.service';
  import { CreateVentaDto } from './dto/create-venta.dto';
  import { UpdateVentaDto } from './dto/update-venta.dto';
  import { FilesInterceptor } from '@nestjs/platform-express';
  import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
  @ApiTags('Ventas')
  @Controller('ventas')
  export class VentasController {
    constructor(private readonly ventasService: VentasService) {}
  
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'Venta registrada' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
    @Post()
    @UseInterceptors(FilesInterceptor('imageFiles'))
    create(
      @Body() createVentaDto: CreateVentaDto,
      @UploadedFiles() imageFiles: Express.Multer.File[]
    ) {
      return this.ventasService.create(createVentaDto, imageFiles);
    }
  
    @Get()
    findAll() {
      return this.ventasService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.ventasService.findOne(id);
    }
  
  
    @ApiOkResponse({ description: 'The resource was updated successfully' })
    @ApiNotFoundResponse({ description: 'Resource not found' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @Put(':id')
    @UseInterceptors(FilesInterceptor('imageFiles'))
    update(
      @Param('id') id: string,
      @Body() updateVentaDto: UpdateVentaDto,
      @UploadedFiles() imageFiles: Express.Multer.File[]
    ) {
      return this.ventasService.update(id, updateVentaDto, imageFiles);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.ventasService.remove(id);
    }
    
  }