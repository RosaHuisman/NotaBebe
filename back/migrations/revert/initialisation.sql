-- Revert NotaBebe:initialisation from pg

BEGIN;


DROP TABLE "user_has_child" CASCADE;

DROP TABLE "user_has_recap" CASCADE;

DROP TABLE "meal" CASCADE;

DROP TABLE "nap" CASCADE;

DROP TABLE "comment" CASCADE;

DROP TABLE "recap" CASCADE;

DROP TABLE "child" CASCADE;

DROP TABLE "user" CASCADE;

DROP TABLE "role" CASCADE;

DROP DOMAIN code_postal_fr;

DROP DOMAIN phone_number;

DROP DOMAIN email;

DROP DOMAIN date_fr;

DROP DOMAIN sex;

COMMIT;
