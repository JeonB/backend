import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { StudiesModule } from './studies/studies.module';
import { StudyMembersModule } from './study-members/study-members.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    StudiesModule,
    StudyMembersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
