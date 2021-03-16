import { v4 } from 'uuid';
import { hashSync } from 'bcryptjs';
import { ICreateUserDTO, IUserRepository } from '../../User.interfaces';
import User from '../../../../../DataBase/entity/User';

export default class UserFakeRepository implements IUserRepository {
  protected database: User[] = [
    {
      id: v4(),
      name: 'first User',
      email: 'firstUser@test.com',
      password: hashSync('123', 8),
    } as User,
  ];

  create(data: ICreateUserDTO): Promise<User> {
    const user = { ...data, id: v4() } as User;
    this.database.push(user);
    return Promise.resolve(user);
  }

  findByEmail(email: string): Promise<User | undefined> {
    const user = this.database.find(userElement => userElement.email === email);
    return Promise.resolve(user);
  }

  findByIdAndEmail(id: string, email: string): Promise<User | undefined> {
    const user = this.database.find(userElement => userElement.email === email && userElement.id === id);
    return Promise.resolve(user);
  }
}
