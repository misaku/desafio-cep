import { inject, injectable } from 'tsyringe';
import { Request } from '@hapi/hapi';
import { IAuthBusiness, IAuthController, IAuthRequestDTO } from './Auth.interfaces';

@injectable()
class AuthController implements IAuthController {
  constructor(
    @inject('AuthBusiness')
    private authBusiness: IAuthBusiness,
  ) {}

  public async store({ payload }: Request) {
    return this.authBusiness.store(payload as IAuthRequestDTO);
  }
}

export default AuthController;
