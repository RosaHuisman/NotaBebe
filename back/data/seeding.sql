BEGIN;

INSERT INTO "user" ("first_name", "last_name", "address", "postcode", "city", "email", "password", "phone_number", "role_id") VALUES
('Jeanne', 'Bonnette', '3 rue des Pommes', '48000', 'Trifouilly-les-Oies', 'jeannebonnette@gmail.com', 'ABC123!?!', '0320831920', 1),
('Gaspard', 'Fait', '616 place de la Madeleine', '59000', 'Lille', 'gaspardfait@hotmail.fr', 'g4sp4rd!', '0459102934', 1),
('Thierry', 'Chmonfils', '852 rue Bonnet', '44600', 'Saint-Nazaire', 'thierrychemonfils@caramail.fr', '10!Thierry', '0691238561', 1),
('Barbara', 'Dégout', '274 rue Adolphe Wurtz', '80000', 'Amiens', 'barbaradegout@gmail.com', 'JeSuisUnRat80', '0549332190', 2),
('Mauricette', 'Quatre', '150 boulevard des prairies', '13000', 'Marseille', 'mauricettequatre@laposte.net', 'mauricette', '0670102943', 2),
('Nico', 'Assez', '89 rue de la mer', '06800', 'Cagnes-sur-Mer', 'nicoassezadmin@gmail.com', 'athenaassez', '0538592058', 3);


INSERT INTO "child" ("first_name", "last_name", "birthdate", "birthplace", "sex", "allergies") VALUES
('Jeanne', 'Hazuki', '27/12/2018' , 'Nantes', 'F', 'non'),
('Serge', 'Takiki', '21/03/2011', 'Metz', 'M', 'poisson'),
('Olivier', 'Atton', '05/04/2016', 'Saint-Herblain', 'M', 'PLV'),
('Thomas', 'Price', '28/02/2013', 'Campagne-lès-Wardrecques', 'M', 'non');


INSERT INTO "recap" ("date", "extra_info", "mood", "child_id") VALUES
('18/04/2020', 'problème de couche', 'triste', 1),
('01/09/2019', 'belle participation aux activités', 'heureux', 2),
('25/01/2019', 'a fait du foot', 'triste', 3),
('25/01/2019', 'pas sage', 'heureux', 4);

INSERT INTO "comment" ("message", "child_id") VALUES
('Bonjour, mon bébé à bien dormi mais n''a pas mangé ce matin', 1),
('Serge a mal dormi', 2),
('Olivier semble énervé. Bonne journée', 3),
('RAS, bon dodo, bon petit dej', 4);


INSERT INTO "nap" ("start_time", "end_time", "comment", "recap_id") VALUES
('10:00:00', '11:00:00', 'n''a pas voulu dormir', 1),
('09:00:00', '11:00:00', 'bien dodo', 2),
('14:00:00', '16:00:00', 'dodo ', 2),
('11:00:00', '11:00:00', 'semble énervé, ne veut pas dormir', 3),
('12:00:00', '12:30:00', 'très bien dormi', 4);


INSERT INTO "meal" ("time", "comment", "recap_id") VALUES
('12:00:00', 'bébé a bien mangé ses carottes mais pas son dessert', 1),
('16:00:00', 'bébé mangé une compote et un pitch', 1),
('12:30:00', 'n''a pas voulu manger de laitage', 2),
('13:00:00', 'a goûté à tout', 3),
('07:30:00', 'un bib de 150ml', 4),
('09:30:00', 'un bib de 130ml', 4),
('11:30:00', 'un bib de 120ml', 4);


INSERT INTO "user_has_recap" ("user_id", "recap_id") VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(6, 1),
(6, 2),
(6, 3),
(6, 4);


INSERT INTO "user_has_child" ("user_id", "child_id") VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4);


COMMIT;