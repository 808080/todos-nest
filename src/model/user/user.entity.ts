import { Column, Entity, OneToMany } from 'typeorm';
import { EntityTemplate } from '../abstract/entity';
import { Task } from '../task/task.entity';
import { List } from '../list/list.entity';

@Entity()
export class User extends EntityTemplate {
  @Column({ unique: true })
  login: string;

  @Column({ select: false })
  password: string;

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