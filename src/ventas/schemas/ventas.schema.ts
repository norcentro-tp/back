import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';

export type VentaDocument = HydratedDocument<Venta>;

@Schema({ collection: 'venta' })
export class Venta {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombre: string;
}

export const VentaSchema = SchemaFactory.createForClass(Venta);
