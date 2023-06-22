import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostgresUser } from './entities/user-postgres.entity';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { MongoUser } from './entities/user-mongo.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(PostgresUser)
    private readonly _userRepository: Repository<PostgresUser>,
    @InjectModel(MongoUser.name) private _userModel: Model<MongoUser>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const userPostgres = await this._userRepository.save(createUserDto);

    const createdUser = new this._userModel(createUserDto);
    await createdUser.save();

    return userPostgres;
  }

  async findAll() {
    return await this._userModel.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
