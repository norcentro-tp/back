import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';
import { CategoriaMoto } from 'src/categorias_moto/schemas/categorias_moto.schema';
import { Marca } from './../../marcas/schemas/marcas.schema';

export type ModeloDocument = HydratedDocument<Modelo>;

@Schema({ collection: 'modelo' })
export class Modelo {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop()
  cilindrada: string;

  @Prop()
  velocidades: number;

  @Prop()
  capacidad_tanque: number;

  @Prop()
  torque: string;

  @Prop()
  motor: string;

  @Prop()
  potencia: string;

  @Prop()
  anio: string;

  @Prop()
  precio: number;

  @Prop({ type: SchemaMongo.Types.ObjectId, ref: CategoriaMoto.name })
  categoria: { type: SchemaMongo.Types.ObjectId; ref: 'categoria' };
  
  @Prop({ type: SchemaMongo.Types.ObjectId, ref: Marca.name })
  marca: { type: SchemaMongo.Types.ObjectId; ref: 'marca' };

  @Prop()
  colores: Array<object>;

  @Prop()
  fotos: Array<object>;

  @Prop()
  estado: string;

  @Prop()
  catalogo: string;

}

export const ModeloSchema = SchemaFactory.createForClass(Modelo);
