import Redis, { Redis as RedisClient } from 'ioredis';
import { ICacheProvider } from './cache.provider.interfaces';

export default class RedisCacheProvider implements ICacheProvider {
  private redis: RedisClient;

  constructor() {
    this.redis = new Redis({
      port: (process.env.REDIS_PORT && Number(process.env.REDIS_PORT)) || undefined, // Redis port
      host: process.env.REDIS_HOST || undefined, // Redis host
      family: (process.env.REDIS_FAMILY && Number(process.env.REDIS_FAMILY)) || undefined, // 4 (IPv4) or 6 (IPv6)
      password: process.env.REDIS_PASSWORD || undefined,
      db: process.env.REDIS_NUMBER || undefined,
    } as any);
  }

  async recover(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  async save(key: string, value: string): Promise<void> {
    await this.redis.set(key, value, 'ex', 60 * 60);
  }
}
