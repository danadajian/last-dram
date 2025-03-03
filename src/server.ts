import { createBunServeHandler } from 'trpc-bun-adapter';
import { router } from './router';

const server = Bun.serve({
  ...createBunServeHandler({
    endpoint: '/trpc',
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
  }),
  port: 3000
});

console.log(`Server running at ${server.url}`);
