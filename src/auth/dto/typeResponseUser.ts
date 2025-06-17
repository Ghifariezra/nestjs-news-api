import { ApiProperty } from '@nestjs/swagger';

export class UserRegisterDto {
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

export class UserLoginDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  token: string;
}
