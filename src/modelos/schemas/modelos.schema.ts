import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';
import { CategoriaMoto } from 'src/categorias_moto/schemas/categorias_moto.schema';

export type ModeloDocument = HydratedDocument<Modelo>;

@Schema({ collection: 'modelo' })
export class Modelo {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombre: string;

  @Prop()
  anio: string;

  @Prop()
  descripcion: string;

  @Prop()
  precio: number;

  @Prop()
  colores: Array<string>;

  @Prop()
  password: string;
}

export const ModeloSchema = SchemaFactory.createForClass(Modelo);
