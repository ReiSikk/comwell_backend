import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

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
   password: string;

   roles: string[];
  }