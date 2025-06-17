import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  user: {
    id: number;
    email: string;
    username: string;
    role: string;
  };
}
