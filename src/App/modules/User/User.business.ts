import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../../DataBase/entity/User';
import AppError from '../../../errors/AppError';

interface RequestUserDto {
  name: string;
  email: string;
  password: string;
}
class UserBusiness {
  public async createUser({ email, name, password }: RequestUserDto): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExist = await userRepository.findOne({
      where: { email },
    });

    if (checkUserExist) {
      throw new AppError('E-mail já existe em nossa base');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({ email, name, password: hashedPassword });

    await userRepository.save(user);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete user.password;

    return user;
  }
}
export default UserBusiness;
