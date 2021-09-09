import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CowsService } from './cows.service';
import { Cow } from './cow.entity';

@Controller('cows')
export class CowsController {
  constructor(private readonly cowService: CowsService) {}

  @Get()
  getCows(): Promise<Cow[]> {
    return this.cowService.getCows();
  }

  @Post()
  createCow(@Body() newCow: Cow): string {
    this.cowService.createCow(newCow);
    return 'Cow created.';
  }

  @Put()
  async updateCow(@Body() cowToUpdate: Cow): Promise<Cow> {
    return await this.cowService.updateCow(cowToUpdate);
  }

  @Delete(':id')
  async deleteCow(@Param('id') id: string) {
    console.log('id: ', id);
    await this.cowService.delete(id);
  }
}
