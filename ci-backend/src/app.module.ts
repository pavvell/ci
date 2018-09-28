import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PhotoModule} from "./modules/photo/photo.module";

@Module({
  imports: [
      PhotoModule,
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 32771,
          username: 'ci_db_user',
          password: '',
          database: 'ci_db',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
