import { inject, injectable } from 'tsyringe';
import HealthBusiness from './Health.business';
import { IHealthController } from './Health.interfaces';

@injectable()
class HealthController implements IHealthController {
  constructor(
    @inject('HealthBusiness')
    private healthBusiness: HealthBusiness,
  ) {}

  public async show() {
    return this.healthBusiness.getHealth();
  }
}

export default HealthController;
