import { Column, Entity, ManyToOne } from 'typeorm';
import { EntityTemplate } from '../abstract/entity';
import { User } from '../user/user.entity';
import { List } from '../list/list.entity';

@Entity()
export class Task extends EntityTemplate {
  @Column()
  description: string;

  @ManyToOne(type => User, user => user.tasks)
  user: User;

  @ManyToOne(type => List, list => list.tasks)
  list: List;

  @Column({default: false})
  starred: boolean;

  @Column({default: false})
  done: boolean;

  @Column()
  dueTo: Date;
}