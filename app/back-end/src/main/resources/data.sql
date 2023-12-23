INSERT INTO
    images (id, fname)
VALUES
    (1, 'ado_01.jpg'),
    (2, 'ado_02.jpg'),
    (3, 'jog_01.jpg'),
    (4, 'konyveles_01.jpg'),
    (5, 'konyveles_02.jpg');

INSERT INTO
    tags (id, caption)
VALUES
    (1, 'Adózás'),
    (2, 'Egyéni vállalkozó'),
    (3, 'Gazdaság'),
    (4, 'Hírek'),
    (5, 'Járulék'),
    (6, 'Szabályozás'),
    (7, 'Tartozáskezelés'),
    (8, 'Túlfizetési Lehetőségek'),
    (9, 'Ügyintézés'),
    (10, 'Vállalkozás'),
    (11, 'Változás');

INSERT INTO
    articles (title, lead, fname, date_of_upload, image_id)
VALUES
    (
        'Izgalmak az Adószámlák Körül: Kétmillió Magyar Várja Az Értesítést',
        'Mintegy kétmillió magyar izgulhat, mit tartalmaz az adóhivatal levele.',
        '001.md',
        CURRENT_DATE,
        1
    ),
    (
        'A Parlament Tárgyalja az Új Adócsomagot: Milyen Változások Várhatók az Egyéni Vállalkozók Számára?',
        'Már tárgyalja a parlament a Pénzügyminisztérium legújabb adócsomagját, amely számos fontos változást hoz az egyéni vállalkozók számára, például törvényileg már nem úgy kezelik őket, mintha cégek lennének. ',
        '002.md',
        CURRENT_DATE,
        2
    ),
    (
        'Egyéni Vállalkozók Száma Tovább Nő: Könnyűszerrel Váltogatható és Rugalmas Forma a Cégekkel Szemben',
        'Már több mint 608 ezerre nőtt az egyéni vállalkozók száma. Jelenleg 460 ezer katást tart nyilván az adóhivatal, ebből 426 ezer egyéni vállalkozó.',
        '003.md',
        CURRENT_DATE,
        3
    ),
    (
        'Adózási Egyszerűsítés: Átfogó Javaslat a Jövedelemadó- és Járulékszabályok Módosítására',
        'A Pénzügyminisztérium által – számos szakmai szervezet bevonásával – létrehozott, az adózás egyszerűsítését célzó munkacsoport a jövedelemadó- és járulékszabályok, köztük az egyéni vállalkozókra vonatkozó általános szabályok további egyszerűsítését tűzte ki célul.',
        '004.md',
        CURRENT_DATE,
        4
    ),
    (
        'Átalakul a Mellékállású Egyéni Vállalkozók Járulékfizetése: Törlésre Került a Kormányjavaslatból',
        'A mellékállású egyéni vállalkozók - köztük az átalányadózók - százalékos járulékterheit egy tételes, havi 13 ezer forintos járulékösszeggel váltanák ki, aminek kapcsán azonban számos téves értelmezés látott napvilágot.',
        '005.md',
        CURRENT_DATE,
        5
    );

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
    deadlines (id, name, date, information)
VALUES
    (
        1,
        'Általános forgalmi adó',
        '2023-12-01 12:00:00',
        'A Közösségen belüli értékesítéssel kapcsolatos szabályokba beépül az alanyi mentesség választásának lehetősége'
    ),
    (
        2,
        'Általános forgalmi adó',
        '2023-12-25 12:00:00',
        'Egyes műalkotásoknak az Európai Unión kívülről történő behozatalára 5 százalékos kedvezményes áfa-mértéket állapítottak meg'
    ),
    (
        3,
        'Általános forgalmi adó',
        '2023-12-27 12:00:00',
        '18 százalékos áfa-kulcs alá kerültek a desszert jellegű sajtkészítmények, köztük a túrórudi is'
    ),
    (
        4,
        'Általános forgalmi adó',
        '2023-12-30 12:00:00',
        'teszt4'
    );