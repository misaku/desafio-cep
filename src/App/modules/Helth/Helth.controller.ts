import HelthBusiness from './Helth.business';

class HelthController {
  protected helthBusiness: HelthBusiness;

  constructor(helthBusiness: HelthBusiness) {
    this.helthBusiness = helthBusiness;
  }

  public async show() {
    return this.helthBusiness.getHelth();
  }
}

export default HelthController;
