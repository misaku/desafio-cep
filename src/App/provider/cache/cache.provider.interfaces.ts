/**
 * interface que representa classe de cache
 */
export interface ICacheProvider {
  /**
   * metodo de salvar no cache
   * @param key chave do dado
   * @param value valor em texto do dado
   */
  save(key: string, value: string): Promise<void>;

  /**
   * metodo de recuperar dados do cache
   * @param key chave do dado
   */
  recover(key: string): Promise<string | null>;
}
