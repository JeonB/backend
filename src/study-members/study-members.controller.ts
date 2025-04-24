import { Controller, Param, Post, Patch, Get, UseGuards } from '@nestjs/common';
import { StudyMembersService } from './study-members.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

interface CurrentUserDto {
  userId: string;
  email?: string;
}

@Controller('studies/:studyId')
@UseGuards(JwtAuthGuard)
export class StudyMembersController {
  constructor(private readonly service: StudyMembersService) {}

  @Post('apply')
  apply(
    @Param('studyId') studyId: string,
    @CurrentUser() user: CurrentUserDto,
  ) {
    return this.service.apply(studyId, user.userId);
  }

  @Patch('approve/:userId')
  approve(
    @Param('studyId') studyId: string,
    @Param('userId') userId: string,
    @CurrentUser() user: CurrentUserDto,
  ) {
    return this.service.approve(studyId, userId, user.userId);
  }

  @Patch('reject/:userId')
  reject(
    @Param('studyId') studyId: string,
    @Param('userId') userId: string,
    @CurrentUser() user: CurrentUserDto,
  ) {
    return this.service.reject(studyId, userId, user.userId);
  }

  @Get('members')
  getMembers(@Param('studyId') studyId: string) {
    return this.service.getMembers(studyId);
  }
}
