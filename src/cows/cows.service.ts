import { Injectable } from '@nestjs/common';
import { Cow } from './interfaces/cow.interface';

@Injectable()
export class CowsService {
  cows: Cow[] = [
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
    console.log('cow created: ', newCow);
    this.cows.push(newCow);
  }

  updateCow(cowData: Cow): any {
    for (let i = 0; i < this.cows.length; i++) {
      if (this.cows[i].id === cowData.id) {
        this.cows[i] = cowData;
        return this.cows[i];
      }
    }
    return 'no cow found';
  }

  deleteCow(id: string): string {
    const cowsBefore: number = this.cows.length;
    this.cows = this.cows.filter((cow) => cow.id !== id);
    const cowsAfter: number = this.cows.length;

    if (cowsBefore !== cowsAfter) {
      return 'cow removed';
    } else {
      return 'no cow found with that id';
    }
  }
}
