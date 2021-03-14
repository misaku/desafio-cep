import CepBusiness from './Cep.business';

class CepController {
  protected cepBusiness: CepBusiness;

  constructor(cepBusiness: CepBusiness) {
    this.cepBusiness = cepBusiness;
    console.log(this.cepBusiness, 'INICIOU');
  }

  public async show({ params: { cepValue } }) {
    const response = await this.cepBusiness.getAddress(cepValue);
    return response;
  }
}

export default CepController;
