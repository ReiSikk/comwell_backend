import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
  @Prop()
  available: boolean;

  @Prop()
  roomType: string;

  @Prop()
  roomSize: string;

  @Prop()
  bedTypes: Array<string>;

  @Prop()
  facilities: Array<string>;

}

export const RoomSchema = SchemaFactory.createForClass(Room);