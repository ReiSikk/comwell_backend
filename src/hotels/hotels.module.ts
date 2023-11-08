import { Module } from '@nestjs/common';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { Hotel, HotelSchema } from './hotel.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }])],
    controllers: [HotelsController],
    providers: [HotelsService],
  })
  
export class HotelsModule {}