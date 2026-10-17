const CITY_UI = {
  ru: {
    sectionTitle: "Города",
    sectionIntro: "Отдельные гиды по крупным студенческим городам: куда подавать документы, какие вузы, транспорт и медицина.",
    open: "Открыть гид",
    back: "← Все города",
    region: "Воеводство",
    office: "Ужонд для иностранцев",
    officeText: "Карта побыту подаётся онлайн через MOS, но вызовы на отпечатки пальцев, получение карты и вопросы — в этом ужонде.",
    officeLink: "Сайт ужонда",
    unis: "Популярные вузы",
    transport: "Транспорт",
    transportLink: "Сайт перевозчика",
    transportDiscount: "Студенты польских вузов ездят со скидкой — точные условия (возраст, процент, нужен ли проездной) смотри на сайте перевозчика.",
    health: "Медицина",
    healthText: "Договор о добровольной страховке NFZ подписывается в отделении NFZ этого воеводства.",
    healthLink: "Отделение NFZ",
    tips: "Полезно знать",
    others: "Другие города",
    general: "Общие шаги для всей Польши — на главной странице.",
    generalLink: "Перейти к чек-листу"
  },
  en: {
    sectionTitle: "Cities",
    sectionIntro: "Separate guides for the big student cities: where to file documents, universities, transport and healthcare.",
    open: "Open guide",
    back: "← All cities",
    region: "Voivodeship",
    office: "Foreigners' office",
    officeText: "The residence permit is filed online via MOS, but fingerprint appointments, card pickup and questions go to this office.",
    officeLink: "Office website",
    unis: "Popular universities",
    transport: "Transport",
    transportLink: "Operator website",
    transportDiscount: "Students of Polish universities ride at a discount — check exact terms (age, percentage, passes) on the operator's website.",
    health: "Healthcare",
    healthText: "The voluntary NFZ insurance contract is signed at the NFZ branch of this voivodeship.",
    healthLink: "NFZ branch",
    tips: "Good to know",
    others: "Other cities",
    general: "Steps that apply to all of Poland are on the main page.",
    generalLink: "Go to the checklist"
  }
};

