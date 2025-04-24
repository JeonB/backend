import { Test, TestingModule } from '@nestjs/testing';
import { StudyMembersController } from './study-members.controller';
import { StudyMembersService } from './study-members.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

describe('StudyMembersController', () => {
  let controller: StudyMembersController;
  let service: StudyMembersService;

  const mockStudyMembersService = {
    apply: jest.fn(),
    approve: jest.fn(),
    reject: jest.fn(),
    getMembers: jest.fn(),
  };

  // JWT 가드 모킹
  const mockJwtAuthGuard = { canActivate: jest.fn().mockReturnValue(true) };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudyMembersController],
      providers: [
        { provide: StudyMembersService, useValue: mockStudyMembersService },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue(mockJwtAuthGuard)
      .compile();

    controller = module.get<StudyMembersController>(StudyMembersController);
    service = module.get<StudyMembersService>(StudyMembersService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('apply', () => {
    it('should call service.apply with correct params', async () => {
      const studyId = 'study-123';
      const user = { userId: 'user-123' };
      const expectedResult = { id: 'member-123', studyId, userId: user.userId };

      mockStudyMembersService.apply.mockResolvedValue(expectedResult);

      const result = await controller.apply(studyId, user);

      expect(mockStudyMembersService.apply).toHaveBeenCalledWith(
        studyId,
        user.userId,
      );
      expect(result).toEqual(expectedResult);
    });
  });

  describe('approve', () => {
    it('should call service.approve with correct params', async () => {
      const studyId = 'study-123';
      const targetUserId = 'user-456';
      const requestingUser = { userId: 'user-123' };
      const expectedResult = {
        id: 'member-123',
        studyId,
        userId: targetUserId,
        status: 'ACCEPTED',
      };

      mockStudyMembersService.approve.mockResolvedValue(expectedResult);

      const result = await controller.approve(
        studyId,
        targetUserId,
        requestingUser,
      );

      expect(mockStudyMembersService.approve).toHaveBeenCalledWith(
        studyId,
        targetUserId,
        requestingUser.userId,
      );
      expect(result).toEqual(expectedResult);
    });
  });

  describe('reject', () => {
    it('should call service.reject with correct params', async () => {
      const studyId = 'study-123';
      const targetUserId = 'user-456';
      const requestingUser = { userId: 'user-123' };
      const expectedResult = {
        id: 'member-123',
        studyId,
        userId: targetUserId,
        status: 'REJECTED',
      };

      mockStudyMembersService.reject.mockResolvedValue(expectedResult);

      const result = await controller.reject(
        studyId,
        targetUserId,
        requestingUser,
      );

      expect(mockStudyMembersService.reject).toHaveBeenCalledWith(
        studyId,
        targetUserId,
        requestingUser.userId,
      );
      expect(result).toEqual(expectedResult);
    });
  });

  describe('getMembers', () => {
    it('should call service.getMembers and return results', async () => {
      const studyId = 'study-123';
      const expectedMembers = [
        { id: 'member-1', studyId, userId: 'user-1', status: 'ACCEPTED' },
        { id: 'member-2', studyId, userId: 'user-2', status: 'PENDING' },
      ];

      mockStudyMembersService.getMembers.mockResolvedValue(expectedMembers);

      const result = await controller.getMembers(studyId);

      expect(mockStudyMembersService.getMembers).toHaveBeenCalledWith(studyId);
      expect(result).toEqual(expectedMembers);
    });
  });
});
