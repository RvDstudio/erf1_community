CREATE TABLE "product" (
	"id" text PRIMARY KEY NOT NULL,
	"image" text NOT NULL,
	"hover_image" text NOT NULL,
	"category" text NOT NULL,
	"title" text NOT NULL,
	"link" text NOT NULL,
	"weight" text NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"old_price" numeric(10, 2),
	"is_on_sale" boolean NOT NULL,
	"rating" integer NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
