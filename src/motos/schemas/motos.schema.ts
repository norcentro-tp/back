import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';
import { Modelo } from 'src/modelos/schemas/modelos.schema';
import { Proveedor } from 'src/proveedores/schemas/proveedores.schema';
import { Campania } from 'src/campanias/schemas/campanias.schema';
import { EstadoMoto } from 'src/estados_moto/schemas/estados_moto.schema';
import { Marca } from 'src/marcas/schemas/marcas.schema';
import { CategoriaMoto } from 'src/categorias_moto/schemas/categorias_moto.schema';

export type TipoDocumentoDocument = HydratedDocument<Moto>;

@Schema({ collection: 'moto' })
export class Moto {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  codigo_vin: string;

  @Prop()
  color: string;

  @Prop({ type: SchemaMongo.Types.ObjectId, ref: Modelo.name })
  modelo: { type: SchemaMongo.Types.ObjectId; ref: 'modelo' };

  @Prop({ type: SchemaMongo.Types.ObjectId, ref: Marca.name })
  marca: { type: SchemaMongo.Types.ObjectId; ref: 'marca' };

  @Prop({ type: SchemaMongo.Types.ObjectId, ref: CategoriaMoto.name })
  categoria: { type: SchemaMongo.Types.ObjectId; ref: 'categoria' };

  @Prop({ type: SchemaMongo.Types.ObjectId, ref: Proveedor.name })
  proveedor: { type: SchemaMongo.Types.ObjectId; ref: 'proveedor' };

  @Prop([{ type: SchemaMongo.Types.ObjectId, ref: Campania.name }])
  campania: [{ type: SchemaMongo.Types.ObjectId; ref: 'campania' }];

  @Prop({ type: SchemaMongo.Types.ObjectId, ref: EstadoMoto.name })
  estado_moto: { type: SchemaMongo.Types.ObjectId; ref: 'estado_moto' };
}

export const MotoSchema = SchemaFactory.createForClass(Moto);
