import CepBusiness from './Cep.business';

class CepController {
  protected cepBusiness: CepBusiness;

  constructor(cepBusiness: CepBusiness) {
    this.cepBusiness = cepBusiness;
  }

  public async show({ params: { cepValue } }) {
    const response = await this.cepBusiness.getAddress(cepValue);
    return response;
  }

  public async show2({ params: { cepValue } }) {
    const response = await this.cepBusiness.getAddress2(cepValue);
    return response;
  }
}

export default CepController;
