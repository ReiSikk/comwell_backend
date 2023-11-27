import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HotelsModule } from './hotels/hotels.module';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/comwell'), 
  HotelsModule, RoomsModule, UsersModule, AuthModule, BookingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
