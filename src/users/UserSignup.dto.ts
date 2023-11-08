import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class UserSignupDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsString()
   email: string;

   @IsNotEmpty()
   @IsNumber()
    zip: number;

   @IsNotEmpty()
   @IsNumber()
    phone: number;

   @IsNotEmpty()
   password: string;

   @IsNotEmpty()
   confirmPassword: string;

    @IsNotEmpty()
    birthDate: Date;

  }