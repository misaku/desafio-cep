import UserBusiness from './User.business';

class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public async store({ payload }) {
    return this.userBusiness.createUser(payload);
  }
}

export default UserController;
