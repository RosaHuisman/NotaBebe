-- Revert NotaBebe:initialisation from pg

BEGIN;


DROP TABLE "user_has_child";

DROP TABLE "user_has_recap";

DROP TABLE "comment";

DROP TABLE "recap";

DROP TABLE "child";

DROP TABLE "role";

DROP TABLE "user";

DROP DOMAIN code_postal_fr;

DROP DOMAIN phone_number;

DROP DOMAIN email;

DROP DOMAIN birthdate;

COMMIT;
