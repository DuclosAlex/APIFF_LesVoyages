import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm'
import { UserService } from './service/user.service';
import { UserController } from './controllers/user.controller';
import { UserEntity } from './models/user.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [UserService],
  controllers : [UserController],
})
export class UsersModule {}
