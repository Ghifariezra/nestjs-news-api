// dto/test-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class TestResponseDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  timestamp: string;
}

export class NewsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  urltoimage: string;

  @ApiProperty()
  publish_date: string;

  @ApiProperty()
  publish_time: string;

  @ApiProperty()
  content: string;
}

export class CategoryNewsDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ nullable: true })
  source_id: string | null;

  @ApiProperty()
  source_name: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  url_to_image: string;

  @ApiProperty()
  published_at: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  inserted_at: string;
}

export class FindNewsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  urltoimage: string;

  @ApiProperty()
  publish_date: string;

  @ApiProperty()
  publish_time: string;

  @ApiProperty()
  content: string;
}