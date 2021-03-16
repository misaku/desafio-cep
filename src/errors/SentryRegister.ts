import * as Hapi from '@hapi/hapi';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

const SentryRegister = async (server: Hapi.Server) => {
  Sentry.init({
    dsn: 'https://d2c67cceb2b740e9afc69a26c01125f3@o215059.ingest.sentry.io/5678311',
    tracesSampleRate: 1.0,
  });
  // eslint-disable-next-line global-require
  await server.register({ plugin: require('hapi-sentry'), options: { client: Sentry, catchLogErrors: true } });

  server.ext({
    type: 'onPostAuth',
    method(request: any, h) {
      request.payload && request.sentryScope.setExtra('payload', request.payload);
      return h.continue;
    },
  });
};

export default SentryRegister;
