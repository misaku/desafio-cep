import AuthBusiness from './Auth.business';

class AuthController {
  constructor(private authBusiness: AuthBusiness) {}

  public async store({ payload }) {
    return this.authBusiness.store(payload);
  }
}

export default AuthController;
