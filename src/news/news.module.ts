import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module'; // <-- cukup import AuthModule

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule { }
