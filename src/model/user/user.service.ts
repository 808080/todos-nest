import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await genSalt();
    const user = new User();
    user.login = createUserDto.login;
    user.password = await hash(createUserDto.password, salt);
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.fullName = `${createUserDto.firstName ? createUserDto.firstName : ''} ${createUserDto.lastName ? createUserDto.lastName : ''}`.trim();

    const newUser = await this.userRepository.save(user).catch((err: any) => {
      return err.detail;
    });
    delete newUser.password;
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  findByLogin(login: string): Promise<User> {
    return this.userRepository.findOne({
      where: { login }
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email }
    });
  }

  findAuthUser(login: string): Promise<User> {
    return this.userRepository.createQueryBuilder("user")
    .where("user.login = :login", { login })
    .addSelect("user.password")
    .getOne();
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}