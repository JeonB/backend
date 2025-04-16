import { Module } from '@nestjs/common';
import { StudyMembersService } from './study-members.service';
import { StudyMembersGateway } from './study-members.gateway';

@Module({
  providers: [StudyMembersGateway, StudyMembersService],
})
export class StudyMembersModule {}
