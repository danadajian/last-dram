import { drizzle } from 'drizzle-orm/postgres-js';
import { postgres } from 'bun';
import { environmentVariables } from './env';

const client = postgres(environmentVariables.POSTGRES_URL, { max: 100, idleTimeout: 20, maxLifetime: 60 * 30 });

export const db = drizzle({ client });
