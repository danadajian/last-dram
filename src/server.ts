import { createBunServeHandler } from 'trpc-bun-adapter';
import { router } from './router';
import index from '../dist/index.html';

const server = Bun.serve({
  routes: {
    '/': index
  },
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
  })
});

console.log(`Server running at ${server.url}`);
