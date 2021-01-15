import { Column, Entity, OneToMany } from 'typeorm';
import { IsEmail, MinLength } from 'class-validator';
import { EntityTemplate } from '../abstract/entity';
import { Task } from '../task/task.entity';
import { List } from '../list/list.entity';

@Entity()
export class User extends EntityTemplate {
  @MinLength(5, {
    message: 'Login should be at least $constraint1 characters long.',
  })
  @Column({ unique: true })
  login: string;

  @MinLength(5, {
    message: 'Password should be at least $constraint1 characters long.',
  })
  @Column({ select: false })
  password: string;

  @IsEmail()
  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  fullName: string;

  @OneToMany(type => Task, task => task.user)
  tasks: Task[];

  @OneToMany(type => List, list => list.user)
  lists: List[];
}