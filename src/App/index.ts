import path from 'path';
import * as dir from 'node-dir';
import hapiAuthJWT from 'hapi-auth-jwt2';
import MainApp from './MainApp';
import { autenticateConfig, swaggerConfig } from './AppConfig';

class App extends MainApp {

  async registerPlugins() {

    super.registerPlugins();

    await this.server.register([
      hapiAuthJWT,
      ...swaggerConfig() as any,
    ]);

  }

  async postRegisterPlugins() {

    super.postRegisterPlugins();

    autenticateConfig(this.server);

  }

  async routes() {

    super.routes();
    // REGEX DE TESTE PARA ARQUIVOS QUE TRMINA COM ROUTE OU ROUTES
    const isRouteFile = (fileName:string) => /(routes)\.ts$/.test(fileName.toLowerCase());

    // FUNÇÃO DE NAVEGAÇÃO DE PASTAR E VERIFICAÇÃO DE RESPEITO A CONDIÇÃO DO REGEX
    const getRoutesFilesFromDirname = (dirname:string) => ((dir.files(dirname, {sync:true})||[]).filter(isRouteFile));

    // AUTO LOAD DE ROTAS
    let Routes: any[] = [];

    getRoutesFilesFromDirname(path.join(__dirname, './modules')).forEach(fileName => {
      Routes = [...Routes, ...(require(fileName).default)];
    });

    this.server.route(Routes);

  }
}

export default App;
