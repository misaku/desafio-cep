import { getRepository } from 'typeorm';
import { v4 } from 'uuid';
import { IHealthBusiness, IHealthBusinessReponseDTO } from './Health.interfaces';
import User from '../../../DataBase/entity/User';

class HealthBusiness implements IHealthBusiness {
  public async getHealth() {
    let database: string;
    try {
      await getRepository(User).findOne(v4());
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
