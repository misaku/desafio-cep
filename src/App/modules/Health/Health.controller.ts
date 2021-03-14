import HealthBusiness from './Health.business';

class HealthController {
  constructor(private healthBusiness: HealthBusiness) {}

  public async show() {
    return this.healthBusiness.getHelth();
  }
}

export default HealthController;
