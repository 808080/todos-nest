import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export abstract class EntityTemplate {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @CreateDateColumn()
  readonly created: Date
}