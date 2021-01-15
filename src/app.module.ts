import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { UserModule } from 'src/model/user/user.module';
import { TaskModule } from './model/task/task.module';
import { ListModule } from './model/list/list.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    TaskModule,
    ListModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
