import { Controller } from '@nestjs/common';
import { StudiesService } from './studies.service';

@Controller('studies')
export class StudiesController {
  constructor(private readonly studiesService: StudiesService) {}
}
