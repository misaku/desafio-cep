class HelthBusiness {
  public async getHelth() {
    return {
      server: {
        status: 'OK',
      },
    };
  }
}
export default HelthBusiness;
