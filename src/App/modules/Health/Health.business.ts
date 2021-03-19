import { getRepository } from 'typeorm';
import { v4 } from 'uuid';
import User from '@DataBase/entity/User';
import { inject, injectable } from 'tsyringe';
import { ICacheProvider } from '@provider/cache/cache.provider.interfaces';
import { IHealthBusiness, IHealthBusinessReponseDTO } from './Health.interfaces';

@injectable()
class HealthBusiness implements IHealthBusiness {
  constructor(
    @inject('RedisCacheProvider')
    private redisCacheProvider: ICacheProvider,
  ) {}

  public async getHealth() {
    let database: string;
    try {
      await getRepository(User).findOne(v4());
      database = 'OK';
    } catch (e) {
      database = 'ERROR';
    }

    let redis: string;

    try {
      await this.redisCacheProvider.recover('teste');
      redis = 'OK';
    } catch (e) {
      redis = 'ERROR';
    }

    return {
      server: {
        status: 'OK',
      },
      database: {
        status: database,
      },
      redis: {
        status: redis,
      },
    } as IHealthBusinessReponseDTO;
  }
}
export default HealthBusiness;
