import { Request } from '@hapi/hapi';
import { inject, injectable } from 'tsyringe';
import CepBusiness from './Cep.business';
import { ICepController } from './Cep.interfaces';

@injectable()
class CepController implements ICepController {
  constructor(
    @inject('CepBusiness')
    private cepBusiness: CepBusiness,
  ) {}

  public async show({ params: { cepValue } }: Request) {
    return this.cepBusiness.getAddress(cepValue);
  }

  public async show2({ params: { cepValue } }: Request) {
    return this.cepBusiness.getAddress2(cepValue);
  }
}

export default CepController;
