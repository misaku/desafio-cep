import * as Hapi from '@hapi/hapi';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import EnvironmentConfig from '@src/Environment.config';

/**
 * funcção para registrar sentry
 * @param server
 * @constructor
 */
const SentryRegister = async (server: Hapi.Server) => {
  if (EnvironmentConfig.sentry.dns) {
    Sentry.init({
      dsn: EnvironmentConfig.sentry.dns,
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
  }
};

export default SentryRegister;
