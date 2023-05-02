import { Module } from '@nestjs/common';
import { TipoDocumentosService } from './tipo_documentos.service';
import { TipoDocumentosController } from './tipo_documentos.controller';

@Module({
  controllers: [TipoDocumentosController],
  providers: [TipoDocumentosService]
})
export class TipoDocumentosModule {}
