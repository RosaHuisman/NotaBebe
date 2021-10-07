BEGIN;

INSERT INTO "user" ("first_name", "last_name", "address", "postcode", "city", "email", "password", "phone_number", "role_id") VALUES
('Parent', 'Rétarcesoir', '3 rue des Pommes', '48000', 'Trifouilly-les-Oies', 'parent@notabebe.io', '$2b$10$3LpDqhR5lMGHzIYOrLLgs.oUzT7m2iwOctl26yL2mrrCH57B6DVje', '0320831920', 1);

COMMIT;
