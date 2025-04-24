import { Test, TestingModule } from '@nestjs/testing';
import { StudyMembersService } from './study-members.service';
import { PrismaService } from '../prisma/prisma.service';
import { ForbiddenException } from '@nestjs/common';
import { Status } from '../generated/client';

describe('StudyMembersService', () => {
  let service: StudyMembersService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    studyMember: {
      create: jest.fn(),
      update: jest.fn(),
      findMany: jest.fn(),
    },
    study: {
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudyMembersService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<StudyMembersService>(StudyMembersService);
    prismaService = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('apply', () => {
    it('should create a study member application', async () => {
      const studyId = 'study-123';
      const userId = 'user-123';
      const expectedResult = {
        id: 'member-123',
        studyId,
        userId,
        status: 'PENDING',
        joinedAt: new Date(),
      };

      mockPrismaService.studyMember.create.mockResolvedValue(expectedResult);

      const result = await service.apply(studyId, userId);

      expect(mockPrismaService.studyMember.create).toHaveBeenCalledWith({
        data: {
          studyId,
          userId,
          status: 'PENDING',
        },
      });
      expect(result).toEqual(expectedResult);
    });
  });

  describe('approve', () => {
    it('should approve a study member application', async () => {
      const studyId = 'study-123';
      const targetUserId = 'user-456';
      const requesterId = 'user-123';

      const study = {
        id: studyId,
        createdById: requesterId,
        title: 'Test Study',
      };

      const updatedMember = {
        id: 'member-123',
        studyId,
        userId: targetUserId,
        status: Status.ACCEPTED,
      };

      mockPrismaService.study.findUnique.mockResolvedValue(study);
      mockPrismaService.studyMember.update.mockResolvedValue(updatedMember);

      const result = await service.approve(studyId, targetUserId, requesterId);

      expect(mockPrismaService.study.findUnique).toHaveBeenCalledWith({
        where: { id: studyId },
      });
      expect(mockPrismaService.studyMember.update).toHaveBeenCalledWith({
        where: {
          userId_studyId: {
            userId: targetUserId,
            studyId,
          },
        },
        data: {
          status: Status.ACCEPTED,
        },
      });
      expect(result).toEqual(updatedMember);
    });

    it('should throw ForbiddenException when approver is not the owner', async () => {
      const studyId = 'study-123';
      const targetUserId = 'user-456';
      const requesterId = 'user-789'; // 스터디 소유자가 아님

      const study = {
        id: studyId,
        createdById: 'user-123', // 실제 소유자
        title: 'Test Study',
      };

      mockPrismaService.study.findUnique.mockResolvedValue(study);

      await expect(
        service.approve(studyId, targetUserId, requesterId),
      ).rejects.toThrow(ForbiddenException);

      expect(mockPrismaService.study.findUnique).toHaveBeenCalledWith({
        where: { id: studyId },
      });
      expect(mockPrismaService.studyMember.update).not.toHaveBeenCalled();
    });
  });

  describe('reject', () => {
    it('should reject a study member application', async () => {
      const studyId = 'study-123';
      const targetUserId = 'user-456';
      const requesterId = 'user-123';

      const study = {
        id: studyId,
        createdById: requesterId,
        title: 'Test Study',
      };

      const updatedMember = {
        id: 'member-123',
        studyId,
        userId: targetUserId,
        status: Status.REJECTED,
      };

      mockPrismaService.study.findUnique.mockResolvedValue(study);
      mockPrismaService.studyMember.update.mockResolvedValue(updatedMember);

      const result = await service.reject(studyId, targetUserId, requesterId);

      expect(mockPrismaService.study.findUnique).toHaveBeenCalledWith({
        where: { id: studyId },
      });
      expect(mockPrismaService.studyMember.update).toHaveBeenCalledWith({
        where: {
          userId_studyId: {
            userId: targetUserId,
            studyId,
          },
        },
        data: {
          status: Status.REJECTED,
        },
      });
      expect(result).toEqual(updatedMember);
    });

    it('should throw ForbiddenException when rejecter is not the owner', async () => {
      const studyId = 'study-123';
      const targetUserId = 'user-456';
      const requesterId = 'user-789'; // 스터디 소유자가 아님

      const study = {
        id: studyId,
        createdById: 'user-123', // 실제 소유자
        title: 'Test Study',
      };

      mockPrismaService.study.findUnique.mockResolvedValue(study);

      await expect(
        service.reject(studyId, targetUserId, requesterId),
      ).rejects.toThrow(ForbiddenException);

      expect(mockPrismaService.study.findUnique).toHaveBeenCalledWith({
        where: { id: studyId },
      });
      expect(mockPrismaService.studyMember.update).not.toHaveBeenCalled();
    });
  });

  describe('getMembers', () => {
    it('should return all members of a study', async () => {
      const studyId = 'study-123';
      const expectedMembers = [
        {
          id: 'member-1',
          studyId,
          userId: 'user-1',
          status: Status.ACCEPTED,
          user: { id: 'user-1', name: 'User 1' },
        },
        {
          id: 'member-2',
          studyId,
          userId: 'user-2',
          status: Status.PENDING,
          user: { id: 'user-2', name: 'User 2' },
        },
      ];

      mockPrismaService.studyMember.findMany.mockResolvedValue(expectedMembers);

      const result = await service.getMembers(studyId);

      expect(mockPrismaService.studyMember.findMany).toHaveBeenCalledWith({
        where: { studyId },
        include: {
          user: true,
        },
      });
      expect(result).toEqual(expectedMembers);
    });
  });
});
