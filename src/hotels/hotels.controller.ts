import { Controller, Get, Post, Delete, Body, Param, Put, UseGuards, } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { Hotel } from './hotel.schema';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {} // Inject the HotelsService
  
//CRUD Operations
  @Get()
    getHotels(): Promise<Hotel[]> {
    return this.hotelsService.getHotels();
  }

  @Get(':id/rooms')
  getHotelWithRooms(@Param('id') id: string): Promise<Hotel> {
    return this.hotelsService.getHotelWithRooms(id);
  }

}