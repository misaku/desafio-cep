import HealthBusiness from './Health.business';

class HealthController {
  protected helthBusiness: HealthBusiness;

  constructor(helthBusiness: HealthBusiness) {
    this.helthBusiness = helthBusiness;
  }

  public async show() {
    return this.helthBusiness.getHelth();
  }
}

export default HealthController;
