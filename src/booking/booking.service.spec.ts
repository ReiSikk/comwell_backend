import { Test, TestingModule } from '@nestjs/testing';
import { BookingService } from './booking.service';
import { getModelToken } from '@nestjs/mongoose';
import { Booking } from './booking.schema';
import { User } from '../users/user.schema';
import { Hotel } from '../hotels/hotel.schema';
import { Room } from '../rooms/room.schema';
import { Types } from 'mongoose';

describe('BookingService', () => {
  let service: BookingService;


  
  const mockUser: User = {
    // Fill in with mock user data based on your User schema
    fullName: 'John Doe',
    phone: 1234567890,
    username: 'johndoe@gmail.com',
    password: ''
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingService,
        {
          provide: getModelToken(Booking.name),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue(null),
            save: jest.fn().mockResolvedValue({ 
              guest: 'Mock Guest',
              guestEmail: 'mockguest@example.com',
              guestPhone: '1234567890',
              selectedHotel: new Types.ObjectId('605c6f7e3103e60004d2d4a0'),
              selectedRoom: new Types.ObjectId('605c6f7e3103e60004d2d4a1'),
              roomType: 'Mock Room Type',
              roomPrice: 100,
              checkIn: new Date('2022-01-01T00:00:00.000Z'),
              checkOut: new Date('2022-01-02T00:00:00.000Z'),
              user: new Types.ObjectId('605c6f7e3103e60004d2d4a2'),
             }),
          },
        },
        {
          provide: getModelToken(User.name),
          useValue: {
            findOne: jest.fn().mockResolvedValue({
              _id: new Types.ObjectId('605c6f7e3103e60004d2d4a2'),
              username: 'mockguest@example.com',
            }),
          },
        },  
        {
          provide: getModelToken(Hotel.name),
          useValue: {
            findById: jest.fn().mockResolvedValue(new Types.ObjectId('605c6f7e3103e60004d2d4a0')),
        },
      },
      {
        provide: getModelToken(Room.name),
        useValue: {
          findById: jest.fn().mockResolvedValue(new Types.ObjectId('605c6f7e3103e60004d2d4a0')),
        },
      },
      ],
    }).compile();

    service = module.get<BookingService>(BookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
