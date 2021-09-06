import { Module } from '@nestjs/common';
import { CowsController } from './cows.controller';
import { CowsService } from './cows.service';

@Module({
  controllers: [CowsController],
  providers: [CowsService],
})
export class CowsModule {}
