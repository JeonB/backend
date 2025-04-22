import { Test, TestingModule } from '@nestjs/testing';
import { StudiesService } from './studies.service';
import { PrismaService } from '../prisma/prisma.service';

describe('StudiesService', () => {
  let service: StudiesService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    study: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudiesService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<StudiesService>(StudiesService);
    prismaService = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a study and return it', async () => {
      const createStudyDto = {
        title: 'Test Study',
        description: 'Test Description',
        maxParticipants: 5,
        tags: [],
        dayOfWeek: '',
        time: '',
      };
      const userId = 'user-123';
      const expectedResult = {
        id: 'study-123',
        ...createStudyDto,
        ownerId: userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.study.create.mockResolvedValue(expectedResult);

      const result = await service.create(createStudyDto, userId);

      expect(mockPrismaService.study.create).toHaveBeenCalledWith({
        data: {
          ...createStudyDto,
          createdById: userId,
        },
      });
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of studies', async () => {
      const expectedStudies = [
        {
          id: 'study-1',
          title: 'Study 1',
          description: 'Description 1',
          maxParticipants: 5,
          ownerId: 'user-1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'study-2',
          title: 'Study 2',
          description: 'Description 2',
          maxParticipants: 10,
          ownerId: 'user-2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockPrismaService.study.findMany.mockResolvedValue(expectedStudies);

      const result = await service.findAll();

      expect(mockPrismaService.study.findMany).toHaveBeenCalled();
      expect(result).toEqual(expectedStudies);
    });
  });
});
