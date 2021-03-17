import { getRepository, Repository } from 'typeorm';

import User from '@DataBase/entity/User';
import { ICreateUserDTO, IUserRepository } from './User.interfaces';

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  public async findByIdAndEmail(id: string, email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email, id } });
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.userRepository.create(data);
    await this.userRepository.save(user);
    return user;
  }
}

export default UserRepository;
