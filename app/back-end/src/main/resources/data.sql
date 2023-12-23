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
        'Társasági adó',
        '2023-12-30 12:00:00',
        'kutatás-fejlesztési (K+F) adókedvezmény'
    ),
    (
        5,
        'Társasági adó',
        '2023-12-30 12:00:00',
        'Harmincmillió euróra emelkedett az energiahatékonysági célú adókedvezmény, ám szigorodnak a feltételek(20 százalékkal kell javuljon az energiahatékonyság).'
    ),
    (
        6,
        'Személyi jövedelemadó, szociális hozzájárulási adó, társadalombiztosítási járulék',
        '2023-12-30 12:00:00',
        'Az Amerikai Egyesült Államok felmondta a hazánkkal a kettős adóztatás elkerülése érdekében kötött egyezményt, ennek kedvezőtlen jogkövetkezményeit ellensúlyozza azzal, hogy az értékpapírból és kamatból származó jövedelmekre nem kell alkalmazni az egyéb jövedelemre vonatkozó előírásokat, ha a jövedelem juttatója OECD-tagállamban (így például az USA-ban) székhellyel rendelkező személy. A kifizetőt terhelő adó az eddigi havi helyett negyedéves bevallású lesz.'
    ),
    (
        7,
        'Személyi jövedelemadó, szociális hozzájárulási adó, társadalombiztosítási járulék',
        '2023-12-30 12:00:00',
        'Induló vállalkozások esetén nem minősül bevételnek, így adózni sem kell a munkavállaló, illetve a vezető tisztségviselő a vállalkozásban ingyenes vagy kedvezményes, tagsági jogot megtestesítő részesedése után, ha három évig megtartja azt.'
    ),
    (
        8,
        'Személyi jövedelemadó, szociális hozzájárulási adó, társadalombiztosítási járulék',
        '2023-12-30 12:00:00',
        'A magyar borkereskedelem fellendítésével indokolták, hogy adómentessé vált a reprezentációs és nem reprezentációs célú események keretében, illetve üzleti ajándékként vagy csekély értékű ajándékként nyújtott eredetvédett, palackozott borászati termék.'
    ),
    (
        9,
        'Személyi jövedelemadó, szociális hozzájárulási adó, társadalombiztosítási járulék',
        '2023-12-30 12:00:00',
        'Az előadói, művészeti és sporttevékenységekből származó jövedelem adóját a tevékenység végzésének helye szerinti államban kell megfizetni. Munkaerőpiacra lépők után igénybe vehető szociális hozzájárulási adókedvezmény szűkebb körben lesz érvényesíthető 2024-től: kizárólag már csak a magyar állampolgárok, illetve a Magyarországgal határos nem EGT-állam (így Szerbia és Ukrajna) polgárai után lehet igénybe venni. Adómentes lesz a számsorsolásos játékokon (mint például a lottó) elért nyeremény.'
    ),
    (
        10,
        'Személyi jövedelemadó, szociális hozzájárulási adó, társadalombiztosítási járulék',
        '2023-12-30 12:00:00',
        'A szociális hozzájárulási adó esetében legfeljebb a minimálbér kétszerese után lehet igénybe venni kedvezményt a doktori képzésben résztvevő foglalkoztatott esetén.'
    ),
    (
        100,
        'Személyi jövedelemadó (SZJA) bevallás',
        '2024-03-29 12:00:00',
        'Nem kell bevallani azt a bevételt, amelyet a jövedelem kiszámításánál nem kell figyelembe venni, kivéve a jövedelmet, amit az adóbevallásban, a munkáltatói adómegállapításban tájékoztató adatként szerepeltetni kell;amely ingó vagyontárgy átruházásából származik, és az éves összege nem haladja meg a 600 ezer forintot, vagy az abból megállapított összes jövedelem nem haladja meg a 200 ezer forintot;amely ingatlan átruházásából, a vagyoni értékű jog gyakorlásának átengedéséből, e jogról való lemondásból származik, ha abból jövedelem nem keletkezik;amely után a személyi jövedelemadó megfizetésére a kifizető kötelezett;amely kamatjövedelemnek minősül, és abból a kifizető az adót levonta;amely pénzbeli nyereménynek minősül és a kifizető levonta belőle az adót;amely nemzetközi szerződés vagy viszonosság alapján Magyarországon nem adóztatható;amelyet külön törvény rendelkezése szerint nem kell bevallani.'
    ),
    (
        101,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-01-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        102,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-02-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        103,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-03-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        104,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-04-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        105,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-05-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        106,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-06-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        107,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-07-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        108,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-08-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        109,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-09-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        110,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-10-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        111,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-11-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        112,
        'Kisadózó vállalkozások tételes adója (KATA) havi',
        '2024-12-10 12:00:00',
        'Ha a vállalkozás kisadózó vállalkozásként működik, a KATA befizetése a tárgyhónapot követő hónap 12. nap.'
    ),
    (
        201,
        'Havi Járulékok bevallása',
        '2024-01-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        202,
        'Havi Járulékok bevallása',
        '2024-02-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        203,
        'Havi Járulékok bevallása',
        '2024-03-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        204,
        'Havi Járulékok bevallása',
        '2024-04-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        205,
        'Havi Járulékok bevallása',
        '2024-05-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        206,
        'Havi Járulékok bevallása',
        '2024-06-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        207,
        'Havi Járulékok bevallása',
        '2024-07-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        208,
        'Havi Járulékok bevallása',
        '2024-08-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        209,
        'Havi Járulékok bevallása',
        '2024-09-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        210,
        'Havi Járulékok bevallása',
        '2024-10-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        211,
        'Havi Járulékok bevallása',
        '2024-11-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        212,
        'Havi Járulékok bevallása',
        '2024-12-10 12:00:00',
        'Eddig kell az egyes, a munkáltatót illetve vállalkozót terhelő járulékokat megfizetnie a NAV felé. Ide tartozik a nyugdíjjárulék, az SZJA, a szociális hozzájárulási adó, a szakképzési hozzájárulás, az egészségügyi hozzájárulás, valamint az egészségbiztosítási és munkaerőpiaci járulék is.'
    ),
    (
        300,
        'Éves Általános forgalmi adó (ÁFA)',
        '2024-02-23 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        301,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-01-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        302,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-02-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        303,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-03-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        304,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-04-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        305,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-05-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        306,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-06-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        307,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-07-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        308,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-08-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        309,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-09-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        310,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-10-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        311,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-11-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        312,
        'Havi Általános forgalmi adó (ÁFA)',
        '2024-12-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        321,
        'Negyedéves Általános forgalmi adó (ÁFA)',
        '2024-03-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        322,
        'Negyedéves Általános forgalmi adó (ÁFA)',
        '2024-06-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        323,
        'Negyedéves Általános forgalmi adó (ÁFA)',
        '2024-09-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        324,
        'Negyedéves Általános forgalmi adó (ÁFA)',
        '2024-12-18 12:00:00',
        'Az ÁFA bevallásának gyakoriságát a tárgyévet megelőző adatok alapján lehet megállapítani. Az ÁFA bevallása történhet havi szinten, negyedévente, valamint évente, ez kezdő vállalkozásoknál mindig havi. A későbbiekben pedig a megelőző 2. évi áfa forgalomtól függ.'
    ),
    (
        400,
        'Helyi iparűzési adó (HIPA)',
        '2024-05-29 12:00:00',
        'A helyi iparűzési adó mértékét az önkormányzatok határozzák meg, megfizetésének határideje azonban központilag szabályozott. A helyi iparűzési adót a tárgyévet követő május 31-ig kell bevallani. Előleg utalása is szükséges, amit pedig szeptember 15-ig és március 15-ig utalhat el az adózó.'
    ),
    (
        500,
        'Társasági adó (TAO)',
        '2024-05-28 12:00:00',
        'A társasági adó megfizetése a helyi iparűzési adó megfizetésével azonos időben történik, tehát május 31-ig kell adóbevallást készíteni és az adókülönbözetet megfizetni. Adóelőleg utalása is szükséges, amit havonta vagy negyedévente lehet rendezni, mindig a tárgyidőszakot követő hónap 20. napjáig. Hogy milyen gyakran kell előleget fizetnie a vállalkozásnak az előző évi társasági adótól függ. Amennyiben az előző évi társasági adó meghaladta az 5 millió forintot, havi gyakoriság szükséges, ha nem haladta meg az 5 millió forintot, akkor elegendő a negyedéves gyakoriság is.'
    );