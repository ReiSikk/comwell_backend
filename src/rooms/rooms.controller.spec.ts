import { Test, TestingModule } from '@nestjs/testing';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service'
import { JwtService } from '@nestjs/jwt'

import { Room } from './room.schema';

describe('RoomsController', () => {
  let controller: RoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomsController],
      providers: [{
        provide: RoomsService,
        useValue: {
          getRoom: jest.fn().mockResolvedValue({
            _id: 'mockId',
          }),
        },
      }, 
      {
        provide: JwtService, 
        useValue: {
          sign: jest.fn().mockResolvedValue('mockToken'),
        },

      }
    ],
    }).compile();

    controller = module.get<RoomsController>(RoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
