import { decimal, pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core';

export const collections = pgTable('collections', {
  id: uuid('id').primaryKey().defaultRandom(),
  ownerFirstName: varchar('ownerFirstName', { length: 256 }).notNull(),
  ownerLastName: varchar('ownerLastName', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow()
});

export const bottles = pgTable('bottles', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 256 }).notNull(),
  type: varchar('type', { length: 256 }).notNull(),
  size: varchar('type', { length: 256 }).notNull(),
  proof: decimal().notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow()
});
