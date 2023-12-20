INSERT INTO
    images (id,fname)
VALUES
    (1,'ado_01.jpg'),
    (2,'ado_02.jpg'),
    (3,'jog_01.jpg'),
    (4,'konyveles_01.jpg'),
    (5,'konyveles_02.jpg');

INSERT INTO
    tags (id,caption)
VALUES
    (1,'Adózás'),
    (2,'Egyéni vállalkozó'),
    (3,'Gazdaság'),
    (4,'Hírek'),
    (5,'Járulék'),
    (6,'Szabályozás'),
    (7,'Tartozáskezelés'),
    (8,'Túlfizetési Lehetőségek'),
    (9,'Ügyintézés'),
    (10,'Vállalkozás'),
    (11,'Változás');

INSERT INTO
    articles (title, fname, date_of_upload, image_id)
VALUES
    ('Izgalmak az Adószámlák Körül: Kétmillió Magyar Várja Az Értesítést','001.md', CURRENT_DATE, 1),
    ('A Parlament Tárgyalja az Új Adócsomagot: Milyen Változások Várhatók az Egyéni Vállalkozók Számára?','002.md', CURRENT_DATE, 2),
    ('Egyéni Vállalkozók Száma Tovább Nő: Könnyűszerrel Váltogatható és Rugalmas Forma a Cégekkel Szemben', '003.md', CURRENT_DATE, 3),
    ('Adózási Egyszerűsítés: Átfogó Javaslat a Jövedelemadó- és Járulékszabályok Módosítására', '005.md', CURRENT_DATE, 4),
    ('Átalakul a Mellékállású Egyéni Vállalkozók Járulékfizetése: Törlésre Került a Kormányjavaslatból', '004.md', CURRENT_DATE, 5);

INSERT INTO
    tag_rel (article_id, tag_id)
VALUES
    (1, 1),
    (1, 4),
    (1, 6),
    (2, 11),
    (2, 2),
    (2, 2),
    (3, 9),
    (3, 3),
    (3, 6),
    (4, 5),
    (4, 6),
    (4, 2),
    (5, 7),
    (5, 8),
    (5, 10);