import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LoginUserDto } from './model/user/dto/login-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('auth/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('test')
  test(): string {
    return "It's working!";
  }
}