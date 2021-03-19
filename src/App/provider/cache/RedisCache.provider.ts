import Redis, { Redis as RedisClient } from 'ioredis';
import EnvironmentConfig from '@src/Environment.config';
import { ICacheProvider } from './cache.provider.interfaces';

/**
 * Classe de configuração e comunicação com Redis
 * @class RedisCacheProvider
 */
export default class RedisCacheProvider implements ICacheProvider {
  private redis: RedisClient;

  constructor() {
    if (EnvironmentConfig.cache.active) {
      const { family, host, number, password, port } = EnvironmentConfig.cache.redis;
      this.redis = new Redis({
        port, // Redis port
        host, // Redis host
        family, // 4 (IPv4) or 6 (IPv6)
        password,
        db: number,
      } as any);
    }
  }

  /**
   * recupera dados do cache
   * @param key chave do dado
   */
  async recover(key: string): Promise<string | null> {
    if (!EnvironmentConfig.cache.active) {
      return null;
    }
    return this.redis.get(key);
  }

  /**
   * salva dados no cache
   * @param key chave do dado
   * @param value dado em texto
   */
  async save(key: string, value: string): Promise<void> {
    if (!EnvironmentConfig.cache.active) {
      return;
    }
    await this.redis.set(key, value, 'ex', 60 * 60);
  }
}
