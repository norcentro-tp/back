import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongo } from 'mongoose';

export type ProveedorDocument = HydratedDocument<EstadoMoto>;

@Schema({ collection: 'estado_moto' })
export class EstadoMoto {
  @Prop()
  _id: SchemaMongo.Types.ObjectId;

  @Prop()
  nombre: string;
}

export const EstadoMotoSchema = SchemaFactory.createForClass(EstadoMoto);
