import { inject, injectable } from 'tsyringe';
import {Request, ResponseToolkit} from '@hapi/hapi';

import { ICreateUserDTO, IUserBusiness, IUserController } from './User.interfaces';

@injectable()
class UserController implements IUserController {
  constructor(
    @inject('UserBusiness')
    private userBusiness: IUserBusiness,
  ) {}

  public async store({ payload }: Request, response: ResponseToolkit) {
    const user = await this.userBusiness.createUser(payload as ICreateUserDTO);
    return response.response(user).code(201);
  }
}

export default UserController;
