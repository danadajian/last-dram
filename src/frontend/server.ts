import index from '../../dist/index.html';

const server = Bun.serve({
  routes: {
    '/': index,
    '/health': new Response('healthy')
  },
  port: 3000
});

console.log(`Server running at ${server.url}`);
