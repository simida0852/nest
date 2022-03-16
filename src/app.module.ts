import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CatsController } from './cats/cats.controller';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { NewsController } from './news/news.controller';
import { NewsModule } from './news/news.module';
import { NewsService } from './news/news.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

const entities = [__dirname + '/**/*.entity{.ts,.js}'];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entities,
      synchronize: true,
    }),
    NewsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, NewsController, CatsController],
  providers: [AppService, NewsService],
})

export class AppModule { }
