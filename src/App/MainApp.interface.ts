/**
 * JSON representation of an {@link MainApp}
 * @see MainApp
 */
export default interface MainAppInterface {
  /**
   * metodo usado para configurações que serão executadas antes de um registro de plugin
   * */
  preRegisterPlugins(): Promise<void>;

  /**
   * metodo usado para adicionar registro de plugin
   * */
  registerPlugins(): Promise<void>;

  /**
   * metodo usado para configurações que serão executadas depois de um registro de plugin
   * */
  postRegisterPlugins(): Promise<void>;

  /**
   * metodo usado para configurações que serão executadas antes dos registro de rotas
   * */
  preRoutes(): Promise<void>;

  /**
   *  metodo usado para registrar rotas
   * */
  routes(): Promise<void>;

  /**
   *  metodo usado para configurações que serão executadas depois dos registro de rotas
   * */
  postRoutes(): Promise<void>;

  /**
   * metodo usado para iniciar o serviço
   * */
  start(onlyInitialize?: boolean): Promise<void>;
}
