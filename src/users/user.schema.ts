

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  @Prop()
  fullname: string;

  @Prop()
  email: string;

  @Prop()
  phone: number;

  @Prop()
  password: string;

  @Prop()
  confirmPassword: string;

  @Prop()
  birthDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);