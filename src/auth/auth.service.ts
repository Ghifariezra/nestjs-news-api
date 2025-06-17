import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import {
    LoginDto,
    RegisterDto,
} from './dto/typeResponseAuth';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) { }

    async register(registerDto: RegisterDto) {
        const { email, username, password } = registerDto;

        // Cek apakah user sudah ada
        const existing = await this.prisma.users.findUnique({ where: { email } });
        if (existing) {
            throw new ConflictException('Email already registered');
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan user ke DB
        const user = await this.prisma.users.create({
            data: {
                email,
                username,
                password: hashedPassword,
            },
        });

        return {
            message: 'Registration successful',
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                role: user.role,
            },
        };
    }

    async login(loginDto: LoginDto) {
        const user = await this.prisma.users.findUnique({
            where: { email: loginDto.email },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        const payload = { sub: user.id, email: user.email };
        const token = this.jwtService.sign(payload);

        return {
            message: 'Login successful',
            token: token,
        };
    }
}
