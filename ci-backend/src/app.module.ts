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
          host: 'ci-db.cp4dy3ma9ykn.us-east-1.rds.amazonaws.com',
          port: 5432,
          username: 'ci_db_user',
          password: 'cidbpassword123%',
          database: 'ci_db',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
