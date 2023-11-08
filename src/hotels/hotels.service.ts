import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './hotel.schema';

@Injectable()
export class HotelsService {

  constructor(@InjectModel(Hotel.name) private hotelModel: Model<Hotel>) {}

  async getHotels(): Promise<Hotel[]> {
    return await this.hotelModel.find().exec();
  }
}