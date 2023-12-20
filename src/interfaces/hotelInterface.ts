import { Document, Types } from 'mongoose';

export interface Hotel extends Document {
    name: string;
    location: string;
    region: string;
    rooms: Types.ObjectId[];
  }