import { IsArray, IsInt, IsString, MaxLength } from 'class-validator';

export class CreateStudyDto {
  @IsString()
  @MaxLength(100)
  title: string;

  @IsString()
  description: string;

  @IsArray()
  tags: string[];

  @IsString()
  dayOfWeek: string;

  @IsString()
  time: string;

  @IsInt()
  maxParticipants: number;
}
