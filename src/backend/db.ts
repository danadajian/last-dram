import { drizzle } from 'drizzle-orm/bun-sql';
import { SQL } from 'bun';
import { environmentVariables } from './env';

const client = new SQL(environmentVariables.POSTGRES_URL, { max: 100, idleTimeout: 20, maxLifetime: 60 * 30 });

export const db = drizzle({ client });
