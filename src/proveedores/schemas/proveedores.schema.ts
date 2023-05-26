import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';

export type ProveedorDocument = HydratedDocument<Proveedor>;

@Schema({ collection: 'proveedor' })
export class Proveedor {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombre: string;

  @Prop()
  telefono: string;

  @Prop()
  correo: string;

  @Prop()
  direccion: string;

  @Prop()
  estado: string;
}

export const ProveedorSchema = SchemaFactory.createForClass(Proveedor);
