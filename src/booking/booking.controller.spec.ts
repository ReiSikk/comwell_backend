import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { CreateBookingDto } from '../booking/create-booking.dto';

describe('BookingController', () => {
  let controller: BookingController;
  let service: BookingService;

  beforeEach(async () => {
    service = { 
      create: jest.fn().mockResolvedValue('mockBooking'),
      findBookingsByUserId: jest.fn().mockResolvedValue(['mockBooking']),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingController],
      providers: [
        {
          provide: BookingService,
          useValue: service,
        },
      ],
    }).compile();

    controller = module.get<BookingController>(BookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a booking', async () => {
    const createBookingDto: CreateBookingDto = {
      guest: 'Mock Guest',
      guestEmail: 'mockguest@example.com',
      guestPhone: 1234567890,
      selectedHotel: 'Mock Hotel',
      selectedRoom: 'Mock Room',
      roomType: 'Mock Room Type',
      roomPrice: '100',
      checkIn: '2022-01-01T00:00:00.000Z',
      checkOut: '2022-01-02T00:00:00.000Z',
    }; 
    expect(await controller.create(createBookingDto)).toBe('mockBooking');
    expect(service.create).toHaveBeenCalledWith(createBookingDto);
  });

  it('should find bookings by user id', async () => {
    const userId = 'user1'; // Replace with the user ID you want to test with
    expect(await controller.findBookingsByUserId(userId)).toEqual(['mockBooking']);
    expect(service.findBookingsByUserId).toHaveBeenCalledWith(userId);
  });

  // Add tests for other routes as needed...
});