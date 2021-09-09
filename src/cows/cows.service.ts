import { Injectable } from '@nestjs/common';
// import { Cow } from './interfaces/cow.interface';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cow } from './cow.entity';

@Injectable()
export class CowsService {
  constructor(
    @InjectRepository(Cow)
    private cowsRepository: Repository<Cow>,
  ) {}

  getCows(): Promise<Cow[]> {
    return this.cowsRepository.find();
  }

  createCow(newCow: Cow): Promise<any> {
    console.log('cow created: ', newCow);
    return this.cowsRepository.insert(newCow);
  }

  updateCow(cowData: Cow): Promise<any> {
    return this.cowsRepository.update({ id: cowData.id }, cowData);
  }

  async delete(id: string): Promise<void> {
    await this.cowsRepository.delete(id);
  }
}
