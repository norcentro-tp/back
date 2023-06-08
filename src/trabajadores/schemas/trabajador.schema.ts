import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';
import { Usuario } from 'src/usuarios/schemas/usuario.schema';

export type TrabajadorDocument = HydratedDocument<Trabajador>;

@Schema({ collection: 'trabajador' })
export class Trabajador {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombres: string;

  @Prop()
  apellido_paterno: string;

  @Prop()
  apellido_materno: string;

  @Prop()
  correo: string;

  @Prop()
  telefono: string;

  @Prop()
  fecha_nacimiento: Date;

  @Prop()
  estado: string;

  @Prop({ type: Object })
  documento_identificador: object;

  @Prop({ type: SchemaMongo.Types.ObjectId, ref: Usuario.name })
  usuario: { type: SchemaMongo.Types.ObjectId; ref: 'usuario' };
}

export const TrabajadorSchema = SchemaFactory.createForClass(Trabajador);
