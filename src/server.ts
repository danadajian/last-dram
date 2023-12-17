import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import * as path from 'path';
import * as trpcExpress from '@trpc/server/adapters/express';
import { router } from './router';

const app = express();

const oneMinute = 60 * 1000;
app.use(rateLimit({ windowMs: oneMinute, max: 1000 }));
app.use(cors());
app.use('/trpc', trpcExpress.createExpressMiddleware({ router }));

app.use(express.static(path.resolve(__dirname, '../web-build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../web-build', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
