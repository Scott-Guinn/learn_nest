import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cow {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
