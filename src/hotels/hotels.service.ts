import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Hotel } from './hotel.schema';

@Injectable()
export class HotelsService {

  constructor(@InjectModel(Hotel.name) private hotelModel: Model<Hotel>) {}

  async getHotels(): Promise<Hotel[]> {
    return await this.hotelModel.find().exec();
  }

  async getHotelWithRooms(id: string): Promise<Hotel> {
    if (!id || !Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID');
    }
    return await this.hotelModel.findById(id).populate('rooms').exec();
  }
}