import { sql } from 'drizzle-orm';
import { index, integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';
import { user } from './auth';

export const post = pgTable(
  'post',
  {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({ length: 256 }),
    createdById: varchar({ length: 255 })
      .notNull()
      .references(() => user.id),
    createdAt: timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  },
  (table) => [index('created_by_idx').on(table.createdById), index('name_idx').on(table.name)]
);
