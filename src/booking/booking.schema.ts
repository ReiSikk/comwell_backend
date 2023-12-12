import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {

@Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    userId: string;
    
  
  @Prop()
  guest: string;

  @Prop()
  guestEmail: string;

  @Prop()
  guestPhone: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Hotel' })
  selectedHotel: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Room' })
  selectedRoom: string;

  @Prop()
  roomType: string;

  @Prop()
  roomPrice: string;

  @Prop()
  checkIn: string;

  @Prop()
   checkOut: string;

  


}

export const BookingSchema = SchemaFactory.createForClass(Booking);