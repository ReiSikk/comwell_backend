import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService,
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn().mockImplementation((username: string) => {
              return username === 'existingUser@example.com' 
                ? Promise.resolve({ username }) // Mock an existing user
                : Promise.resolve(null); // Mock a non-existing user
            }),
            create: jest.fn().mockImplementation((createUserDto) => {
              return Promise.resolve({ ...createUserDto, id: 'mockUserId' }); // Mock a created user
            }),
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn().mockResolvedValue('mockJwtToken'),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
