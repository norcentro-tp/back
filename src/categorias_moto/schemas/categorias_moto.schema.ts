import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';

export type CategoriaMotoDocument = HydratedDocument<CategoriaMoto>;

@Schema({ collection: 'categoria_moto' })
export class CategoriaMoto {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombre: string;
}

export const CategoriaMotoSchema = SchemaFactory.createForClass(CategoriaMoto);
