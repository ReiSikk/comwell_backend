import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HotelsModule } from './hotels/hotels.module';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsController } from './rooms/rooms.controller';
import { RoomsService } from './rooms/rooms.service';
import { RoomsModule } from './rooms/rooms.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/comwell'), 
  HotelsModule, RoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
