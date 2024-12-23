CREATE TYPE "public"."status" AS ENUM('Preliminary', 'Pending', 'Active', 'Inactive');--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "active" "status" DEFAULT 'Preliminary';