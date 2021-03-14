import Joi from 'joi';

class CepSchema {
  static show() {
    return {
      params: Joi.object({
        cepValue: Joi.string().required().example('14050360').description('Cep do endereço'),
      }),
    };
  }
}

export default CepSchema;
