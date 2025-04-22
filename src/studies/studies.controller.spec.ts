import { Test, TestingModule } from '@nestjs/testing';
import { StudiesController } from './studies.controller';
import { StudiesService } from './studies.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

describe('StudiesController', () => {
  let controller: StudiesController;
  let studiesService: StudiesService;

  const mockStudiesService = {
    create: jest.fn(),
    findAll: jest.fn(),
  };

  // JWT 가드 모킹
  const mockJwtAuthGuard = { canActivate: jest.fn().mockReturnValue(true) };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudiesController],
      providers: [{ provide: StudiesService, useValue: mockStudiesService }],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue(mockJwtAuthGuard)
      .compile();

    controller = module.get<StudiesController>(StudiesController);
    studiesService = module.get<StudiesService>(StudiesService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a study', async () => {
      const createStudyDto: CreateStudyDto = {
        title: 'Test Study',
        description: 'Test Description',
        maxParticipants: 5,
        tags: [],
        dayOfWeek: '',
        time: '',
      };

      const user = { userId: 'user-123' };

      const expectedResult = {
        id: 'study-123',
        ...createStudyDto,
        ownerId: user.userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockStudiesService.create.mockResolvedValue(expectedResult);

      const result = await controller.create(createStudyDto, user);

      expect(mockStudiesService.create).toHaveBeenCalledWith(
        createStudyDto,
        user.userId,
      );
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
          maxMembers: 5,
          ownerId: 'user-1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'study-2',
          title: 'Study 2',
          description: 'Description 2',
          maxMembers: 10,
          ownerId: 'user-2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockStudiesService.findAll.mockResolvedValue(expectedStudies);

      const result = await controller.findAll();

      expect(mockStudiesService.findAll).toHaveBeenCalled();
      expect(result).toEqual(expectedStudies);
    });
  });
});
