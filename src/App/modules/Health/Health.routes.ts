import * as Hapi from '@hapi/hapi';

import { container } from 'tsyringe';
import HealthController from './Health.controller';

export default (server: Hapi.Server) => {
  const controller = container.resolve(HealthController);
  server.bind(controller);
  server.route([
    {
      method: 'GET',
      path: '/health',
      options: {
        auth: {
          mode: 'optional',
        },
        handler: controller.show,
        description: 'Endpoint de healthcheck',
        notes: 'Retorna healthcheck',
        tags: ['api', 'Health'],
      },
    },
  ]);
};
