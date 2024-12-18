import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";

export const clients = pgTable("clients", {
  id: serial().primaryKey().notNull(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  middleName: varchar("middle_name"),
  email: varchar(),
  phone: varchar(),
  caseManager: integer("case_manager")
    .notNull()
    .references(() => workers.id),
  active: boolean().default(true).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
});

export const workers = pgTable("workers", {
  id: serial().primaryKey().notNull(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  middleName: varchar("middle_name"),
  role: varchar(),
  email: varchar().notNull().unique(),
  phone: varchar().notNull(),
  active: boolean().default(true).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
});

export const caseNotes = pgTable("case_notes", {
  id: serial().primaryKey().notNull(),
  subject: varchar().notNull(),
  other: varchar(),
  note: text(),
  clientId: integer("client_id")
    .notNull()
    .references(() => clients.id),
  authorId: integer("author_id")
    .notNull()
    .references(() => workers.id),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
});

// Create Relations

export const clientsRelations = relations(clients, ({ one, many }) => ({
  worker: one(workers, {
    fields: [clients.caseManager],
    references: [workers.id],
  }),
  caseNotes: many(caseNotes),
}));

export const workersRelations = relations(workers, ({ many }) => ({
  clients: many(clients),
  caseNotes: many(caseNotes),
}));

export const caseNotesRelations = relations(caseNotes, ({ one }) => ({
  client: one(clients, {
    fields: [caseNotes.clientId],
    references: [clients.id],
  }),
  worker: one(workers, {
    fields: [caseNotes.authorId],
    references: [workers.id],
  }),
}));
