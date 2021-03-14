import * as Hapi from '@hapi/hapi';

import AuthController from './Auth.controller';
import AuthBusiness from './Auth.business';
import AuthSchema from './Auth.schema';
import UserRepository from '../User/User.repository';

export default (server: Hapi.Server) => {
  const controller = new AuthController(new AuthBusiness(new UserRepository()));
  server.bind(controller);
  server.route([
    {
      method: 'POST',
      path: '/auth',
      options: {
        auth: {
          mode: 'optional',
        },
        handler: controller.store,
        description: 'Endpoint de Autenticação',
        notes: 'Retorna Token',
        tags: ['api', 'Health'],
        validate: AuthSchema.store(),
      },
    },
  ]);
};
