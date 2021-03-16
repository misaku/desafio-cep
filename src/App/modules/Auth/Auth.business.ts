import { compare } from 'bcryptjs';
import JWT from 'jsonwebtoken';

import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';

import { IUserRepository } from '../User/User.interfaces';
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
      process.env.APP_SECRET || '',
    );

    return {
      token,
    } as IAuthResponseDTO;
  }
}
export default AuthBusiness;
