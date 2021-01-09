import { List } from "src/model/list/list.entity";
import { User } from "src/model/user/user.entity";

export class CreateTaskDto {
  description: string;
  user: User;
  list: List;
  starred: boolean;
  done: boolean;
  dueTo: Date;
}