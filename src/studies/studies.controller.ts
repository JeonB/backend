import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { StudiesService } from './studies.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('studies')
export class StudiesController {
  constructor(private readonly studiesService: StudiesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createStudyDto: CreateStudyDto,
    @CurrentUser() user: { userId: string },
  ) {
    return this.studiesService.create(createStudyDto, user.userId);
  }

  @Get()
  findAll() {
    return this.studiesService.findAll();
  }
}
