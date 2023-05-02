import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';

export type ProveedorDocument = HydratedDocument<Campania>;

@Schema({ collection: 'campania' })
export class Campania {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop()
  descuento: number;
}

export const CampaniaSchema = SchemaFactory.createForClass(Campania);
