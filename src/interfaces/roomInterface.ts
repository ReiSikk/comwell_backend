import { Document } from 'mongoose';

export interface Room extends Document {
    available: boolean;
    roomType: string;
    roomSize: string;
    bedTypes: string[];
    facilities: string[];
  }