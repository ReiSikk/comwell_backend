import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('BookingController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/booking (POST)', () => {
    const mockBookingData = {
        guest: 'John Doe',
        guestEmail: 'john.doe@example.com',
        guestPhone: '1234567890',
        selectedHotel: 'hotelId',
        selectedRoom: 'roomId',
        roomType: 'Single',
        roomPrice: 1780,
        checkIn: '2023-12-01',
        checkOut: '2023-12-10',
        user: 'userId',
      };

    return request(app.getHttpServer())
    .post('/booking')
    .send(mockBookingData)
    .expect(HttpStatus.CREATED)
    .expect({
      statusCode: HttpStatus.CREATED,
      message: 'Booking created successfully!',
      data: mockBookingData,
    });
  });

  // Add more tests for other routes here...
});