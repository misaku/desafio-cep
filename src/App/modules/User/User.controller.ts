import { inject, injectable } from 'tsyringe';
import { Request } from '@hapi/hapi';
import UserBusiness from './User.business';

import { ICreateUserDTO, IUserController } from './User.interfaces';

@injectable()
class UserController implements IUserController {
  constructor(
    @inject('UserBusiness')
    private userBusiness: UserBusiness,
  ) {}

  public async store({ payload }: Request) {
    return this.userBusiness.createUser(payload as ICreateUserDTO);
  }
}

export default UserController;
