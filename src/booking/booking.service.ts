import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document, Types } from 'mongoose';
import { Booking } from './booking.schema';
import { CreateBookingDto } from './create-booking.dto';
import { User } from '../users/user.schema';
import { Hotel } from '../hotels/hotel.schema';
import { Room } from '../rooms/room.schema';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    @InjectModel(User.name) private userModel: Model<User & Document>,
    @InjectModel(Hotel.name) private hotelModel: Model<Hotel & Document>,
    @InjectModel(Room.name) private roomModel: Model<Room>,
  ) {}

  async findBookingsByUserId(userId: string): Promise<Booking[]> {
    return this.bookingModel.find({ user: userId }).exec();
  }

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const user = await this.userModel.findOne({ username: createBookingDto.guestEmail });
    

    const existingBooking = await this.bookingModel.findOne({ 
      guestEmail: createBookingDto.guestEmail,
      selectedRoom: createBookingDto.selectedRoom,
      checkIn: { $lt: createBookingDto.checkOut },
      checkOut: { $gt: createBookingDto.checkIn },
     });
    if (existingBooking) {
      throw new ConflictException('Booking already exists for this room');
    }

    

    console.log(createBookingDto.selectedHotel);
    const hotel = await this.hotelModel.findById(createBookingDto.selectedHotel);
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }

    const room = await this.roomModel.findById(createBookingDto.selectedRoom);
    if (!room) {
      throw new NotFoundException('Room not found');
    }

    const createdBooking = new this.bookingModel({
        guest: createBookingDto.guest,
        guestEmail: createBookingDto.guestEmail,
        guestPhone: createBookingDto.guestPhone,
        selectedHotel: hotel._id,
        selectedRoom: room._id,
        roomType: createBookingDto.roomType,
        roomPrice: createBookingDto.roomPrice,
        checkIn: createBookingDto.checkIn,
        checkOut: createBookingDto.checkOut,
        userId: user._id,  

    });

  
    return createdBooking.save();
  }

  // Add other methods as needed...
}