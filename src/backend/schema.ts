import { decimal, pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core';

export const bottles = pgTable('bottles', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 256 }).notNull(),
  type: varchar('type', { length: 256 }).notNull(),
  size: varchar('type', { length: 256 }).notNull(),
  proof: decimal().notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow()
});

export const userBottles = pgTable('userBottles', {
  id: uuid('id').primaryKey().defaultRandom(),
  bottleId: uuid('bottleId').notNull(),
  userId: varchar('userId', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow()
});
