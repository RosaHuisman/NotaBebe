-- Deploy NotaBebe:view-recap-with-nap-and-meal to pg

BEGIN;

CREATE VIEW "recap_with_nap_and_meal" AS
	 SELECT DISTINCT 
		"recap"."id" AS "rwnam_recap_id",
		"recap"."date",
		"recap"."extra_info",
		"recap"."mood",
		"recap"."child_id",
		"nap"."id" AS "rwnam_nap_id",
		"nap"."start_time",
		"nap"."end_time",
		"nap"."comment" AS "rwnam_nap_comment",
		"meal"."id" AS "rwnam_meal_id",
		"meal"."time",
		"meal"."comment" AS "rwnam_meal_comment"
	   FROM "recap"
		 JOIN "nap" ON "recap"."id" = "nap"."recap_id"
		 JOIN "meal" ON "recap"."id" = "meal"."recap_id";

COMMIT;
