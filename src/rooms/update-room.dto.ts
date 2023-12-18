import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateRoomDto {

    @IsNotEmpty({ message: 'Availability field should not be empty. Please enter a value for availability.' })
    @IsBoolean()
    available: boolean;

    @IsNotEmpty({ message: 'Room type field can not be empty. Please enter a room type' })
    @IsString()
    roomType: string;

    @IsNotEmpty({ message: 'Room size field can not be empty. Please enter a room size' })
    @IsString()
    roomSize: string;

    @IsNotEmpty({ message: 'Bed types field can not be empty. Please enter at least one bed type.' })
    @IsString({each: true})
    bedTypes: string[];

    @IsNotEmpty({ message: 'Facilities field can not be empty. Please enter at least one facility.'})
    @IsString({each: true})
    facilities: string[];

    @IsNotEmpty({ message: 'Price field can not be empty. Please enter a price for the room.'})
    @IsNumber()
    price: number;

}