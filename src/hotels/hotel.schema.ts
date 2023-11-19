import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel {
  @Prop()
  name: string;

  @Prop()
  location: string;

  @Prop()
  region: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Room' }] })
  rooms: Types.ObjectId[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);