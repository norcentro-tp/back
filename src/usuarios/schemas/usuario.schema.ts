import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';
import { TipoDocumento } from 'src/tipo_documentos/schemas/tipo_documentos.schema';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema({ collection: 'usuario' })
export class Usuario {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombres: string;

  @Prop()
  apellidos: string;

  @Prop()
  telefono: string;

  @Prop()
  correo: string;

  @Prop()
  departamento: string;

  @Prop()
  provincia: string;

  @Prop()
  password: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
