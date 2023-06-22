import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresUser } from './entities/user-postgres.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoUser, MongoUserSchema } from './entities/user-mongo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostgresUser]),
    MongooseModule.forFeature([
      { name: MongoUser.name, schema: MongoUserSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
