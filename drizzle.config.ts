import { defineConfig } from 'drizzle-kit';

import { environmentVariables } from './src/backend/env';

export default defineConfig({
  schema: './src/backend/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: environmentVariables.POSTGRES_URL
  }
});
