import Cep from './Cep';
import CepServices, { ResponseDTO } from './Cep.services';

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
          const response = await this.service.getAddress(cep);
          if (response.success) {
            stopGetAddres = true;
            return response;
          }
          cep = Cep.possibleNewCep(cep);
        } else {
          stopGetAddres = true;
          return {
            success: false,
            data: {
              erro: 'Não foi possivel encontrar um resultado',
            },
          };
        }
      }
    }
    return {
      success: false,
      data: {
        erro: 'Cep Inaválido',
      },
    };
  }

  public async getAddress2(cepValue: string) {
    if (Cep.isValid(cepValue)) {
      const cep = Cep.clearedValue(cepValue);
      if (cep !== '00000000') {
        let response = await this.service.getAddress(cep);
        if (response.success) {
          return response;
        }
        response = (await this.getAddress2(Cep.possibleNewCep(cep))) as ResponseDTO;
        return response;
      }
      return {
        success: false,
        data: {
          erro: 'Não foi possivel encontrar um resultado',
        },
      };
    }
    return {
      success: false,
      data: {
        erro: 'Cep Inaválido',
      },
    };
  }
}
export default CepBusiness;
