import * as Hapi from '@hapi/hapi';

import HealthController from './Health.controller';
import HealthBusiness from './Health.business';

export default (server: Hapi.Server) => {
  const controller = new HealthController(new HealthBusiness());
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
