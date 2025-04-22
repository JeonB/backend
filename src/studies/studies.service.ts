import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudyDto } from './dto/create-study.dto';

@Injectable()
export class StudiesService {
  constructor(private prisma: PrismaService) {}

  create(createStudyDto: CreateStudyDto, userId: string) {
    return this.prisma.study.create({
      data: {
        ...createStudyDto,
        createdById: userId,
      },
    });
  }

  findAll() {
    return this.prisma.study.findMany({
      include: {
        createdBy: true,
        members: true,
      },
    });
  }
}
