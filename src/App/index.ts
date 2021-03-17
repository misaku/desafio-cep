import path from 'path';
import * as dir from 'node-dir';
import hapiAuthJWT from 'hapi-auth-jwt2';
import ExceptionHandlerExtension from '@errors/ExceptionHandlerExtension';
import SentryRegister from '@errors/SentryRegister';
import LoggerRegister from '@errors/LoggerRegister';
import { autenticateConfig, swaggerConfig } from './AppConfig';
import MainApp from './MainApp';

class App extends MainApp {
  async registerPlugins() {
    await super.registerPlugins();

    await this.server.register([hapiAuthJWT, ...(swaggerConfig() as any)]);

    await this.server.register({
      // eslint-disable-next-line global-require
      plugin: require('hapijs-status-monitor'),
      options: {
        title: 'Monitor Server Busca Cep',
        routeConfig: {
          auth: false,
        },
      },
    });
    ExceptionHandlerExtension(this.server);
    await SentryRegister(this.server);
    await LoggerRegister(this.server);
  }

  async postRegisterPlugins() {
    await super.postRegisterPlugins();

    autenticateConfig(this.server);
  }

  async routes() {
    await super.routes();
    // REGEX DE TESTE PARA ARQUIVOS QUE TRMINA COM ROUTE OU ROUTES
    const isRouteFile = (fileName: string) => /(routes)\.ts$/.test(fileName.toLowerCase());

    // FUNÇÃO DE NAVEGAÇÃO DE PASTAR E VERIFICAÇÃO DE RESPEITO A CONDIÇÃO DO REGEX
    const getRoutesFilesFromDirname = (dirname: string) =>
      (dir.files(dirname, { sync: true }) || []).filter(isRouteFile);

    getRoutesFilesFromDirname(path.join(__dirname, './modules')).forEach(fileName => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
      require(fileName).default(this.server);
    });
  }
}

export default App;
