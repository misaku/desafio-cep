import { ResponseToolkit, Request } from '@hapi/hapi';
import CepBusiness from './Cep.business';

class CepController {
  constructor(private cepBusiness: CepBusiness) {}

  public async show({ params: { cepValue } }: Request, h: ResponseToolkit) {
    return this.cepBusiness.getAddress(cepValue);
  }

  public async show2({ params: { cepValue } }: Request, h: ResponseToolkit) {
    return this.cepBusiness.getAddress2(cepValue);
  }
}

export default CepController;
