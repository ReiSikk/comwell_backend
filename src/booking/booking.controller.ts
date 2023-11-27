import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './create-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get('user/:userId')
  findBookingsByUserId(@Param('userId') userId: string) {
    return this.bookingService.findBookingsByUserId(userId);
  }

  // Add other routes as needed...
}