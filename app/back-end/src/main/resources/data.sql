INSERT INTO
    images (fname)
VALUES
    ('ado_01.jpg'),
    ('ado_02.jpg'),
    ('jog_01.jpg'),
    ('konyveles_01.jpg'),
    ('konyveles_02.jpg');

INSERT INTO
    tags (caption)
VALUES
    ('Adózás'),
    ('Egyéni vállalkozó'),
    ('Gazdaság'),
    ('Hírek'),
    ('Járulék'),
    ('Szabályozás'),
    ('Tartozáskezelés'),
    ('Túlfizetési Lehetőségek'),
    ('Ügyintézés'),
    ('Vállalkozás'),
    ('Változás');

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