import Joi from 'joi';

/**
 * validação do payload de cadastro de usuário
 */
class UserSchema {
  public static store() {
    return {
      payload: Joi.object({
        name: Joi.string().required().example('Michel dos Santos Kuguio').description('nome do usuário'),
        email: Joi.string().required().example('michel.kuguio@gmail.com').description('email do usuário'),
        password: Joi.string().required().example('123456').description('senha para login'),
      }),
    };
  }
}

export default UserSchema;
