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
    articles (fname, image_id)
VALUES
    ('001.md', 1),
    ('002.md', 2),
    ('003.md', 3),
    ('005.md', 4),
    ('004.md', 5);

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

INSERT INTO
    deadlines (id, name,date,information)
VALUES
    (1, 'Általános forgalmi adó','2024-01-01 12:00:00','A Közösségen belüli értékesítéssel kapcsolatos szabályokba beépül az alanyi mentesség választásának lehetősége'),
    (2, 'Általános forgalmi adó','2024-01-01 12:00:00','Egyes műalkotásoknak az Európai Unión kívülről történő behozatalára 5 százalékos kedvezményes áfa-mértéket állapítottak meg'),
    (3, 'Általános forgalmi adó','2024-01-01 12:00:00','18 százalékos áfa-kulcs alá kerültek a desszert jellegű sajtkészítmények, köztük a túrórudi is');
