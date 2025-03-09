import * as v from 'valibot';
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const router = t.router({
  myThing: t.procedure
    .input(
      v.parser(
        v.object({
          message: v.string()
        })
      )
    )
    .query(({ input: { message } }) => `Here is the message: ${message}`)
});
