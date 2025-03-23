import * as v from 'valibot';
import { initTRPC } from '@trpc/server';
import { db } from './db';
import { eq } from 'drizzle-orm';
import { bottles, userBottles } from './schema';

const t = initTRPC.create();

export const router = t.router({
  getCollection: t.procedure.input(v.parser(v.object({ userId: v.string() }))).query(({ input: { userId } }) => getCollection(userId))
});

async function getCollection(userId: string) {
  return db
    .select({
      name: bottles.name,
      type: bottles.type,
      size: bottles.size,
      proof: bottles.proof,
      collectedAt: userBottles.createdAt
    })
    .from(userBottles)
    .innerJoin(bottles, eq(bottles.id, userBottles.bottleId))
    .where(eq(userBottles.userId, userId));
}
