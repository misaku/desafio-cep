import * as Hapi from '@hapi/hapi';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

/**
 * funcção para registrar sentry
 * @param server
 * @constructor
 */
const SentryRegister = async (server: Hapi.Server) => {
  Sentry.init({
    dsn: process.env.SENTRY_DNS,
    tracesSampleRate: 1.0,
  });
  // eslint-disable-next-line global-require
  await server.register({ plugin: require('hapi-sentry'), options: { client: Sentry, catchLogErrors: true } });

  server.ext({
    type: 'onPostAuth',
    method(request: any, h) {
      // eslint-disable-next-line no-unused-expressions
      request.payload && request.sentryScope.setExtra('payload', request.payload);
      return h.continue;
    },
  });
};

export default SentryRegister;
