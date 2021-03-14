import AuthBusiness from './Auth.business';

class AuthController {
  protected authBusiness: AuthBusiness;

  constructor(authBusiness: AuthBusiness) {
    this.authBusiness = authBusiness;
  }

  public async store({ payload }) {
    return this.authBusiness.store(payload);
  }
}

export default AuthController;
