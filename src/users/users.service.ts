import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Check if the username already exists
    const existingUser = await this.userModel.findOne({ username: createUserDto.username });

    if (existingUser) {
      // Handle the case where the username is not unique
      throw new ConflictException('Username is already taken');
    }

    // If the username is unique, proceed with creating the user
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }
}
