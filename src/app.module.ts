import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HotelsModule } from './hotels/hotels.module';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/comwell'), 
  HotelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
