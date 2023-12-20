import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { getModelToken } from '@nestjs/mongoose';
import { Room } from './room.schema';

describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomsService,
        {
          provide: getModelToken(Room.name),
          useValue: {
            findById: jest.fn().mockResolvedValue({
              _id: 'mockId',
              available: true,
              roomType: 'mockRoomType',
              roomSize: 'mockRoomSize',
              bedTypes: ['mockBedType1', 'mockBedType2'],
              facilities: ['mockFacility1', 'mockFacility2'],
            }),
          },
        },
      ],
    }).compile();

    service = module.get<RoomsService>(RoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
