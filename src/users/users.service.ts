import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({ username: createUserDto.username });

    if (existingUser) {
      throw new ConflictException('Username is already taken');
    }


    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }
}
