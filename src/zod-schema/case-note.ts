import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { caseNotes } from "@/db/schema";
import { z } from "zod";

export const insertCaseNoteSchema = createInsertSchema(caseNotes, {
  id: z.union([z.number(), z.literal("(New)")]),
  subject: (schema) => schema.min(1, "Note subject is required"),
  note: (schema) => schema.min(1, "Note body is required"),
  clientId: (schema) => schema.min(1, "Client Id is required"),
  authorId: (schema) => schema.min(1, "Note author is required"),
});

export const selectCaseNoteSchema = createSelectSchema(caseNotes);
export type insertCaseNoteSchemaType = typeof insertCaseNoteSchema._type;
export type selectCaseNoteSchemaType = typeof selectCaseNoteSchema._type;