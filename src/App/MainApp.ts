import * as Hapi from '@hapi/hapi';
import MainAppInterface from './MainApp.interface';

/**
 * Classe Abstrata MainApp
 * @class MainApp
 * */
abstract class MainApp implements MainAppInterface {
  protected server: Hapi.Server;

  constructor() {
    process.on('unhandledRejection', err => {
      console.log(err);
      process.exit(1);
    });

    this.server = Hapi.server({
      port: 3000,
      host: 'localhost',
    });
  }

  public getServer() {
    return this.server;
  }

  /**
   * Metodo de Executado antes do Registro de Plugins
   * @type {function():Promise<void>}
   * @return {Promise<void>}
   * @public
   */
  public async preRegisterPlugins() {}

  /**
   * Metodo de Registro de Plugins
   * @type {function():Promise<void>}
   * @return {Promise<void>}
   * @public
   */
  public async registerPlugins() {}

  /**
   * Metodo Executado depois do Registro de Plugins
   * @type {function():Promise<void>}
   * @return {Promise<void>}
   * @public
   */
  public async postRegisterPlugins() {}

  /**
   * Metodo de Executado antes do Registro de Rotas
   * @type {function():Promise<void>}
   * @return {Promise<void>}
   * @public
   */
  public async preRoutes() {}

  /**
   * Metodo de Registro de Rotas
   * @type {function():Promise<void>}
   * @return {Promise<void>}
   * @public
   */
  public async routes() {}

  /**
   * Metodo de Executado depois do Registro de Rotas
   * @type {function():Promise<void>}
   * @return {Promise<void>}
   * @public
   */
  public async postRoutes() {}

  /**
   * Metodo de Inicialização do serviço
   * @type {function(?boolean):Promise<void>}
   * @param {boolean} onlyInitialize - Quando verdadeiro serviço inicia sem porta, gerelamente usado para testes.
   * @return {Promise<void>}
   * @public
   */
  public async start(onlyInitialize = false) {
    await this.preRegisterPlugins();
    await this.registerPlugins();
    await this.postRegisterPlugins();
    await this.preRoutes();
    await this.routes();
    await this.postRoutes();
    if (onlyInitialize) {
      await this.server.initialize();
    } else {
      await this.server.start();
      console.log('MainApp running on %s', this.server.info.uri);
    }
  }
}

export default MainApp;
