import { z } from 'zod';
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const router = t.router({
  myThing: t.procedure
    .input(
      z.object({
        message: z.string().min(1)
      })
    )
    .query(({ input: { message } }) => `Here is the message: ${message}`)
});

export type AppRouter = typeof router;
