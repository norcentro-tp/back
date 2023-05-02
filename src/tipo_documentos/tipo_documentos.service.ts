import { Injectable } from '@nestjs/common';
import { CreateTipoDocumentoDto } from './dto/create-tipo_documento.dto';
import { UpdateTipoDocumentoDto } from './dto/update-tipo_documento.dto';

@Injectable()
export class TipoDocumentosService {
  create(createTipoDocumentoDto: CreateTipoDocumentoDto) {
    return 'This action adds a new tipoDocumento';
  }

  findAll() {
    return `This action returns all tipoDocumentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDocumento`;
  }

  update(id: number, updateTipoDocumentoDto: UpdateTipoDocumentoDto) {
    return `This action updates a #${id} tipoDocumento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDocumento`;
  }
}
