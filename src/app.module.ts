import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { UserModule } from 'src/model/user/user.module';
import { TaskModule } from './model/task/task.module';
import { ListModule } from './model/list/list.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    TaskModule,
    ListModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
