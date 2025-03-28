import { createBunServeHandler } from 'trpc-bun-adapter';
import { router } from './router';
import { environmentVariables } from './env';

const server = Bun.serve({
  routes: {
    '/health': new Response('healthy')
  },
  port: environmentVariables.PORT || 3000,
  ...createBunServeHandler({
    router,
    responseMeta() {
      return {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      };
    }
  })
});

console.log(`Server running at ${server.url}`);
