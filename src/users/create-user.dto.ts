import { IsNotEmpty, IsString, IsNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsNumber()
   phone: number;

  @IsNotEmpty()
  @IsString()
   username: string;

   @IsNotEmpty()
   @MinLength(8, { message: 'Password must be at least 8 characters long' })
   password: string;

   roles: string[];
  }