import User from '../models/User';
import { getRepository } from 'typeorm';

interface Request {
  name: string;
  password: string;
  email: string;
}

export default class createUserService {
  public async execute({ name, password, email }: Request): Promise<User> {
    const usersRepository = getRepository(User);
    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });
    if (checkUserExists) {
      throw new Error('Email address alredy used.');
    }
    const user = usersRepository.create({
      name,
      email,
      password,
    });
    await usersRepository.save(user);
    return user;
  }
}
