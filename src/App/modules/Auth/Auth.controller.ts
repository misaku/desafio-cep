import { inject, injectable } from 'tsyringe';
import { Request } from '@hapi/hapi';
import AuthBusiness from './Auth.business';
import { IAuthController, IAuthRequestDTO } from './Auth.interfaces';

@injectable()
class AuthController implements IAuthController {
  constructor(
    @inject('AuthBusiness')
    private authBusiness: AuthBusiness,
  ) {}

  public async store({ payload }: Request) {
    return this.authBusiness.store(payload as IAuthRequestDTO);
  }
}

export default AuthController;
