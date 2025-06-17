import { NestFactory } from '@nestjs/core';
import { NewsModule } from './news/news.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(NewsModule);

  // Setup Swagger config
  const config = new DocumentBuilder()
    .setTitle('News API')
    .setDescription('API for managing news articles')
    .setVersion('1.0')
    .addTag('News')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document, {
    customSiteTitle: 'News API',
    customCss: `
      .swagger-ui .topbar { background-color: #4e73df; }
      .swagger-ui .topbar .topbar-wrapper span { color: white !important; font-weight: bold; }
      .swagger-ui .opblock.opblock-get { background-color: #e3f2fd; }
      .swagger-ui .scheme-container { display: none; }
    `,
    customfavIcon: 'https://avatars.githubusercontent.com/u/127650295?v=4', // opsional
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
