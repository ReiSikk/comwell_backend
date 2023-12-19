import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.schema';
import { AdminGuard } from '../guards/AdminGuard'

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {} // Inject the RoomsService

  @Get(':id')
  getRoom(@Param('id') id: string): Promise<Room> {
    return this.roomsService.getRoom(id);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  deleteRoom(@Param('id') id: string): Promise<void> {
    return this.roomsService.deleteRoom(id);
  }
}