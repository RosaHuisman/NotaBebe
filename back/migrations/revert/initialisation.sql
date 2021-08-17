-- Revert NotaBebe:initialisation from pg

BEGIN;


DROP TABLE "user_has_child";

DROP TABLE "user_has_recap";

DROP TABLE "meal";

DROP TABLE "nap";

DROP TABLE "comment";

DROP TABLE "recap";

DROP TABLE "child";

DROP TABLE "user";

DROP TABLE "role";

DROP DOMAIN code_postal_fr;

DROP DOMAIN phone_number;

DROP DOMAIN email;

DROP DOMAIN date_fr;

DROP DOMAIN sex;

COMMIT;
