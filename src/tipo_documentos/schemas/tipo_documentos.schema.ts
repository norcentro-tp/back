import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TipoDocumentoDocument = HydratedDocument<TipoDocumento>;

@Schema({ collection: 'tipo_documento' })
export class TipoDocumento {
  @Prop()
  nombre: string;
}

export const TipoDocumentoSchema = SchemaFactory.createForClass(TipoDocumento);
