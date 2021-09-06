import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CowsModule } from './cows/cows.module';

@Module({
  imports: [CowsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
