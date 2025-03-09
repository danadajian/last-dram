import index from '../../dist/index.html';

const server = Bun.serve({
  routes: {
    '/*': index,
    '/health': new Response('healthy')
  },
  port: 'PORT' in process.env ? Number(process.env.PORT) : 3000
});

console.log(`Server running at ${server.url}`);
