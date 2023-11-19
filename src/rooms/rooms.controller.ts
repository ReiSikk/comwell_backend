import { Controller, Get, Param } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.schema';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {} // Inject the RoomsService

  @Get(':id')
  getRoom(@Param('id') id: string): Promise<Room> {
    return this.roomsService.getRoom(id);
  }
}