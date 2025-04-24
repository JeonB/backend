import { Module } from '@nestjs/common';
import { StudyMembersService } from './study-members.service';
import { StudyMembersController } from './study-members.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StudyMembersController],
  providers: [StudyMembersService],
})
export class StudyMembersModule {}
