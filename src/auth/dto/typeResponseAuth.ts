import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ example: 'admin@example.com' })
    email: string;

    @ApiProperty({ example: 'admin' })
    password: string;
}

export class RegisterDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}