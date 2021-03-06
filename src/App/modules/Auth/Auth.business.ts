import { compare } from 'bcryptjs';
import JWT from 'jsonwebtoken';

import { inject, injectable } from 'tsyringe';
import AppError from '@errors/AppError';

import { IUserRepository } from '@modules/User/User.interfaces';
import EnvironmentConfig from '@src/Environment.config';
import { IAuthBusiness, IAuthRequestDTO, IAuthResponseDTO } from './Auth.interfaces';

@injectable()
class AuthBusiness implements IAuthBusiness {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async store({ email, password }: IAuthRequestDTO) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Usuário/Senha Inválidos');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Usuário/Senha Inválidos');
    }

    const token = JWT.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      EnvironmentConfig.sever.secret as string,
    );

    return {
      token,
    } as IAuthResponseDTO;
  }
}
export default AuthBusiness;
