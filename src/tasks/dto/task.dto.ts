/* eslint-disable prettier/prettier */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTaskDTO {
  @ApiProperty()
  readonly title: string;
  @ApiPropertyOptional()
  readonly description: string;
}
