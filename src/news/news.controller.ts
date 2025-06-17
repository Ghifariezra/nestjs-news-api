import {
  Controller,
  Get,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiQuery,
  ApiParam,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import {
  NewsService,
} from './news.service';
import {
  TestResponseDto,
  NewsDto,
  CategoryNewsDto,
  FindNewsDto,
} from './dto/typeResponseNews';
import {
  AuthGuard,
} from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('News - Must be authenticated') // Group for Swagger UI
@Controller('/api/news')
export class NewsController {
  constructor(private readonly articleService: NewsService) { }
  @Get('/test')
  @ApiOperation({ summary: 'Test endpoint' })
  @ApiResponse({
    status: 200,
    description: 'Returns a test message',
    type: TestResponseDto,
  })
  getTest() {
    return this.articleService.getTest();
  }

  @Get()
  @ApiOperation({ summary: 'Get all news' })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Limit number of results',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of news',
    type: NewsDto,
    isArray: true,
  })
  getAll(@Query('limit') limit: string) {
    const limitValue = Number(limit) || 5;
    return this.articleService.getAllArticles(limitValue);
  }

  @Get('/category')
  @ApiOperation({ summary: 'Get news by news' })
  @ApiQuery({
    name: 'keyword',
    required: true,
    description: 'News category name',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Limit number of results',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of news by category',
    type: CategoryNewsDto,
    isArray: true,
  })
  findByCategory(
    @Query('keyword') category: string,
    @Query('limit') limit: string,
  ) {
    const limitValue = Number(limit) || 5;
    return this.articleService.getArticlesByCategory(category, limitValue);
  }

  @Get('/find/:id')
  @ApiOperation({ summary: 'Find news by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Returns an article by ID',
    type: FindNewsDto,
  })
  findOne(@Param('id') id: number) {
    return this.articleService.getArticleById(Number(id));
  }
}
