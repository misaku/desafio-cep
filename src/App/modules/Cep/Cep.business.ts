import Cep from './Cep';
import CepServices from './Cep.services';

class CepBusiness {
  protected service: CepServices;

  constructor() {
    this.service = new CepServices();
  }

  public async getAddress(cepValue: string) {
    if (Cep.isValid(cepValue)) {
      let cep = Cep.clearedValue(cepValue);
      let stopGetAddres = false;
      while (!stopGetAddres) {
        if (cep !== '00000000') {
          // eslint-disable-next-line no-await-in-loop
          const { success, response } = await this.service.getAddress(cep);
          if (success && !response.erro) {
            stopGetAddres = true;
            return response;
          }
          cep = Cep.possibleNewCep(cep);
        } else {
          stopGetAddres = true;
          return {
            erro: 'Não foi possivel encontrar um resultado',
          };
        }
      }
    }
    return {
      erro: 'Cep Inaválido',
    };
  }

  public async getAddress2(cepValue: string) {
    if (Cep.isValid(cepValue)) {
      const cep = Cep.clearedValue(cepValue);
      if (cep !== '00000000') {
        // eslint-disable-next-line prefer-const
        let { success, response } = await this.service.getAddress(cep);
        if (success && !response.erro) {
          return response;
        }
        response = await this.getAddress2(Cep.possibleNewCep(cep));
        return response;
      }
      return {
        erro: 'Não foi possivel encontrar um resultado',
      };
    }
    return {
      erro: 'Cep Inaválido',
    };
  }
}
export default CepBusiness;
