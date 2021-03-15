import { inject, injectable } from 'tsyringe';
import { Request } from '@hapi/hapi';

import { ICreateUserDTO, IUserBusiness, IUserController } from './User.interfaces';

@injectable()
class UserController implements IUserController {
  constructor(
    @inject('UserBusiness')
    private userBusiness: IUserBusiness,
  ) {}

  public async store({ payload }: Request) {
    return this.userBusiness.createUser(payload as ICreateUserDTO);
  }
}

export default UserController;
