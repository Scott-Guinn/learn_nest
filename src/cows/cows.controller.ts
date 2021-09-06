import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CowsService } from './cows.service';
import { Cow } from './interfaces/cow.interface';

@Controller('cows')
export class CowsController {
  constructor(private readonly cowService: CowsService) {}

  @Get()
  getCows(): Cow[] {
    return this.cowService.getCows();
  }

  @Post()
  createCow(@Body() newCow: Cow): string {
    this.cowService.createCow(newCow);
    return 'Cow created '
  }
}
