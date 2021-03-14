import { ResponseToolkit, Request } from '@hapi/hapi';
import CepBusiness from './Cep.business';

class CepController {
  protected cepBusiness: CepBusiness;

  constructor(cepBusiness: CepBusiness) {
    this.cepBusiness = cepBusiness;
  }

  public async show({ params: { cepValue } }: Request, h: ResponseToolkit) {
    const response = await this.cepBusiness.getAddress(cepValue);
    return h.response(response.data).code(response.success ? 200 : 400);
  }

  public async show2({ params: { cepValue } }: Request, h: ResponseToolkit) {
    const response = await this.cepBusiness.getAddress2(cepValue);
    return h.response(response.data).code(response.success ? 200 : 400);
  }
}

export default CepController;
