import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';

export type ProveedorDocument = HydratedDocument<Marca>;

@Schema({ collection: 'marca' })
export class Marca {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombre: string;

  @Prop()
  estado: string;
}

export const MarcaSchema = SchemaFactory.createForClass(Marca);
