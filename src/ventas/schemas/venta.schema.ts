import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { Moto } from 'src/motos/schemas/motos.schema';

export type VentaDocument = HydratedDocument<Venta>;

@Schema({ collection: 'ventaTienda' })
export class Venta {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  monto: number;

  @Prop()
  fecha_venta: string;

  @Prop()
  fecha_entrega: string;

  @Prop()
  metodo_pago: string;

  @Prop()
  boleta_pago: Array<object>;

  @Prop({ type: SchemaMongo.Types.ObjectId, ref: Moto.name })
  moto: { type: SchemaMongo.Types.ObjectId; ref: 'moto' };
  
  @Prop({ type: SchemaMongo.Types.ObjectId, ref: Cliente.name })
  cliente: { type: SchemaMongo.Types.ObjectId; ref: 'cliente' };
}

export const VentaSchema = SchemaFactory.createForClass(Venta);
