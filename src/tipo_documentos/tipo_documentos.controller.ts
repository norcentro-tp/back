import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoDocumentosService } from './tipo_documentos.service';
import { CreateTipoDocumentoDto } from './dto/create-tipo_documento.dto';
import { UpdateTipoDocumentoDto } from './dto/update-tipo_documento.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tipo Documentos')
@Controller('tipo-documentos')
export class TipoDocumentosController {
  constructor(private readonly tipoDocumentosService: TipoDocumentosService) {}

  @Post()
  create(@Body() createTipoDocumentoDto: CreateTipoDocumentoDto) {
    return this.tipoDocumentosService.create(createTipoDocumentoDto);
  }

  @Get()
  findAll() {
    return this.tipoDocumentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDocumentosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoDocumentoDto: UpdateTipoDocumentoDto,
  ) {
    return this.tipoDocumentosService.update(+id, updateTipoDocumentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDocumentosService.remove(+id);
  }
}
