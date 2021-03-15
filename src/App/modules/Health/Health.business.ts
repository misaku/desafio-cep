import { getConnection } from 'typeorm';
import { IHealthBusiness, IHealthBusinessReponseDTO } from './Health.interfaces';

class HealthBusiness implements IHealthBusiness {
  public async getHealth() {
    let database: string;
    try {
      getConnection('default');
      database = 'OK';
    } catch (e) {
      database = 'ERROR';
    }

    return {
      server: {
        status: 'OK',
      },
      database: {
        status: database,
      },
    } as IHealthBusinessReponseDTO;
  }
}
export default HealthBusiness;
