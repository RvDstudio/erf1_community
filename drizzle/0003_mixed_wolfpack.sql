ALTER TABLE "user" ALTER COLUMN "is_anonymous" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "first_name";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "last_name";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "phone";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "bio";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "role";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "location";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "country";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "city_state";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "postal_code";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "tax_id";