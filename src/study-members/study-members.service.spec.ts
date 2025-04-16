import { Test, TestingModule } from '@nestjs/testing';
import { StudyMembersService } from './study-members.service';

describe('StudyMembersService', () => {
  let service: StudyMembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyMembersService],
    }).compile();

    service = module.get<StudyMembersService>(StudyMembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
