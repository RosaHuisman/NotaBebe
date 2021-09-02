BEGIN;

INSERT INTO "user" ("first_name", "last_name", "address", "postcode", "city", "email", "password", "phone_number", "role_id") VALUES
('Parent', 'Rétarcesoir', '3 rue des Pommes', '48000', 'Trifouilly-les-Oies', 'parent@notabebe.io', '$2b$10$3LpDqhR5lMGHzIYOrLLgs.oUzT7m2iwOctl26yL2mrrCH57B6DVje', '0320831920', 1),
('Mickael', 'Menet', '616 place de la Madeleine', '59000', 'Lille', 'mickael@notabebe.io', '$2y$10$07OC1YsEevbc.1dBJpIIuO5jjY1erBxHeLk.VJBLYCDb8RUpdVsR.', '0459102934', 1),
('David', 'Basset', '616 place de la Madeleine', '44600', 'Saint-Nazaire', 'david@notabebe.io', '$2a$12$RWK6SKDOahab3hbqZajDXupOlDrIDqC37wWoi9r05HgZcY79ZRyy.', '0384810583', 1),
('Morgane', 'Benureau', '852 rue Bonnet', '44600', 'Saint-Nazaire', 'morgane@notabebe.io', '$2y$10$n6peUJPEzq6RTT1nY8DXLegCXTMrIs1rML2EPFxHKQoQ7cXdytZeq', '0691238561', 1),
('Toufik', 'Bezzaouya', '3675 avenue des hêtres', '31000', 'Toulouse', 'toufik@notabebe.io', '$2y$10$G.XIYM01yyKe3ghWc7jdb.GYweZ4X3QKjjr9BFXV5L9/I/XvW7ZNC', '0401947683', 1),
('Victor', 'Cao', '210 rue du rêve', '20000', 'Ajaccio', 'victor@notabebe.io', '$2y$10$AOgCkaQ566cii4Et//9sAujUpDxKJHKMywLGm.f3fkKYNOezcj62S', '0699887744' , 1),
('Laura', 'Huisman', '33 rue de ma soeur', '30350', 'Cardet', 'laura@notabebe.io', '$2y$10$gGev/YtiCeGTy.MpB9XuoOCIeFJMtMNlJQ0p00A3LuF7wVwJtnn5S', '0125697485', 1),
('Claire', 'Paillies', '55 rue bestfriend', '30110', 'Pradel', 'claire@notabebe.io', '$2y$10$CUy85HTi3XV/oWxuofUWnuhT5oaJxX1PYQiPc.Q36wyoJ8XVsZHzK', '0755662233', 1),
('Yann', 'Hirlemann', '274 rue Adolphe Wurtz', '80000', 'Amiens', 'yann@notabebe.io', '$2y$10$vVD4.kSFfXxWVFFP1fUX0ukDU6K3O0U3kEzdTCOn9nwjSn4dkAKt2', '0549332190', 2),
('Staff', 'Trodur', '99 avenue des coquelicots', '02000', 'Saint-Quentin', 'staff@notabebe.io', '$2b$10$NAl5uBV3mamCnTjXd5I7uuU0ZKVi8Y9lIyq0XlOm5VrQKiqU5/0k6', '0549332190', 2),
('Rosa', 'Huisman', '150 boulevard des prairies', '13000', 'Marseille', 'rosa@notabebe.io', '$2y$10$uSbWDxB4C5iCaeIG5vcaRuWZywm5A6IplmUkkl4FtuoPA8OCLFS8y', '0670102943', 2),
('Blandine', 'Jarysta', '58 rue du théâtre', '59000', 'Lille', 'blandine@notabebe.io' ,'$2y$10$dupdfBcMp8SHZ3pj0op6d.X2Kzo3QHs20AD3cR3xqo4yVaZKJJstu', '0621326554', 2),
('Nico', 'Charpin', '89 rue de la mer', '06800', 'Cagnes-sur-Mer', 'nico@notabebe.io', '$2y$10$rfbCilpsOyUOU0pqtmS.oez..h8Xr5QzkZVFRB6ZfxIRZ24Cd./oe', '0538592058', 3),
('Admin', 'Istrationfrançaise', '5 impasse des plantes vertes', '45000', 'Olivet', 'admin@notabebe.io', '$2b$10$9zEcQIenAFg8GkGnZJIuneRDjNuBe1JEKpz6ZsfBdRDMobx0JAT76', '0384910501', 3);



