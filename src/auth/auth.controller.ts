import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  UserLoginDto,
  UserRegisterDto,
} from './dto/typeResponseUser';
import {
  LoginDto,
  RegisterDto,
} from './dto/typeResponseAuth';

@ApiTags('Authentication') // Group for Swagger UI
@Controller('/auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) { }

  @Post('/register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered',
    type:  UserRegisterDto,
  })
  register(@Body() registerDto: RegisterDto) {
    return this.AuthService.register(registerDto);
  }

  @Post('/login')
  @ApiOperation({ summary: 'Login endpoint' })
  @ApiResponse({
    status: 200,
    description: 'Returns user information upon successful login',
    type: UserLoginDto,
  })
  login(@Body() loginDto: LoginDto) {
    return this.AuthService.login(loginDto);
  }
}