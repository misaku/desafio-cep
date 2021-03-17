import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import User from '@DataBase/entity/User';
import AppError from '@errors/AppError';

import { ICreateUserDTO, IUserBusiness, IUserRepository } from './User.interfaces';

@injectable()
class UserBusiness implements IUserBusiness {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async createUser({ email, name, password }: ICreateUserDTO): Promise<User> {
    const checkUserExist = await this.userRepository.findByEmail(email);

    if (checkUserExist) {
      throw new AppError('E-mail já existe em nossa base');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.userRepository.create({ email, name, password: hashedPassword });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete user.password;

    return user;
  }
}
export default UserBusiness;
