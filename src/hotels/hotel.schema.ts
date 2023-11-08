import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel {
  @Prop()
  name: string;

  @Prop()
  location: string;

  @Prop()
  region: string;

  @Prop()
  rooms: string[]
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);