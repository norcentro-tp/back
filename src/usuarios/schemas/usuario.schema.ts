import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema({ collection: 'usuario' })
export class Usuario {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombre_usuario: string;

  @Prop()
  password: string;

  @Prop()
  tipo_usuario: string;

  @Prop()
  estado: string;

  @Prop()
  correo: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
