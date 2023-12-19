
import { AdminGuard } from '../guards/AdminGuard'
import { Controller, Get, Param, Put, Body, Delete, UseGuards } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.schema';
import { UpdateRoomDto } from './update-room.dto';
import { UsePipes, ValidationPipe, BadRequestException } from '@nestjs/common';

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

  @Put(':id')
  updateRoom(@Param('id') id: string,  @Body() updateRoomDto: UpdateRoomDto): Promise<Room> {
      return this.roomsService.updateRoom(id, updateRoomDto);

  }
}