INSERT INTO "child" ("first_name", "last_name", "birthdate", "birthplace", "sex", "allergies") VALUES
('Dorpatte', 'Rétarcesoir', '05/03/2019', 'Trifouilly-les-Oies', 'M', 'cacahuètes'),
('Sasha', 'Menet', '19/12/2017', 'Lille', 'F', ''),
('Matisse', 'Menet', '16/08/2013', 'Lille', 'M', 'pollen'),
('Jeanne', 'Basset', '27/12/2018' , 'Lille', 'F', ''),
('Serge', 'Basset', '21/03/2020', 'Lille', 'M', 'poisson'),
('Olivier', 'Basset', '25/01/2020', 'Saint-Nazaire', 'M', 'PLV'),
('Thomas', 'Basset', '25/01/2020', 'Saint-Nazaire', 'M', ''),
('Lucas', 'Benureau', '05/04/2016', 'Saint-Herblain', 'M', 'iplv'),
('Lyana', 'Benureau', '27/12/2018', 'Saint-Herblain', 'F', 'iplv'),
('Leya', 'Bezzaouya', '01/02/2017', 'Aulnay', 'F', ''),
('Ali', 'Bezzaouya', '15/12/2018', 'Aulnay', 'M', ''),
('Mira', 'Cao', '01/06/2017', 'Pontarlier', 'F', ''),
('Milan', 'Tamerti', '08/01/2015', 'Alès', 'M', ''),
('Lily', 'Tamerti', '12/12/2017', 'Alès', 'F', ''),
('Nina', 'Lombardo', '26/07/2019', 'Alès', 'F', '');


INSERT INTO "recap" ("date", "extra_info", "mood", "child_id") VALUES
('18/04/2020', 'problème de couche', 'triste', 1),
('29/08/2020', 'coup de chaleur', 'énervé', 1),
('18/04/2020', 'belle participation aux activités', 'contente', 2),
('28/12/2020', 'coup de froid', 'fatiguée', 2),
('18/04/2020', 'a fait du foot', 'fatigué', 3),
('18/04/2020', 'pas sage', 'malade', 4),
('01/09/2021', 'atelier pâte à modeler', 'joyeux', 5),
('01/09/2021', 'atelier pâte à modeler', 'impatient', 6),
('01/09/2021', 'atelier pair-programming', 'curieux', 7),
('01/09/2021', 'atelier pair-programming', 'très heureux', 8),
('11/01/2021', 'atelier couleurs', 'joyeuse', 9),
('03/04/2021', 'atelier musique', 'passionnée', 9),
('15/08/2021', 'atelier gommettes', 'heureuse', 9),
('02/09/2021', 'peinture et transvasement', 'souriante', 9),
('02/09/2021', 'peinture et transvasement', 'fatiguée', 10),
('02/09/2021', 'peinture et transvasement', 'content', 11),
('02/09/2021', 'peinture et transvasement', 'impatiente', 12),
('02/09/2021', 'peinture et transvasement', 'fatigué', 13),
('02/09/2021', 'peinture et transvasement', 'passionnée', 14),
('02/09/2021', 'peinture et transvasement', 'curieuse', 15);


INSERT INTO "comment" ("message", "child_id") VALUES
('Bonjour, mon bébé a bien dormi mais n''a pas mangé ce matin', 1),
('Sasha a mal dormi', 2),
('Matisse semble énervé. Bonne journée', 3),
('RAS, bon dodo, bon petit dej', 4),
('belle nuit, mais n''a pas mangé de petit-déjeuner', 5),
('très bien dormi', 6),
('a été malade mais plus rien ce matin', 7),
('belle nuit, bon petit-déjeuner', 8),
('bien dormi, bien mangé, ras', 9),
('RAS', 10),
('nuit agitée', 11);



