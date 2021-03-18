import * as Hapi from '@hapi/hapi';

const LoggerRegister = async (server: Hapi.Server) => {
  if (process.env.LOG && process.env.LOG === 'true') {
    const file = process.env.LOG_PATH_FILE
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
              args: [process.env.LOG_PATH_FILE],
            },
          ],
        }
      : {};

    const http = process.env.LOG_HTTP
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
                process.env.LOG_HTTP,
                {
                  wreck: {
                    ...(process.env.LOG_HTTP_KEY &&
                      process.env.LOG_HTTP_VALUE && {
                        headers: { [process.env.LOG_HTTP_KEY]: process.env.LOG_HTTP_VALUE },
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
