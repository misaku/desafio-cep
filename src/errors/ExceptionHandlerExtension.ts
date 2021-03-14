import * as Hapi from '@hapi/hapi';
import AppError from './AppError';

function ExceptionHandlerExtension(server: Hapi.Server): void {
  server.ext('onPreResponse', function (request, h) {
    const response = request.response as any;
    if (response.data && response.data instanceof AppError) {
      const error = response.data as AppError;
      return h.response({ erro: error.message }).code(error.statusCode);
    }
    return h.continue;
  });
}

export default ExceptionHandlerExtension;
