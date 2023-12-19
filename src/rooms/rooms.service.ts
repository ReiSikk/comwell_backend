import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room, RoomDocument } from './room.schema';
import { UpdateRoomDto } from './update-room.dto';

@Injectable()
export class RoomsService {
  constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}

  async getRoom(id: string): Promise<Room> {
    return await this.roomModel.findById(id).exec();
  }

  async deleteRoom(id: string): Promise<void> {
    await this.roomModel.findByIdAndDelete(id).exec();
  }


  async updateRoom(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    return await this.roomModel.findByIdAndUpdate(id, updateRoomDto, { new: true }).exec();
  }
}