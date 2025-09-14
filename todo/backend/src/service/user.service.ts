import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
import { envToExpose } from '../config/env.config';
const {JWT_SECRET} = envToExpose

class UserService {
  async register(userData: any) {
    const { firstName, lastName, emailOfUser, password } = userData;
    const userId = v4();
    const existingUser = await User.findOne({ where: { emailOfUser } });
    if (existingUser) throw new Error('Email already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      userId,
      firstName,
      lastName,
      emailOfUser,
      password: hashedPassword,
    });

    return user;
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ where: { emailOfUser: email } });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.getDataValue('password'));
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ userId: user.getDataValue('userId') },JWT_SECRET!, {
      expiresIn: '1d',
    });

    return { token, user };
  }
}

export default UserService