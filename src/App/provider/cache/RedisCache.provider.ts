import Redis, { Redis as RedisClient } from 'ioredis';
import { ICacheProvider } from './cache.provider.interfaces';

export default class RedisCacheProvider implements ICacheProvider {
  private redis: RedisClient;

  constructor() {
    this.redis = new Redis({
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      family: 4, // 4 (IPv4) or 6 (IPv6)
      password: undefined,
      db: undefined,
    });
  }

  async invalidate(key: string): Promise<void> {
    await this.redis.del(key);
  }

  async recover(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  async save(key: string, value: string): Promise<void> {
    await this.redis.set(key, value, 'ex', 60 * 60);
  }
}
