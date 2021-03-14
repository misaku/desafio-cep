import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import JWT from 'jsonwebtoken';

import User from '../../../DataBase/entity/User';
import AppError from '../../../errors/AppError';

class AuthBusiness {
  public async store({ email, password }) {
    const userEpository = getRepository(User);

    const user = await userEpository.findOne({ where: { email } });

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
