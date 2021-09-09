import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CowsModule } from './cows/cows.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cow } from './cows/cow.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cowlistNest',
      entities: [Cow],
      synchronize: true,
    }),
    CowsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
