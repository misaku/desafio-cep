function setEnvironment<T = any>(value: any, defaultValue?: T): T | undefined {
  let parsedValue: T | undefined;

  if (value && (value.toString().toUpperCase() === 'TRUE' || value.toString().toUpperCase() === 'FALSE')) {
    parsedValue = (((value as string).toUpperCase() === 'TRUE') as unknown) as T;
  } else if (value && Number(value).toString().toUpperCase() !== 'NAN') {
    parsedValue = (Number(value) as unknown) as T;
  } else {
    parsedValue = value as T;
  }
 console.log(value ? parsedValue : defaultValue)
  return value ? parsedValue : defaultValue;
}

export const EnvironmentConfig = {
  database: {
    type: setEnvironment<string>(process.env.DB_TYPE, 'postgres'),
    host: setEnvironment<string>(process.env.DB_HOST, 'localhost'),
    port: setEnvironment<number>(process.env.DB_PORT, 5432),
    user: setEnvironment<string>(process.env.DB_USER),
    password: setEnvironment<string>(process.env.DB_PASSWORD),
    dbName: setEnvironment<string>(process.env.DB_NAME, 'buscacep'),
  },
  cache: {
    active: setEnvironment<boolean>(process.env.CACHE, true),
    redis: {
      port: setEnvironment<number>(process.env.REDIS_PORT, 6379),
      host: setEnvironment<string>(process.env.REDIS_HOST, '127.0.0.1'),
      family: setEnvironment<number>(process.env.REDIS_FAMILY, 4),
      password: setEnvironment<string>(process.env.REDIS_PASSWORD),
      number: setEnvironment<number>(process.env.REDIS_NUMBER),
    },
  },
  sentry: {
    dns: setEnvironment<string>(process.env.SENTRY_DNS),
  },
  log: {
    active: setEnvironment<boolean>(process.env.LOG),
    path: setEnvironment<string>(process.env.LOG_PATH_FILE, './logs/server_log'),
    http: {
      url: setEnvironment<string>(process.env.LOG_HTTP),
      key: setEnvironment<string>(process.env.LOG_HTTP_KEY),
      value: setEnvironment<string>(process.env.LOG_HTTP_VALUE),
    },
  },
  sever: {
    host: setEnvironment<string>(process.env.SERVER_HOST, 'localhost'),
    port: setEnvironment<number>(process.env.SERVER_PORT, 3000),
    secret: setEnvironment<string>(process.env.APP_SECRET, 'BuscaCep-LuizaLabs'),
  },
  service: {
    api: setEnvironment<string>(process.env.API_CEP, 'https://viacep.com.br/ws'),
  },
};
export default EnvironmentConfig;
