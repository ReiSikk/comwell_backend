import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';


describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            signIn: jest.fn().mockResolvedValue({/* ... */}), // Add mock return value here
            signUp: jest.fn().mockResolvedValue({/* ... */}), // Add mock return value here
          },
        },
        {
          provide: AuthGuard,
          useValue: {
            canActivate: jest.fn().mockImplementation((context) => {
              const request = context.switchToHttp().getRequest();
              request['user'] = {
                fullName: 'Mock User',
                phone: 1234567890,
                username: 'mockUser@example.com',
                password: 'mockPassword',
              };
              return Promise.resolve(true);
            }),
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn().mockResolvedValue('mockJwtToken'),
            verifyAsync: jest.fn().mockResolvedValue({/* mock payload */}),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
