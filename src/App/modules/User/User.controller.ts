import UserBusiness from './User.business';

class UserController {
  protected userBusiness: UserBusiness;

  constructor(helthBusiness: UserBusiness) {
    this.userBusiness = helthBusiness;
  }

  public async store({ payload }, h) {
    return this.userBusiness.createUser(payload);
  }
}

export default UserController;
