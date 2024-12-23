import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { clients } from "@/db/schema";
import { z } from "zod";

export const insertClientSchema = createInsertSchema(clients, {
  firstName: (schema) => schema.min(1, "First Name is required"),
  lastName: (schema) => schema.min(1, "Last name is required"),
  email: (schema) => schema.email("Invalid email address"),
  phone: (schema) =>
    schema.regex(
      /^\d{3}-\d{3}-\d{4}$/,
      "Invalid phone number format. Use XXX-XXX-XXXX"
    ),
  caseManager: (schema) =>
    schema.min(1, "Client must be assigned a case manager"),
  status: z.enum(["Preliminary", "Pending", "Active", "Inactive"]),
});

export const selectClientSchema = createSelectSchema(clients);
export type insertClientSchemaType = typeof insertClientSchema._type;
export type selectClientSchemaType = typeof selectClientSchema._type;