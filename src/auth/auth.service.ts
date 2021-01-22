import { Injectable } from '@nestjs/common';
import { UserService } from 'src/model/user/user.service';
import { LoginUserDto } from 'src/model/user/dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { User } from 'src/model/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(loginUserDto: LoginUserDto): Promise<any> {
    const user: User = await this.userService.findAuthUser(loginUserDto.login);
    const isMatch = await compare(loginUserDto.password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.validateUser(loginUserDto);
    if (!user) throw new UnauthorizedException();
    return {
      token: this.jwtService.sign(user),
    };
  }
}