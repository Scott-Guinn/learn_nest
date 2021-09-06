import { Injectable } from '@nestjs/common';
import { Cow } from './interfaces/cow.interface';

@Injectable()
export class CowsService {
  cows = [
    {
      id: '123',
      name: 'Moo',
      description: 'Generic cow',
    },
    {
      id: '246',
      name: 'Bartholomew',
      description: 'Pirate cow',
    },
  ];
  getCows(): Cow[] {
    return this.cows;
  }

  createCow(newCow: Cow): void {
    this.cows.push(newCow);
  }
}
