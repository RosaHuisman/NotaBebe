-- Deploy NotaBebe:initialisation to pg

BEGIN;

CREATE DOMAIN birthdate AS text
CHECK (VALUE ~ '^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$');
-- on pense que c'est ok, à voir si on a bien les flags i et g

CREATE DOMAIN email AS text
CHECK (VALUE ~ '^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$');
-- à vérifier...

CREATE DOMAIN phone_number AS text
CHECK (VALUE ~ '^((\+)33|0)[1-9](\d{2}){4}$');

CREATE DOMAIN code_postal_fr AS text
CHECK (
    -- expression régulère couvrant l'ensemble de code postaux de France métropolitaine et des DOM TOM
    VALUE ~ '^0[1-9]\d{3}$' -- CP France métropolitaine de 01 à 09
    OR VALUE ~ '^[1-8]\d{4}$' -- CP France métropolitaine de 10 à 89
    OR VALUE ~ '^9[0-5]\d{3}$' -- CP France métropolitaine de 90 à 95
    OR VALUE ~ '^97[1-68]\d{2}$' -- CP des DOM
    OR VALUE ~ '^98[4678]\d{2}$' -- CP des TOM
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" text NOT NULL,
    "last_name" text NOT NULL,
    "address" text NOT NULL,
    "postcode" code_postal_fr NOT NULL,
    "city" text NOT NULL,
    "email" email NOT NULL,
    "password" text NOT NULL,
    "phone_number" phone_number NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE "child" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" text NOT NULL,
    "last_name" text NOT NULL,
    "birthdate" birthdate NOT NULL,
    "birthplace" text NOT NULL,
    "sex" text NOT NULL,
    "allergies" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "recap" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "date" TIMESTAMPTZ NOT NULL,
    "meal_info" text NOT NULL,
    "nap_time" text NOT NULL,
    "extra_info" text NOT NULL,
    "mood" text NOT NULL,
    "child_id" int NOT NULL REFERENCES "child" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "comment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "message" text NOT NULL,
    "mood" text NOT NULL,
    "child_id" int NOT NULL REFERENCES "child" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user_has_recap" (
    "recap_id" INT NOT NULL REFERENCES "recap"("id"),
    "user_id" INT NOT NULL REFERENCES "user"("id")
);

CREATE TABLE "user_has_child" (
    "child_id" INT NOT NULL REFERENCES "child"("id"),
    "user_id" INT NOT NULL REFERENCES "user"("id")
);

COMMIT;