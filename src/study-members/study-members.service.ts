import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Status } from '../generated/client';

@Injectable()
export class StudyMembersService {
  constructor(private prisma: PrismaService) {}

  async apply(studyId: string, userId: string) {
    return this.prisma.studyMember.create({
      data: {
        studyId,
        userId,
        status: 'PENDING',
      },
    });
  }

  async approve(studyId: string, targetUserId: string, requesterId: string) {
    const study = await this.prisma.study.findUnique({
      where: { id: studyId },
    });

    if (study?.createdById !== requesterId) {
      throw new ForbiddenException('You are not the owner of this study.');
    }

    return this.prisma.studyMember.update({
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
  }

  async reject(studyId: string, targetUserId: string, requesterId: string) {
    const study = await this.prisma.study.findUnique({
      where: { id: studyId },
    });

    if (study?.createdById !== requesterId) {
      throw new ForbiddenException('You are not the owner of this study.');
    }

    return this.prisma.studyMember.update({
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
  }

  async getMembers(studyId: string) {
    return this.prisma.studyMember.findMany({
      where: { studyId },
      include: {
        user: true,
      },
    });
  }
}
