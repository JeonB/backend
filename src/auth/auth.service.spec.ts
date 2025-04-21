import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

// Mock bcrypt
jest.mock('bcryptjs', () => ({
  hash: jest.fn().mockResolvedValue('hashedPassword'),
  compare: jest.fn(),
}));

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: PrismaService;
  let jwtService: JwtService;

  const mockPrismaService = {
    user: {
      create: jest.fn(),
      findUnique: jest.fn(),
    },
  };

  const mockJwtService = {
    sign: jest.fn().mockReturnValue('mockedToken'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);

    // Reset mocks between tests
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('signup', () => {
    const signupDto = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    };

    it('should create a user and return access token', async () => {
      mockPrismaService.user.create.mockResolvedValue({
        id: 'userId123',
        email: signupDto.email,
        name: signupDto.name,
        password: 'hashedPassword',
      });

      const result = await service.signup(signupDto);

      expect(bcrypt.hash).toHaveBeenCalledWith(signupDto.password, 10);
      expect(mockPrismaService.user.create).toHaveBeenCalledWith({
        data: {
          email: signupDto.email,
          password: 'hashedPassword',
          name: signupDto.name,
        },
      });
      expect(mockJwtService.sign).toHaveBeenCalledWith({
        sub: 'userId123',
        email: signupDto.email,
      });
      expect(result).toEqual({ accessToken: 'mockedToken' });
    });
  });

  describe('login', () => {
    const loginDto = {
      email: 'test@example.com',
      password: 'password123',
    };

    it('should return access token for valid credentials', async () => {
      const mockUser = {
        id: 'userId123',
        email: loginDto.email,
        password: 'hashedPassword',
      };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const result = await service.login(loginDto);

      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { email: loginDto.email },
      });
      expect(bcrypt.compare).toHaveBeenCalledWith(
        loginDto.password,
        mockUser.password,
      );
      expect(mockJwtService.sign).toHaveBeenCalledWith({
        sub: mockUser.id,
        email: mockUser.email,
      });
      expect(result).toEqual({ accessToken: 'mockedToken' });
    });

    it('should throw UnauthorizedException for invalid email', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { email: loginDto.email },
      });
    });

    it('should throw UnauthorizedException for invalid password', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue({
        id: 'userId123',
        email: loginDto.email,
        password: 'hashedPassword',
      });
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(service.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
      expect(bcrypt.compare).toHaveBeenCalled();
    });
  });

  describe('getHello', () => {
    it('should return a greeting message', () => {
      expect(service.getHello()).toBe('컨트롤러 서비스 모듈 테스트');
    });
  });
});
