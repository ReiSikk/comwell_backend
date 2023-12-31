
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  @Prop()
  fullName: string;

  @Prop()
  phone: number;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({ type: String, enum: ['user', 'admin'], default: 'user' })
  role: string;
  

}

export const UserSchema = SchemaFactory.createForClass(User);