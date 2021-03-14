import { getConnection } from 'typeorm';

class HealthBusiness {
  public async getHelth() {
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
    };
  }
}
export default HealthBusiness;
