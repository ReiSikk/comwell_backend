import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
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
      .send({ mockBookingData})
      .expect(201)
      .expect((res) => {
        expect(res.body.guest).toEqual(mockBookingData.guest);
        expect(res.body.guestEmail).toEqual(mockBookingData.guestEmail);
        expect(res.body.guestPhone).toEqual(mockBookingData.guestPhone);
        expect(res.body.selectedHotel).toEqual(mockBookingData.selectedHotel);
        expect(res.body.selectedRoom).toEqual(mockBookingData.selectedRoom);
        expect(res.body.roomType).toEqual(mockBookingData.roomType);
        expect(res.body.roomPrice).toEqual(mockBookingData.roomPrice);
        expect(res.body.checkIn).toEqual(mockBookingData.checkIn);
        expect(res.body.checkOut).toEqual(mockBookingData.checkOut);
        expect(res.body.user).toEqual(mockBookingData.user);
      });
  });

  // Add more tests for other routes here...
});