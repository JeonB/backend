import { Test, TestingModule } from '@nestjs/testing';
import { StudyMembersGateway } from './study-members.gateway';
import { StudyMembersService } from './study-members.service';

describe('StudyMembersGateway', () => {
  let gateway: StudyMembersGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyMembersGateway, StudyMembersService],
    }).compile();

    gateway = module.get<StudyMembersGateway>(StudyMembersGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
