import { Column, Entity, OneToMany, ManyToOne } from 'typeorm';
import { EntityTemplate } from '../abstract/entity';
import { Task } from '../task/task.entity';
import { User } from '../user/user.entity';

@Entity()
export class List extends EntityTemplate {
  @Column()
  name: string;

  @OneToMany(type => Task, task => task.list)
  tasks: Task[];

  @ManyToOne(type => User, user => user.lists)
  user: User;
}