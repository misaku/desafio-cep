import { hash } from 'bcryptjs';
import User from '../../../DataBase/entity/User';
import AppError from '../../../errors/AppError';

import { IRequestUserDto, IUserRepository } from './User.interfaces';

class UserBusiness {
  constructor(private userRepository: IUserRepository) {}

  public async createUser({ email, name, password }: IRequestUserDto): Promise<User> {
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
