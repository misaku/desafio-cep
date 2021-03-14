import * as Hapi from '@hapi/hapi';

import HelthController from './Helth.controller';
import HelthBusiness from './Helth.business';

export default (server: Hapi.Server) => {
  const controller = new HelthController(new HelthBusiness());
  server.bind(controller);
  server.route([
    {
      method: 'GET',
      path: '/helth',
      options: {
        auth: {
          mode: 'optional',
        },
        handler: controller.show,
        description: 'Endpoint de helthcheck',
        notes: 'Retorna helthcheck',
        tags: ['api', 'Helth'],
      },
    },
  ]);
};
