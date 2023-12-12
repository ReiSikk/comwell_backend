import { Document } from 'mongoose';

export interface User extends Document {
    fullName: string;
    phone: number;
    username: string;
    password: string;
  }