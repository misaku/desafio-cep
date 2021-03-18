import * as Hapi from '@hapi/hapi';

import { container } from 'tsyringe';
import AuthController from './Auth.controller';
import AuthSchema from './Auth.schema';

/**
 * rota de login
 * @param server
 */
export default (server: Hapi.Server) => {
  const controller = container.resolve(AuthController);

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
