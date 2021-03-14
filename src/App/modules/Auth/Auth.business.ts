import { compare } from 'bcryptjs';
import JWT from 'jsonwebtoken';

import AppError from '../../../errors/AppError';

import { IUserRepository } from '../User/User.interfaces';

class AuthBusiness {
  constructor(private userRepository: IUserRepository) {}

  public async store({ email, password }) {
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
      'BuscaCep-LuizaLabs',
    );

    return {
      token,
    };
  }
}
export default AuthBusiness;
