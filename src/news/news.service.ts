import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) { }

  getTest(): any {
    return {
      message: 'Hello from ArticleService!',
      timestamp: new Date().toISOString(),
    };
  }

  getAllArticles(limitValue: number): Promise<any> {
    return this.prisma.article.findMany({
      skip: 0,
      take: limitValue,
    });
  }

  getArticleById(id: number): Promise<any> {
    return this.prisma.article.findUnique({
      where: { id },
    });
  }

  getArticlesByCategory(category: string, limitValue: number): Promise<any> {
    const validCategories = [
      'apple',
      'bitcoin',
      'business',
      'entertainment',
      'health',
      'sports',
      'technology',
      'tesla',
    ];

    if (!validCategories.includes(category)) {
      throw new Error(`Invalid category: ${category}`);
    }

    return (this.prisma as any)[category].findMany({
      skip: 0,
      take: limitValue,
    });
  }
}
