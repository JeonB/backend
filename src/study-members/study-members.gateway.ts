import { WebSocketGateway } from '@nestjs/websockets';
import { StudyMembersService } from './study-members.service';

@WebSocketGateway()
export class StudyMembersGateway {
  constructor(private readonly studyMembersService: StudyMembersService) {}
}
