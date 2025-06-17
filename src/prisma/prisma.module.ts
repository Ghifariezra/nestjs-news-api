import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // agar bisa digunakan di semua module tanpa import manual
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
