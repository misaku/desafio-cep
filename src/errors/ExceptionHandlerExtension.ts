import * as Hapi from '@hapi/hapi';

import AppError from './AppError';

function ExceptionHandlerExtension(server: Hapi.Server): void {
  server.ext('onPreResponse', function (request, h) {
    const response = request.response as any;

    if (response instanceof Error && response.name === 'AppError') {
      const { statusCode, message } = response as AppError;

      const sentry = (server as any).plugins['hapi-sentry']?.client;

      if (sentry) {
        sentry.captureException(response);
      }

      return h
        .response({
          error: `APP_ERROR[${statusCode}]: ${message}`,
          message,
        })
        .code(statusCode);
    }

    return h.continue;
  });
}

export default ExceptionHandlerExtension;
