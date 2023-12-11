import { IsNotEmpty, IsString, IsNumber, IsEmail, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateBookingDto {

    

  @IsNotEmpty({ message: 'Please enter your full name' })
  @IsString()
  guest: string;

  @IsNotEmpty({ message: 'Please enter your email to create booking'})
  @IsEmail()
   guestEmail: string;

  @IsNotEmpty({ message: 'Please enter your phone number to create booking'})
  @IsNumber()
   guestPhone: number;

   @IsNotEmpty({ message: 'A hotel must be selected to create booking'})
   selectedHotel: string;
   
   @IsNotEmpty({ message: 'A room must be selected to create booking'})
   selectedRoom: string;

   @IsNotEmpty({ message: 'A room type must be selected to create booking'})
    roomType: string;

    @IsNotEmpty()
   roomPrice: string;

    @IsNotEmpty({ message: 'Please select a check in date to create booking'})
    checkIn: string;

    @IsNotEmpty({ message: 'Please select a check out date to create booking'})
     checkOut: string;
     

     @IsMongoId()
     userId: Types.ObjectId;


  }