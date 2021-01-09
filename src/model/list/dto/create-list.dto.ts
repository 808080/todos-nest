import { User } from "src/model/user/user.entity";

export class CreateListDto {
  name: string;
  user: User;
}