import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Booking, BookingSchema } from './booking.schema';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { UsersModule } from '../users/users.module'
import { HotelsModule } from '../hotels/hotels.module'
import { RoomsModule } from '../rooms/rooms.module';
import { Room } from 'src/rooms/room.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
    UsersModule,
    HotelsModule,
    RoomsModule
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
