const CONTENT = {
  ru: {
    nav: { docs: "Документы", life: "Быт", health: "Здоровье", cities: "Города", checklist: "Чек-лист", sos: "SOS" },
    hero: {
      badge: "Для студентов, которые только приехали",
      title: "Первые недели в Польше без паники",
      lead: "Документы, жильё, банк, страховка и врачи — что делать и в каком порядке. Коротко, по шагам, с ссылками на официальные сайты.",
      cta: "Открыть чек-лист",
      cta2: "Начать с документов",
      progress: (done, total) => `Твой прогресс: ${done} из ${total} шагов`
    },
    sections: [
      {
        id: "docs",
        num: "01",
        title: "Документы и легальное пребывание",
        intro: "Самое важное в первые недели — не пропустить срок легального пребывания. Всё остальное можно сделать чуть позже.",
        cards: [
          {
            tag: "Самое срочное",
            title: "Карта побыту (ВНЖ на учёбу)",
            points: [
              "Если остаёшься дольше срока визы — подаёшь заявление на временное пребывание (zezwolenie na pobyt czasowy) для учёбы.",
              "С 27 апреля 2026 заявление подаётся только электронно через портал MOS, вход через login.gov.pl.",
              "Подать нужно не позже последнего дня легального пребывания (последний день визы или безвиза).",
              "Университет заполняет приложение № 5 прямо в MOS — заранее напиши в международный отдел.",
              "Заявление подписываешь Профилем Заубаным или квалифицированной электронной подписью.",
              "Пока идёт дело, пребывание легально, если заявление подано вовремя и без формальных ошибок."
            ],
            link: { label: "Портал MOS", url: "https://mos.cudzoziemcy.gov.pl" }
          },
          {
            tag: "Адрес",
            title: "Мельдунек (регистрация адреса)",
            points: [
              "Граждане не из ЕС, которые живут в Польше дольше 30 дней, регистрируются не позже 4-го дня после приезда; граждане ЕС — до 30-го дня.",
              "Это делают в urząd gminy / urząd dzielnicy по адресу проживания или онлайн на gov.pl через Profil Zaufany.",
              "Нужны паспорт, виза и договор аренды или подтверждение места в общежитии.",
              "Сама регистрация бесплатная; справка о временной регистрации стоит 17 zł.",
              "После мельдунка PESEL обычно присваивают автоматически."
            ],
            link: { label: "Мельдунек на gov.pl", url: "https://www.gov.pl/web/gov/zamelduj-sie-na-pobyt-staly-dla-cudzoziemcow" }
          },
          {
            tag: "Номер",
            title: "PESEL",
            points: [
              "Персональный номер: нужен в банке, у врача, для работы и для mObywatel.",
              "Выдаётся бесплатно.",
              "Без мельдунка можно подать отдельное заявление в urząd gminy, если есть основание (например, работа).",
              "С 2026 года многим иностранцам нужно прийти в urząd лично."
            ],
            link: { label: "gov.pl", url: "https://www.gov.pl" }
          },
          {
            tag: "Удобство",
            title: "Профиль Заубаный и mObywatel",
            points: [
              "Профиль Заубаный (Profil Zaufany) — электронная подпись для госуслуг, нужен для MOS.",
              "mObywatel — госприложение, в нём можно хранить mLegitymację (электронный студенческий).",
              "Для обоих обычно нужен PESEL."
            ],
            link: { label: "mObywatel", url: "https://www.gov.pl/web/mobywatel" }
          },
          {
            tag: "Скидки",
            title: "Студенческий билет (legitymacja)",
            points: [
              "51% скидки на поезда (PKP) и междугородние автобусы до 26 лет.",
              "Подходит пластиковая legitymacja с актуальной голограммой или mLegitymacja в mObywatel.",
              "Справка из университета вместо легитимации для скидки не подходит.",
              "Скидки на городской транспорт зависят от города — проверь сайт местного перевозчика."
            ],
            link: { label: "PKP Intercity", url: "https://www.intercity.pl" }
          }
        ],
        note: "Два дедлайна: мельдунек в первые дни и подача в MOS до конца визы. Поставь напоминание за месяц до конца визы."
      },
      {
        id: "life",
        num: "02",
        title: "Быт: жильё, связь, деньги, транспорт",
        intro: "Базовые вещи, которые стоит закрыть в первую неделю.",
        cards: [
          {
            tag: "Жильё",
            title: "Аренда и общежитие",
            points: [
              "Сначала спроси про akademik (общежитие) в своём университете — обычно это самый дешёвый вариант.",
              "Квартиры и комнаты ищут на OLX, Otodom и в студенческих группах.",
              "Всегда подписывай письменный договор (umowa najmu) — он нужен для мельдунка и ВНЖ.",
              "Не переводи залог (kaucja) до просмотра жилья и подписания договора — частая схема мошенников.",
              "Уточни, входят ли в цену коммунальные (media) и интернет."
            ]
          },
          {
            tag: "Связь",
            title: "SIM-карта",
            points: [
              "Основные операторы: Play, Orange, T-Mobile, Plus; есть и дешёвые MVNO.",
              "Даже prepaid-карту нужно зарегистрировать на паспорт — в салоне это делают за пару минут.",
              "Польский номер нужен для банка, BLIK и большинства сервисов."
            ]
          },
          {
            tag: "Деньги",
            title: "Банковский счёт",
            points: [
              "Многие банки открывают счёт иностранцам по паспорту, некоторые просят PESEL или ВНЖ.",
              "Студенческие счета обычно бесплатные — сравни условия на сайтах банков.",
              "BLIK — главный способ платить в Польше: в магазинах, онлайн и переводы по номеру телефона.",
              "Для оплаты учёбы и аренды удобнее польский счёт в злотых (PLN)."
            ]
          },
          {
            tag: "Транспорт",
            title: "Город и поездки",
            points: [
              "Jakdojade — маршруты и билеты на городской транспорт во многих городах.",
              "Поезда покупай в приложении PKP Intercity или Koleo, не забудь выбрать студенческую скидку.",
              "Билет нужно валидировать (skasować) сразу при входе, если он бумажный.",
              "Контролёры штрафуют за поездку без билета или без документа на скидку."
            ],
            link: { label: "Koleo", url: "https://koleo.pl" }
          }
        ]
      },
      {
        id: "health",
        num: "03",
        title: "Здоровье и страховка",
        intro: "Страховка обязательна всё время, пока ты в Польше. Вот как получить доступ к государственной медицине.",
        cards: [
          {
            tag: "Не из ЕС",
            title: "Добровольная страховка NFZ",
            points: [
              "Студенты не из ЕС/ЕАСТ могут заключить договор с NFZ о добровольной страховке.",
              "Взнос для таких студентов — 55,80 zł в месяц, без дополнительной вступительной платы.",
              "Документы: заявление в 2 экземплярах, копии паспорта и визы или карты побыту, справка о статусе студента (действует 30 дней), подтверждение проживания.",
              "После подписания договора — подаёшь в ZUS форму ZUS ZZA и потом каждый месяц платишь взнос на счёт ZUS до 20 числа следующего месяца.",
              "Договор подписывается в отделении NFZ своего воеводства."
            ],
            link: { label: "NFZ: добровольная страховка", url: "https://www.nfz.gov.pl/dla-pacjenta/ubezpieczenia-w-nfz/jak-sie-ubezpieczyc-dobrowolnie/" }
          },
          {
            tag: "Из ЕС",
            title: "Карта EHIC (EKUZ)",
            points: [
              "Студенты из ЕС/ЕАСТ с европейской картой EHIC лечатся бесплатно по ней.",
              "Оформи карту дома до приезда.",
              "Если национальной страховки нет — нужна частная страховка."
            ]
          },
          {
            tag: "Карта Поляка",
            title: "Страховка через университет",
            points: [
              "Студентов с Картой Поляка университет может застраховать бесплатно.",
              "Обратись в деканат или международный отдел."
            ]
          },
          {
            tag: "Врачи",
            title: "Как попасть к врачу",
            points: [
              "Выбери семейного врача (lekarz POZ) в поликлинике рядом с домом и подпиши декларацию.",
              "Проверить, что ты застрахован, можно в Internetowe Konto Pacjenta (IKP) или приложении mojeIKP.",
              "Ночью, в выходные и праздники работает nocna i świąteczna opieka zdrowotna.",
              "Рецепты электронные: в аптеке достаточно кода из SMS и PESEL.",
              "Частные сети клиник быстрее, но платные — проверь, нет ли пакета от университета или работы."
            ],
            link: { label: "pacjent.gov.pl", url: "https://pacjent.gov.pl" }
          }
        ]
      }
    ],
    checklist: {
      title: "Чек-лист первых недель",
      intro: "Отмечай шаги — прогресс сохраняется в браузере.",
      reset: "Сбросить прогресс",
      label: (done, total) => `${done} / ${total}`,
      groups: [
        {
          title: "До приезда",
          items: {
            "pre-visa": "Проверить срок визы и поставить напоминание",
            "pre-docs": "Сделать копии паспорта, визы и зачисления",
            "pre-ehic": "Оформить EHIC или страховку на первые недели",
            "pre-money": "Взять карту для оплаты в первые дни"
          }
        },
        {
          title: "Неделя 1",
          items: {
            "w1-sim": "Купить и зарегистрировать польскую SIM",
            "w1-uni": "Прийти в международный отдел университета",
            "w1-housing": "Подписать договор аренды или заселиться в akademik",
            "w1-meldunek": "Сделать мельдунек (до 4-го дня, если не из ЕС)"
          }
        },
        {
          title: "Недели 2–3",
          items: {
            "w2-transport": "Установить Jakdojade и купить проездной",
            "w2-pesel": "Получить PESEL",
            "w2-bank": "Открыть банковский счёт и подключить BLIK",
            "w2-legit": "Получить legitymację или mLegitymację"
          }
        },
        {
          title: "Первый месяц",
          items: {
            "m1-nfz": "Заключить договор с NFZ и подать ZUS ZZA",
            "m1-pz": "Настроить Profil Zaufany и mObywatel",
            "m1-mos": "Подать заявление на карту побыту в MOS",
            "m1-poz": "Выбрать семейного врача"
          }
        }
      ]
    },
    sos: {
      title: "Экстренные номера",
      intro: "Сохрани в телефон прямо сейчас.",
      items: [
        { num: "112", label: "Единый номер экстренных служб" },
        { num: "999", label: "Скорая помощь" },
        { num: "997", label: "Полиция" },
        { num: "998", label: "Пожарная служба" },
        { num: "800 190 590", label: "Горячая линия NFZ, 24/7" }
      ]
    },
    footer: {
      note: "Сайт сделан студентами для студентов и не является официальным источником. Правила меняются — перед подачей документов всегда проверяй информацию на gov.pl и у своего университета.",
      updated: "Информация актуальна на октябрь 2026."
    }
  },

  en: {
    nav: { docs: "Documents", life: "Daily life", health: "Health", cities: "Cities", checklist: "Checklist", sos: "SOS" },
    hero: {
      badge: "For students who just arrived",
      title: "Your first weeks in Poland, without the panic",
      lead: "Documents, housing, bank, insurance and doctors — what to do and in what order. Short, step by step, with links to official websites.",
      cta: "Open the checklist",
      cta2: "Start with documents",
      progress: (done, total) => `Your progress: ${done} of ${total} steps`
    },
    sections: [
      {
        id: "docs",
        num: "01",
        title: "Documents and legal stay",
        intro: "The most important thing in your first weeks is not to miss the end of your legal stay. Everything else can wait a little.",
        cards: [
          {
            tag: "Most urgent",
            title: "Residence card for studies",
            points: [
              "If you stay longer than your visa allows, apply for a temporary residence permit (zezwolenie na pobyt czasowy) for studies.",
              "Since 27 April 2026 the application is filed only online via the MOS portal, logging in through login.gov.pl.",
              "File it no later than the last day of your legal stay (the last day of your visa or visa-free stay).",
              "Your university fills in Attachment No. 5 directly in MOS — contact the international office early.",
              "You sign the application with a Trusted Profile or a qualified electronic signature.",
              "While the case is pending your stay is legal, as long as you filed on time and without formal errors."
            ],
            link: { label: "MOS portal", url: "https://mos.cudzoziemcy.gov.pl" }
          },
          {
            tag: "Address",
            title: "Meldunek (address registration)",
            points: [
              "Non-EU citizens staying more than 30 days must register by the 4th day after arrival; EU citizens by the 30th day.",
              "Do it at the urząd gminy / urząd dzielnicy for your address, or online on gov.pl with a Trusted Profile.",
              "You need your passport, visa and a rental agreement or dorm confirmation.",
              "Registration itself is free; the temporary registration certificate costs 17 zł.",
              "After meldunek you usually get a PESEL automatically."
            ],
            link: { label: "Meldunek on gov.pl", url: "https://www.gov.pl/web/gov/zamelduj-sie-na-pobyt-staly-dla-cudzoziemcow" }
          },
          {
            tag: "Number",
            title: "PESEL",
            points: [
              "Your personal ID number: needed at the bank, the doctor, for work and for mObywatel.",
              "It is free of charge.",
              "Without meldunek you can file a separate application at the urząd gminy if you have a reason (e.g. work).",
              "Since 2026 many foreigners must appear at the office in person."
            ],
            link: { label: "gov.pl", url: "https://www.gov.pl" }
          },
          {
            tag: "Convenience",
            title: "Trusted Profile and mObywatel",
            points: [
              "Profil Zaufany (Trusted Profile) is your e-signature for public services and is needed for MOS.",
              "mObywatel is the official government app; it can hold your mLegitymacja (digital student ID).",
              "Both usually require a PESEL."
            ],
            link: { label: "mObywatel", url: "https://www.gov.pl/web/mobywatel" }
          },
          {
            tag: "Discounts",
            title: "Student ID (legitymacja)",
            points: [
              "51% off trains (PKP) and long-distance buses until you turn 26.",
              "Use your plastic legitymacja with a current hologram or the mLegitymacja in mObywatel.",
              "A certificate from the university does not replace the student ID for discounts.",
              "City transport discounts depend on the city — check your local operator's website."
            ],
            link: { label: "PKP Intercity", url: "https://www.intercity.pl" }
          }
        ],
        note: "Two deadlines: meldunek in your first days and the MOS application before your visa ends. Set a reminder a month before the visa end date."
      },
      {
        id: "life",
        num: "02",
        title: "Daily life: housing, phone, money, transport",
        intro: "The basics worth sorting out in your first week.",
        cards: [
          {
            tag: "Housing",
            title: "Renting and dorms",
            points: [
              "First ask your university about an akademik (dorm) — usually the cheapest option.",
              "Flats and rooms are listed on OLX, Otodom and in student groups.",
              "Always sign a written contract (umowa najmu) — you need it for meldunek and the residence permit.",
              "Never send a deposit (kaucja) before viewing the place and signing — a common scam.",
              "Check whether utilities (media) and internet are included in the price."
            ]
          },
          {
            tag: "Phone",
            title: "SIM card",
            points: [
              "Main operators: Play, Orange, T-Mobile, Plus; there are cheaper MVNOs too.",
              "Even a prepaid SIM must be registered with your passport — shops do it in minutes.",
              "A Polish number is needed for the bank, BLIK and most services."
            ]
          },
          {
            tag: "Money",
            title: "Bank account",
            points: [
              "Many banks open accounts for foreigners with a passport; some ask for a PESEL or residence card.",
              "Student accounts are usually free — compare offers on the banks' websites.",
              "BLIK is the main way to pay in Poland: in shops, online and phone-number transfers.",
              "A Polish account in złoty (PLN) makes paying tuition and rent easier."
            ]
          },
          {
            tag: "Transport",
            title: "City and travel",
            points: [
              "Jakdojade shows routes and sells city transport tickets in many cities.",
              "Buy train tickets in the PKP Intercity or Koleo app and pick the student discount.",
              "Validate (skasować) a paper ticket right after boarding.",
              "Inspectors fine you for riding without a ticket or without proof of your discount."
            ],
            link: { label: "Koleo", url: "https://koleo.pl" }
          }
        ]
      },
      {
        id: "health",
        num: "03",
        title: "Health and insurance",
        intro: "Insurance is mandatory for your whole stay in Poland. Here is how to get access to public healthcare.",
        cards: [
          {
            tag: "Non-EU",
            title: "Voluntary NFZ insurance",
            points: [
              "Students from outside the EU/EFTA can sign a voluntary insurance contract with NFZ.",
              "The contribution for these students is 55.80 zł per month, with no extra entry fee.",
              "Documents: application in 2 copies, copies of passport and visa or residence card, student status certificate (valid 30 days), proof of residence.",
              "After signing, file the ZUS ZZA form with ZUS, then pay the contribution to your ZUS account each month by the 20th of the next month.",
              "The contract is signed at the NFZ branch of your voivodeship."
            ],
            link: { label: "NFZ: voluntary insurance", url: "https://www.nfz.gov.pl/dla-pacjenta/ubezpieczenia-w-nfz/jak-sie-ubezpieczyc-dobrowolnie/" }
          },
          {
            tag: "EU",
            title: "EHIC card (EKUZ)",
            points: [
              "EU/EFTA students with a European Health Insurance Card get public treatment with it.",
              "Get the card at home before you arrive.",
              "Without national insurance you need private insurance."
            ]
          },
          {
            tag: "Karta Polaka",
            title: "Insurance via the university",
            points: [
              "Students with a Karta Polaka can be insured by the university for free.",
              "Ask your dean's office or international office."
            ]
          },
          {
            tag: "Doctors",
            title: "How to see a doctor",
            points: [
              "Choose a family doctor (lekarz POZ) at a clinic near you and sign a declaration.",
              "Check that you are insured in the Internetowe Konto Pacjenta (IKP) or the mojeIKP app.",
              "At night, on weekends and holidays use nocna i świąteczna opieka zdrowotna.",
              "Prescriptions are electronic: at the pharmacy you only need the SMS code and your PESEL.",
              "Private clinic networks are faster but paid — check for a package from your university or job."
            ],
            link: { label: "pacjent.gov.pl", url: "https://pacjent.gov.pl" }
          }
        ]
      }
    ],
    checklist: {
      title: "First-weeks checklist",
      intro: "Tick off the steps — your progress is saved in the browser.",
      reset: "Reset progress",
      label: (done, total) => `${done} / ${total}`,
      groups: [
        {
          title: "Before arrival",
          items: {
            "pre-visa": "Check your visa end date and set a reminder",
            "pre-docs": "Make copies of passport, visa and admission letter",
            "pre-ehic": "Get an EHIC or insurance for the first weeks",
            "pre-money": "Bring a card that works for the first days"
          }
        },
        {
          title: "Week 1",
          items: {
            "w1-sim": "Buy and register a Polish SIM",
            "w1-uni": "Visit the university international office",
            "w1-housing": "Sign a rental contract or move into the akademik",
            "w1-meldunek": "Do your meldunek (by day 4 if non-EU)"
          }
        },
        {
          title: "Weeks 2–3",
          items: {
            "w2-transport": "Install Jakdojade and buy a transport pass",
            "w2-pesel": "Get your PESEL",
            "w2-bank": "Open a bank account and set up BLIK",
            "w2-legit": "Get your legitymacja or mLegitymacja"
          }
        },
        {
          title: "First month",
          items: {
            "m1-nfz": "Sign the NFZ contract and file ZUS ZZA",
            "m1-pz": "Set up Profil Zaufany and mObywatel",
            "m1-mos": "File the residence permit application in MOS",
            "m1-poz": "Choose a family doctor"
          }
        }
      ]
    },
    sos: {
      title: "Emergency numbers",
      intro: "Save them to your phone right now.",
      items: [
        { num: "112", label: "Single emergency number" },
        { num: "999", label: "Ambulance" },
        { num: "997", label: "Police" },
        { num: "998", label: "Fire brigade" },
        { num: "800 190 590", label: "NFZ helpline, 24/7" }
      ]
    },
    footer: {
      note: "Made by students for students; not an official source. Rules change — always check gov.pl and your university before filing documents.",
      updated: "Information current as of October 2026."
    }
  }
};