const CITIES = [
  {
    slug: "warszawa",
    name: { ru: "Варшава", en: "Warsaw" },
    local: "Warszawa",
    region: { ru: "Мазовецкое", en: "Masovian" },
    about: {
      ru: "Столица и самый большой студенческий город: больше всего вузов, англоязычных программ, работы и стажировок. Жильё — самое дорогое в стране.",
      en: "The capital and the biggest student city: the most universities, English-taught programmes, jobs and internships. Housing is the most expensive in the country."
    },
    office: { name: "Mazowiecki Urząd Wojewódzki", url: "https://www.gov.pl/web/uw-mazowiecki" },
    nfz: "http://www.nfz-warszawa.pl/",
    transport: { name: "ZTM Warszawa", url: "https://www.wtp.waw.pl" },
    unis: ["Uniwersytet Warszawski", "Politechnika Warszawska", "SGH Szkoła Główna Handlowa", "Warszawski Uniwersytet Medyczny", "Akademia Leona Koźmińskiego", "Uniwersytet SWPS", "Vistula University", "Uczelnia Łazarskiego"],
    tips: {
      ru: [
        "Метро, трамваи, автобусы и городские электрички SKM работают по одному билету ZTM.",
        "Комнаты ищи заранее: в сентябре–октябре спрос максимальный.",
        "Городские услуги и мельдунек — в ужондах дзельниц, информацию удобно искать на warszawa19115.pl."
      ],
      en: [
        "Metro, trams, buses and SKM city trains all run on one ZTM ticket.",
        "Look for rooms early: demand peaks in September–October.",
        "City services and meldunek are handled by district offices; warszawa19115.pl is the city info portal."
      ]
    }
  },
  {
    slug: "krakow",
    name: { ru: "Краков", en: "Kraków" },
    local: "Kraków",
    region: { ru: "Малопольское", en: "Lesser Poland" },
    about: {
      ru: "Исторический и очень студенческий город с одним из старейших университетов Европы. Много IT-компаний и сервисных центров.",
      en: "A historic, very student-friendly city with one of Europe's oldest universities. Plenty of IT companies and service centres."
    },
    office: { name: "Małopolski Urząd Wojewódzki", url: "https://www.malopolska.uw.gov.pl" },
    nfz: "http://www.nfz-krakow.pl/",
    transport: { name: "MPK Kraków", url: "https://www.mpk.krakow.pl" },
    unis: ["Uniwersytet Jagielloński", "AGH Akademia Górniczo-Hutnicza", "Politechnika Krakowska", "Uniwersytet Ekonomiczny w Krakowie", "Uniwersytet Pedagogiczny"],
    tips: {
      ru: [
        "Центр компактный — многое можно пройти пешком или проехать на трамвае.",
        "Жильё у центра и рядом с кампусами дорожает к началу учебного года.",
        "Зимой бывает смог — проверяй качество воздуха в приложениях."
      ],
      en: [
        "The centre is compact — much is walkable or a short tram ride away.",
        "Housing near the centre and campuses gets pricier before the academic year.",
        "Winter smog happens — check air quality in apps."
      ]
    }
  },
  {
    slug: "wroclaw",
    name: { ru: "Вроцлав", en: "Wrocław" },
    local: "Wrocław",
    region: { ru: "Нижнесилезское", en: "Lower Silesian" },
    about: {
      ru: "Молодой город на реке Одре с сильной технической школой и большим IT-рынком. Удобно для тех, кто хочет совмещать учёбу и работу.",
      en: "A young city on the Oder river with a strong technical university and a big IT market. Good for combining study and work."
    },
    office: { name: "Dolnośląski Urząd Wojewódzki", url: "https://www.duw.pl" },
    nfz: "http://www.nfz-wroclaw.pl/",
    transport: { name: "MPK Wrocław", url: "https://www.mpk.wroc.pl" },
    unis: ["Uniwersytet Wrocławski", "Politechnika Wrocławska", "Uniwersytet Ekonomiczny we Wrocławiu", "Uniwersytet Medyczny we Wrocławiu", "Uniwersytet Przyrodniczy"],
    tips: {
      ru: [
        "У города есть программа поддержки иностранцев Wromigrant — ищи её на wroclaw.pl.",
        "Велосипед — удобный способ передвижения, город довольно ровный.",
        "Трамвайная сеть плотная, поэтому квартиру можно искать не только в центре."
      ],
      en: [
        "The city runs a support programme for foreigners, Wromigrant — find it on wroclaw.pl.",
        "Cycling is convenient; the city is fairly flat.",
        "The tram network is dense, so you can look for flats outside the centre too."
      ]
    }
  },
  {
    slug: "gdansk",
    name: { ru: "Гданьск (Труймясто)", en: "Gdańsk (Tricity)" },
    local: "Gdańsk",
    region: { ru: "Поморское", en: "Pomeranian" },
    about: {
      ru: "Труймясто — Гданьск, Сопот и Гдыня — у Балтийского моря. Сильные технические и морские вузы, море в 20 минутах.",
      en: "The Tricity — Gdańsk, Sopot and Gdynia — on the Baltic Sea. Strong technical and maritime universities, the beach 20 minutes away."
    },
    office: { name: "Pomorski Urząd Wojewódzki", url: "https://www.gov.pl/web/uw-pomorski" },
    nfz: "http://www.nfz-gdansk.pl/",
    transport: { name: "ZTM Gdańsk", url: "https://ztm.gda.pl" },
    unis: ["Uniwersytet Gdański", "Politechnika Gdańska", "Gdański Uniwersytet Medyczny", "Uniwersytet Morski w Gdyni"],
    tips: {
      ru: [
        "Три города соединены электричкой SKM — можно жить в одном, а учиться в другом.",
        "У Гданьска и Гдыни разные городские перевозчики — проверь, какие билеты подходят для твоего маршрута.",
        "Ветрено и сыро — хорошая куртка нужна уже с октября."
      ],
      en: [
        "The three cities are linked by the SKM train — you can live in one and study in another.",
        "Gdańsk and Gdynia have different city operators — check which tickets fit your route.",
        "Windy and damp — you'll need a good jacket from October."
      ]
    }
  },
  {
    slug: "poznan",
    name: { ru: "Познань", en: "Poznań" },
    local: "Poznań",
    region: { ru: "Великопольское", en: "Greater Poland" },
    about: {
      ru: "Компактный деловой город на полпути между Варшавой и Берлином. Много бизнес- и IT-работы, спокойный ритм.",
      en: "A compact business city halfway between Warsaw and Berlin. Lots of business and IT jobs, a calm pace."
    },
    office: { name: "Wielkopolski Urząd Wojewódzki", url: "https://migrant.poznan.uw.gov.pl" },
    nfz: "http://www.nfz-poznan.pl",
    transport: { name: "ZTM Poznań", url: "https://www.ztm.poznan.pl" },
    unis: ["Uniwersytet im. Adama Mickiewicza (UAM)", "Politechnika Poznańska", "Uniwersytet Ekonomiczny w Poznaniu", "Uniwersytet Medyczny w Poznaniu"],
    tips: {
      ru: [
        "У ужонда есть отдельный портал для иностранцев migrant.poznan.uw.gov.pl с инструкциями по шагам.",
        "Город небольшой — большинство кампусов в 20–30 минутах трамваем.",
        "Удобные поезда в Берлин — выгодно для поездок по Европе."
      ],
      en: [
        "The office runs a dedicated portal for foreigners, migrant.poznan.uw.gov.pl, with step-by-step guides.",
        "The city is small — most campuses are 20–30 minutes by tram.",
        "Easy trains to Berlin — handy for travelling around Europe."
      ]
    }
  },
  {
    slug: "lodz",
    name: { ru: "Лодзь", en: "Łódź" },
    local: "Łódź",
    region: { ru: "Лодзинское", en: "Łódź" },
    about: {
      ru: "Большой город в центре страны с более доступным жильём, чем в Варшаве. Известная киношкола и медицинский университет.",
      en: "A big city in the centre of the country with cheaper housing than Warsaw. Home to a famous film school and a medical university."
    },
    office: { name: "Łódzki Urząd Wojewódzki", url: "https://www.gov.pl/web/uw-lodzki" },
    nfz: "http://www.nfz-lodz.pl/",
    transport: { name: "MPK Łódź", url: "https://www.mpk.lodz.pl" },
    unis: ["Uniwersytet Łódzki", "Politechnika Łódzka", "Uniwersytet Medyczny w Łodzi", "Szkoła Filmowa w Łodzi"],
    tips: {
      ru: [
        "До Варшавы около полутора часов на поезде — можно ездить на стажировки.",
        "Много квартир в старых доходных домах: перед подписанием проверь отопление.",
        "Главная улица Пётрковская — центр студенческой жизни."
      ],
      en: [
        "Warsaw is about an hour and a half by train — handy for internships.",
        "Many flats are in old tenement houses: check the heating before signing.",
        "Piotrkowska Street is the hub of student life."
      ]
    }
  },
  {
    slug: "lublin",
    name: { ru: "Люблин", en: "Lublin" },
    local: "Lublin",
    region: { ru: "Люблинское", en: "Lublin" },
    about: {
      ru: "Один из самых доступных по цене студенческих городов на востоке Польши. Много студентов из Украины, Беларуси и Центральной Азии.",
      en: "One of the most affordable student cities, in eastern Poland. Many students from Ukraine, Belarus and Central Asia."
    },
    office: { name: "Lubelski Urząd Wojewódzki", url: "https://www.gov.pl/web/uw-lubelski" },
    nfz: "http://www.nfz-lublin.pl/",
    transport: { name: "ZTM Lublin", url: "https://ztm.lublin.eu" },
    unis: ["UMCS Uniwersytet Marii Curie-Skłodowskiej", "KUL Katolicki Uniwersytet Lubelski", "Uniwersytet Medyczny w Lublinie", "Politechnika Lubelska", "Uniwersytet Przyrodniczy w Lublinie"],
    tips: {
      ru: [
        "Русскоязычное и украиноязычное сообщество большое — легче найти помощь на первых порах.",
        "Аренда заметно дешевле, чем в Варшаве и Кракове.",
        "В городе ходят троллейбусы — билеты те же, что на автобус."
      ],
      en: [
        "There's a big Russian- and Ukrainian-speaking community — easier to get help at first.",
        "Rent is noticeably cheaper than in Warsaw or Kraków.",
        "The city has trolleybuses — same tickets as buses."
      ]
    }
  },
  {
    slug: "katowice",
    name: { ru: "Катовице", en: "Katowice" },
    local: "Katowice",
    region: { ru: "Силезское", en: "Silesian" },
    about: {
      ru: "Центр Силезской агломерации — больше десятка городов, сросшихся в один. Доступное жильё и много промышленной и IT-работы.",
      en: "The heart of the Silesian metropolis — over a dozen cities grown into one. Affordable housing and plenty of industrial and IT jobs."
    },
    office: { name: "Śląski Urząd Wojewódzki", url: "https://www.katowice.uw.gov.pl/usluga/cudzoziemcy" },
    nfz: "http://www.nfz-katowice.pl/",
    transport: { name: "Metropolia GZM", url: "https://www.metropoliagzm.pl" },
    unis: ["Uniwersytet Śląski", "Uniwersytet Ekonomiczny w Katowicach", "Śląski Uniwersytet Medyczny", "Politechnika Śląska (Gliwice)"],
    tips: {
      ru: [
        "Транспорт общий для всей агломерации — один билет на несколько городов.",
        "Политехника находится в Гливице — учти дорогу, если живёшь в Катовице.",
        "Аэропорт Катовице-Пыжовице удобен для дешёвых рейсов."
      ],
      en: [
        "Transport is shared across the metropolis — one ticket for several cities.",
        "The University of Technology is in Gliwice — factor in the commute if you live in Katowice.",
        "Katowice–Pyrzowice airport is handy for budget flights."
      ]
    }
  }
];
