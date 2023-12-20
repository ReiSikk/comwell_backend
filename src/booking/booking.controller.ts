import { Controller, Post, Body, Get, Param, HttpStatus } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './create-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    const booking = await this.bookingService.create(createBookingDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Booking created successfully!',
      data: booking,
    }
  }

  @Get('user/:userId')
  findBookingsByUserId(@Param('userId') userId: string) {
    return this.bookingService.findBookingsByUserId(userId);
  }

  // Add other routes as needed...
}