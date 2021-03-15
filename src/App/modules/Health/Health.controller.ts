import { inject, injectable } from 'tsyringe';

import { IHealthBusiness, IHealthController } from './Health.interfaces';

@injectable()
class HealthController implements IHealthController {
  constructor(
    @inject('HealthBusiness')
    private healthBusiness: IHealthBusiness,
  ) {}

  public async show() {
    return this.healthBusiness.getHealth();
  }
}

export default HealthController;
