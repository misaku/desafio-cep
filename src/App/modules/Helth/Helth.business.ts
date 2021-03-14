import { getConnection } from 'typeorm';

class HelthBusiness {
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
export default HelthBusiness;
