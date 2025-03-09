import { createBunServeHandler } from 'trpc-bun-adapter';
import { router } from './router';

const server = Bun.serve({
  routes: {
    '/health': new Response('healthy')
  },
  ...createBunServeHandler({ router })
});

console.log(`Server running at ${server.url}`);