INSERT INTO "nap" ("start_time", "end_time", "comment", "recap_id") VALUES
('10:00:00', '11:00:00', 'n''a pas voulu dormir', 1),
('09:00:00', '11:00:00', 'bien dodo', 2),
('14:00:00', '16:00:00', 'dodo ', 2),
('10:00:00', '11:00:00', 'n''a pas voulu dormir', 4),
('09:00:00', '11:00:00', 'bien dodo', 5),
('14:00:00', '16:00:00', 'dodo ', 5),
('11:00:00', '11:05:00', 'ne veut pas dormir', 6),
('10:00:00', '11:00:00', 'n''a pas voulu dormir', 7),
('09:00:00', '11:00:00', 'bien dodo', 8),
('14:00:00', '16:00:00', 'dodo ', 8),
('10:00:00', '11:00:00', 'n''a pas voulu dormir', 10),
('09:00:00', '11:00:00', 'bien dodo', 11),
('14:00:00', '16:00:00', 'dodo ', 11),
('11:00:00', '11:05:00', 'ne veut pas dormir', 12),
('10:00:00', '11:00:00', 'n''a pas voulu dormir', 13),
('09:00:00', '11:00:00', 'bien dodo', 14),
('14:00:00', '16:00:00', 'dodo ', 14),
('11:00:00', '11:05:00', 'ne veut pas dormir', 15),
('10:00:00', '11:00:00', 'n''a pas voulu dormir', 16),
('09:00:00', '11:00:00', 'bien dodo', 17),
('14:00:00', '16:00:00', 'dodo ', 17),
('11:00:00', '11:05:00', 'ne veut pas dormir', 18),
('10:00:00', '11:00:00', 'n''a pas voulu dormir', 19),
('09:00:00', '11:00:00', 'bien dodo', 20),
('14:00:00', '16:00:00', 'dodo ', 20);


INSERT INTO "meal" ("time", "comment", "recap_id") VALUES
('12:00:00', 'bébé a bien mangé ses carottes mais pas son dessert', 1),
('16:00:00', 'bébé mangé une compote et un pitch', 1),
('12:30:00', 'n''a pas voulu manger de laitage', 2),
('15:30:00', 'a mangé avec appétit une compote de fruits', 2),
('13:00:00', 'a goûté à tout', 3),
('07:30:00', 'un biberon de 150ml', 4),
('09:30:00', 'un biberon de 130ml', 4),
('11:30:00', 'un biberon de 120ml', 4),
('12:00:00', 'bébé a bien mangé ses carottes mais pas son dessert', 5),
('16:00:00', 'bébé mangé une compote et un pitch', 5),
('12:30:00', 'n''a pas voulu manger de laitage', 6),
('15:30:00', 'a mangé avec appétit une compote de fruits', 6),
('07:30:00', 'un biberon de 150ml', 8),
('09:30:00', 'un biberon de 130ml', 8),
('11:30:00', 'un biberon de 120ml', 8),
('12:00:00', 'bébé a bien mangé ses carottes mais pas son dessert', 9),
('16:00:00', 'bébé mangé une compote et un pitch', 9),
('12:30:00', 'n''a pas voulu manger de laitage', 10),
('15:30:00', 'a mangé avec appétit une compote de fruits', 10),
('13:00:00', 'a goûté à tout', 11),
('07:30:00', 'un biberon de 150ml', 12),
('09:30:00', 'un biberon de 130ml', 12),
('11:30:00', 'un biberon de 120ml', 12),
('12:00:00', 'bébé a bien mangé ses carottes mais pas son dessert', 13),
('16:00:00', 'bébé mangé une compote et un pitch', 14),
('12:30:00', 'n''a pas voulu manger de laitage', 15),
('15:30:00', 'a mangé avec appétit une compote de fruits', 15),
('07:30:00', 'un biberon de 150ml', 17),
('09:30:00', 'un biberon de 130ml', 17),
('12:00:00', 'bébé a bien mangé ses carottes mais pas son dessert', 18),
('16:00:00', 'bébé mangé une compote et un pitch', 18),
('12:30:00', 'n''a pas voulu manger de laitage', 19),
('15:30:00', 'a mangé avec appétit une compote de fruits', 19),
('13:00:00', 'a goûté à tout', 20);


INSERT INTO "user_has_recap" ("user_id", "recap_id") VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(2, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(4, 10),
(4, 11),
(4, 12),
(4, 13),
(4, 14),
(5, 15),
(5, 16),
(6, 17),
(7, 18),
(7, 19),
(8, 20);

INSERT INTO "user_has_child" ("user_id", "child_id") VALUES
(1, 1),
(2, 2),
(2, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(4, 8),
(4, 9),
(5, 10),
(5, 11),
(6, 12),
(7, 13),
(7, 14),
(8, 15);


COMMIT;