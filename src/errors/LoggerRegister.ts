import * as Hapi from '@hapi/hapi';
import EnvironmentConfig from '@src/Environment.config';

/**
 * função para registar Log
 * @param server
 * @constructor
 */
const LoggerRegister = async (server: Hapi.Server) => {
  const {
    active,
    http: { key, url, value },
    path,
  } = EnvironmentConfig.log;
  if (active) {
    const file = path
      ? {
          file: [
            {
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [{ log: '*', response: '*', ops: '*', error: '*' }],
            },
            {
              module: 'good-squeeze',
              name: 'SafeJson',
            },
            {
              module: 'good-file',
              args: [path],
            },
          ],
        }
      : {};

    const http = url
      ? {
          http: [
            {
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [{ error: '*', log: '*', response: '*', ops: '*' }],
            },
            {
              module: 'good-http',
              args: [
                url,
                {
                  wreck: {
                    ...(key &&
                      value && {
                        headers: { [key]: value },
                      }),
                  },
                },
              ],
            },
          ],
        }
      : {};

    const options = {
      ops: {
        interval: 1000,
      },
      reporters: {
        console: [
          {
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*', ops: '*', error: '*' }],
          },
          {
            module: 'good-console',
          },
          'stdout',
        ],
        ...file,
        ...http,
      },
    };

    await server.register({
      // eslint-disable-next-line global-require
      plugin: require('good'),
      options,
    });
  }
};

export default LoggerRegister;
