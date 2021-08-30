-- Deploy NotaBebe:view-recap-with-nap-and-meal to pg

BEGIN;

CREATE VIEW "recap_with_nap_and_meal" AS

     SELECT
        "recap"."child_id",
        "recap"."id",
        "recap"."date",
        "recap"."extra_info",
        "recap"."mood",
        jsonb_agg(to_jsonb("nap") - 'recap_id') AS "naps",
		    jsonb_agg(to_jsonb("meal") - 'recap_id') AS "meals"
       FROM "recap"
         LEFT JOIN "nap" ON "recap"."id" = "nap"."recap_id"
         LEFT JOIN "meal" ON "recap"."id" = "meal"."recap_id"

        GROUP BY "recap"."id";

COMMIT;
