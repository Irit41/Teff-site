const cities = [
  {
    "id": 472,
    "name": "אבו גוש",
    "engName": "ABU GHOSH"
  },
  {
    "id": 473,
    "name": "אבו סנאן",
    "engName": "ABU SINAN"
  },
  {
    "id": 1342,
    "name": "אבו קורינאת (יישוב)",
    "engName": "ABU QUREINAT"
  },
  {
    "id": 1375,
    "name": "אבו תלול",
    "engName": "ABU TULUL"
  },
  {
    "id": 652,
    "name": "אבטין",
    "engName": "IBTIN"
  },
  {
    "id": 1275,
    "name": "אבטליון",
    "engName": "AVTALYON"
  },
  {
    "id": 679,
    "name": "אביאל",
    "engName": "AVI'EL"
  },
  {
    "id": 1115,
    "name": "אביבים",
    "engName": "AVIVIM"
  },
  {
    "id": 819,
    "name": "אביגדור",
    "engName": "AVIGEDOR"
  },
  {
    "id": 175,
    "name": "אביחיל",
    "engName": "AVIHAYIL"
  },
  {
    "id": 2052,
    "name": "אביטל",
    "engName": "AVITAL"
  },
  {
    "id": 1070,
    "name": "אביעזר",
    "engName": "AVI'EZER"
  },
  {
    "id": 1220,
    "name": "אבירים",
    "engName": "ABBIRIM"
  },
  {
    "id": 182,
    "name": "אבן יהודה",
    "engName": "EVEN YEHUDA"
  },
  {
    "id": 1081,
    "name": "אבן מנחם",
    "engName": "EVEN MENAHEM"
  },
  {
    "id": 783,
    "name": "אבן ספיר",
    "engName": "EVEN SAPPIR"
  },
  {
    "id": 400,
    "name": "אבן שמואל",
    "engName": "EVEN SHEMU'EL"
  },
  {
    "id": 4011,
    "name": "אבני איתן",
    "engName": "AVNE ETAN"
  },
  {
    "id": 3793,
    "name": "אבני חפץ",
    "engName": "AVNE HEFEZ"
  },
  {
    "id": 3786,
    "name": "אבנת",
    "engName": "AVENAT"
  },
  {
    "id": 1311,
    "name": "אבשלום",
    "engName": "AVSHALOM"
  },
  {
    "id": 3759,
    "name": "אדורה",
    "engName": "ADORA"
  },
  {
    "id": 113,
    "name": "אדירים",
    "engName": "ADDIRIM"
  },
  {
    "id": 1068,
    "name": "אדמית",
    "engName": "ADAMIT"
  },
  {
    "id": 1123,
    "name": "אדרת",
    "engName": "ADDERET"
  },
  {
    "id": 446,
    "name": "אודים",
    "engName": "UDIM"
  },
  {
    "id": 4010,
    "name": "אודם",
    "engName": "ODEM"
  },
  {
    "id": 1046,
    "name": "אוהד",
    "engName": "OHAD"
  },
  {
    "id": 2710,
    "name": "אום אל-פחם",
    "engName": "UMM AL-FAHM"
  },
  {
    "id": 2024,
    "name": "אום אל-קוטוף",
    "engName": "UMM AL-QUTUF"
  },
  {
    "id": 1358,
    "name": "אום בטין",
    "engName": "UMM BATIN"
  },
  {
    "id": 1108,
    "name": "אומן",
    "engName": "OMEN"
  },
  {
    "id": 680,
    "name": "אומץ",
    "engName": "OMEZ"
  },
  {
    "id": 31,
    "name": "אופקים",
    "engName": "OFAQIM"
  },
  {
    "id": 1294,
    "name": "אור הגנוז",
    "engName": "OR HAGANUZ"
  },
  {
    "id": 67,
    "name": "אור הנר",
    "engName": "OR HANER"
  },
  {
    "id": 2400,
    "name": "אור יהודה",
    "engName": "OR YEHUDA"
  },
  {
    "id": 1020,
    "name": "אור עקיבא",
    "engName": "OR AQIVA"
  },
  {
    "id": 780,
    "name": "אורה",
    "engName": "ORA"
  },
  {
    "id": 2012,
    "name": "אורות",
    "engName": "OROT"
  },
  {
    "id": 4013,
    "name": "אורטל",
    "engName": "ORTAL"
  },
  {
    "id": 403,
    "name": "אורים",
    "engName": "URIM"
  },
  {
    "id": 882,
    "name": "אורנים",
    "engName": "ORANIM"
  },
  {
    "id": 3760,
    "name": "אורנית",
    "engName": "ORANIT"
  },
  {
    "id": 278,
    "name": "אושה",
    "engName": "USHA"
  },
  {
    "id": 565,
    "name": "אזור",
    "engName": "AZOR"
  },
  {
    "id": 1157,
    "name": "אחווה",
    "engName": "AHAWA"
  },
  {
    "id": 821,
    "name": "אחוזם",
    "engName": "AHUZZAM"
  },
  {
    "id": 1330,
    "name": "אחוזת ברק",
    "engName": "AHUZZAT BARAQ"
  },
  {
    "id": 785,
    "name": "אחיהוד",
    "engName": "AHIHUD"
  },
  {
    "id": 850,
    "name": "אחיטוב",
    "engName": "AHITUV"
  },
  {
    "id": 804,
    "name": "אחיסמך",
    "engName": "AHISAMAKH"
  },
  {
    "id": 797,
    "name": "אחיעזר",
    "engName": "AHI'EZER"
  },
  {
    "id": 338,
    "name": "איבים",
    "engName": "IBBIM"
  },
  {
    "id": 716,
    "name": "אייל",
    "engName": "EYAL"
  },
  {
    "id": 77,
    "name": "איילת השחר",
    "engName": "AYYELET HASHAHAR"
  },
  {
    "id": 294,
    "name": "אילון",
    "engName": "ELON"
  },
  {
    "id": 1126,
    "name": "אילות",
    "engName": "ELOT"
  },
  {
    "id": 49,
    "name": "אילנייה",
    "engName": "ILANIYYA"
  },
  {
    "id": 2600,
    "name": "אילת",
    "engName": "ELAT"
  },
  {
    "id": 1336,
    "name": "אירוס",
    "engName": "IRUS"
  },
  {
    "id": 3762,
    "name": "איתמר",
    "engName": "ITAMAR"
  },
  {
    "id": 37,
    "name": "איתן",
    "engName": "ETAN"
  },
  {
    "id": 886,
    "name": "איתנים",
    "engName": "ETANIM"
  },
  {
    "id": 478,
    "name": "אכסאל",
    "engName": "IKSAL"
  },
  {
    "id": 1339,
    "name": "אל -עזי",
    "engName": "AL-AZY"
  },
  {
    "id": 1316,
    "name": "אל -עריאן",
    "engName": "AL-ARYAN"
  },
  {
    "id": 4003,
    "name": "אל -רום",
    "engName": "EL-ROM"
  },
  {
    "id": 1359,
    "name": "אל סייד",
    "engName": "AL SAYYID"
  },
  {
    "id": 1145,
    "name": "אלומה",
    "engName": "ALUMMA"
  },
  {
    "id": 330,
    "name": "אלומות",
    "engName": "ALUMMOT"
  },
  {
    "id": 1182,
    "name": "אלון הגליל",
    "engName": "ALLON HAGALIL"
  },
  {
    "id": 3579,
    "name": "אלון מורה",
    "engName": "ELON MORE"
  },
  {
    "id": 3604,
    "name": "אלון שבות",
    "engName": "ALLON SHEVUT"
  },
  {
    "id": 429,
    "name": "אלוני אבא",
    "engName": "ALLONE ABBA"
  },
  {
    "id": 4017,
    "name": "אלוני הבשן",
    "engName": "ALLONE HABASHAN"
  },
  {
    "id": 868,
    "name": "אלוני יצחק",
    "engName": "ALLONE YIZHAQ"
  },
  {
    "id": 285,
    "name": "אלונים",
    "engName": "ALLONIM"
  },
  {
    "id": 4002,
    "name": "אלי-עד",
    "engName": "ELI-AD"
  },
  {
    "id": 1365,
    "name": "אליאב",
    "engName": "ELIAV"
  },
  {
    "id": 41,
    "name": "אליכין",
    "engName": "ELYAKHIN"
  },
  {
    "id": 1248,
    "name": "אליפז",
    "engName": "ELIFAZ"
  },
  {
    "id": 730,
    "name": "אליפלט",
    "engName": "ELIFELET"
  },
  {
    "id": 682,
    "name": "אליקים",
    "engName": "ELYAQIM"
  },
  {
    "id": 204,
    "name": "אלישיב",
    "engName": "ELYASHIV"
  },
  {
    "id": 841,
    "name": "אלישמע",
    "engName": "ELISHAMA"
  },
  {
    "id": 1125,
    "name": "אלמגור",
    "engName": "ALMAGOR"
  },
  {
    "id": 3556,
    "name": "אלמוג",
    "engName": "ALMOG"
  },
  {
    "id": 1309,
    "name": "אלעד",
    "engName": "EL'AD"
  },
  {
    "id": 3618,
    "name": "אלעזר",
    "engName": "EL'AZAR"
  },
  {
    "id": 3750,
    "name": "אלפי מנשה",
    "engName": "ALFE MENASHE"
  },
  {
    "id": 603,
    "name": "אלקוש",
    "engName": "ELQOSH"
  },
  {
    "id": 3560,
    "name": "אלקנה",
    "engName": "ELQANA"
  },
  {
    "id": 772,
    "name": "אמונים",
    "engName": "EMUNIM"
  },
  {
    "id": 1064,
    "name": "אמירים",
    "engName": "AMIRIM"
  },
  {
    "id": 1253,
    "name": "אמנון",
    "engName": "AMNUN"
  },
  {
    "id": 23,
    "name": "אמציה",
    "engName": "AMAZYA"
  },
  {
    "id": 4012,
    "name": "אניעם",
    "engName": "ANI'AM"
  },
  {
    "id": 3754,
    "name": "אספר",
    "engName": "ASFAR"
  },
  {
    "id": 529,
    "name": "אעבלין",
    "engName": "I'BILLIN"
  },
  {
    "id": 4301,
    "name": "אפיק",
    "engName": "AFIQ"
  },
  {
    "id": 176,
    "name": "אפיקים",
    "engName": "AFIQIM"
  },
  {
    "id": 313,
    "name": "אפק",
    "engName": "AFEQ"
  },
  {
    "id": 3650,
    "name": "אפרת",
    "engName": "EFRAT"
  },
  {
    "id": 701,
    "name": "ארבל",
    "engName": "ARBEL"
  },
  {
    "id": 3598,
    "name": "ארגמן",
    "engName": "ARGAMAN"
  },
  {
    "id": 714,
    "name": "ארז",
    "engName": "EREZ"
  },
  {
    "id": 3570,
    "name": "אריאל",
    "engName": "ARI'EL"
  },
  {
    "id": 1324,
    "name": "ארסוף",
    "engName": "ARSUF"
  },
  {
    "id": 71,
    "name": "אשבול",
    "engName": "ESHBOL"
  },
  {
    "id": 1276,
    "name": "אשבל",
    "engName": "ESHBAL"
  },
  {
    "id": 70,
    "name": "אשדוד",
    "engName": "ASHDOD"
  },
  {
    "id": 199,
    "name": "אשדות יעקב (איחוד)",
    "engName": "ASHDOT YA'AQOV(IHUD)"
  },
  {
    "id": 188,
    "name": "אשדות יעקב (מאוחד)",
    "engName": "ASHDOT YA'AQOV(ME'UHAD)"
  },
  {
    "id": 1188,
    "name": "אשחר",
    "engName": "ESHHAR"
  },
  {
    "id": 3722,
    "name": "אשכולות",
    "engName": "ESHKOLOT"
  },
  {
    "id": 2021,
    "name": "אשל הנשיא",
    "engName": "ESHEL HANASI"
  },
  {
    "id": 1152,
    "name": "אשלים",
    "engName": "ASHALIM"
  },
  {
    "id": 7100,
    "name": "אשקלון",
    "engName": "ASHQELON"
  },
  {
    "id": 1256,
    "name": "אשרת",
    "engName": "ASHERAT"
  },
  {
    "id": 740,
    "name": "אשתאול",
    "engName": "ESHTA'OL"
  },
  {
    "id": 6000,
    "name": "באקה אל-גרביה",
    "engName": "BAQA AL-GHARBIYYE"
  },
  {
    "id": 21,
    "name": "באר אורה",
    "engName": "BE'ER ORA"
  },
  {
    "id": 1376,
    "name": "באר גנים",
    "engName": "BE'ER GANNIM"
  },
  {
    "id": 155,
    "name": "באר טוביה",
    "engName": "BE'ER TOVIYYA"
  },
  {
    "id": 2530,
    "name": "באר יעקב",
    "engName": "BE'ER YA'AQOV"
  },
  {
    "id": 1278,
    "name": "באר מילכה",
    "engName": "BE'ER MILKA"
  },
  {
    "id": 9000,
    "name": "באר שבע",
    "engName": "BE'ER SHEVA"
  },
  {
    "id": 450,
    "name": "בארות יצחק",
    "engName": "BE'EROT YIZHAQ"
  },
  {
    "id": 697,
    "name": "בארותיים",
    "engName": "BE'EROTAYIM"
  },
  {
    "id": 399,
    "name": "בארי",
    "engName": "BE'ERI"
  },
  {
    "id": 559,
    "name": "בוסתן הגליל",
    "engName": "BUSTAN HAGALIL"
  },
  {
    "id": 482,
    "name": "בועיינה-נוג'ידאת",
    "engName": "BU'EINE-NUJEIDAT"
  },
  {
    "id": 4001,
    "name": "בוקעאתא",
    "engName": "BUQ'ATA"
  },
  {
    "id": 698,
    "name": "בורגתה",
    "engName": "BURGETA"
  },
  {
    "id": 2043,
    "name": "בחן",
    "engName": "BAHAN"
  },
  {
    "id": 762,
    "name": "בטחה",
    "engName": "BITHA"
  },
  {
    "id": 234,
    "name": "ביצרון",
    "engName": "BIZZARON"
  },
  {
    "id": 998,
    "name": "ביר אל-מכסור",
    "engName": "BIR EL-MAKSUR"
  },
  {
    "id": 1348,
    "name": "ביר הדאג'",
    "engName": "BIR HADAGE"
  },
  {
    "id": 368,
    "name": "בירייה",
    "engName": "BIRIYYA"
  },
  {
    "id": 317,
    "name": "בית אורן",
    "engName": "BET OREN"
  },
  {
    "id": 3574,
    "name": "בית אל",
    "engName": "BET EL"
  },
  {
    "id": 562,
    "name": "בית אלעזרי",
    "engName": "BET EL'AZARI"
  },
  {
    "id": 95,
    "name": "בית אלפא",
    "engName": "BET ALFA"
  },
  {
    "id": 3652,
    "name": "בית אריה",
    "engName": "BET ARYE"
  },
  {
    "id": 1076,
    "name": "בית ברל",
    "engName": "BET BERL"
  },
  {
    "id": 480,
    "name": "בית ג'ן",
    "engName": "BEIT JANN"
  },
  {
    "id": 619,
    "name": "בית גוברין",
    "engName": "BET GUVRIN"
  },
  {
    "id": 571,
    "name": "בית גמליאל",
    "engName": "BET GAMLI'EL"
  },
  {
    "id": 466,
    "name": "בית דגן",
    "engName": "BET DAGAN"
  },
  {
    "id": 723,
    "name": "בית הגדי",
    "engName": "BET HAGADDI"
  },
  {
    "id": 373,
    "name": "בית הלוי",
    "engName": "BET HALEWI"
  },
  {
    "id": 322,
    "name": "בית הלל",
    "engName": "BET HILLEL"
  },
  {
    "id": 572,
    "name": "בית העמק",
    "engName": "BET HAEMEQ"
  },
  {
    "id": 3645,
    "name": "בית הערבה",
    "engName": "BET HAARAVA"
  },
  {
    "id": 242,
    "name": "בית השיטה",
    "engName": "BET HASHITTA"
  },
  {
    "id": 353,
    "name": "בית זיד",
    "engName": "BET ZEID"
  },
  {
    "id": 710,
    "name": "בית זית",
    "engName": "BET ZAYIT"
  },
  {
    "id": 143,
    "name": "בית זרע",
    "engName": "BET ZERA"
  },
  {
    "id": 3575,
    "name": "בית חורון",
    "engName": "BET HORON"
  },
  {
    "id": 877,
    "name": "בית חירות",
    "engName": "BET HERUT"
  },
  {
    "id": 2033,
    "name": "בית חלקיה",
    "engName": "BET HILQIYYA"
  },
  {
    "id": 159,
    "name": "בית חנן",
    "engName": "BET HANAN"
  },
  {
    "id": 800,
    "name": "בית חנניה",
    "engName": "BET HANANYA"
  },
  {
    "id": 1050,
    "name": "בית חשמונאי",
    "engName": "BET HASHMONAY"
  },
  {
    "id": 288,
    "name": "בית יהושע",
    "engName": "BET YEHOSHUA"
  },
  {
    "id": 265,
    "name": "בית יוסף",
    "engName": "BET YOSEF"
  },
  {
    "id": 200,
    "name": "בית ינאי",
    "engName": "BET YANNAY"
  },
  {
    "id": 326,
    "name": "בית יצחק-שער חפר",
    "engName": "BET YIZHAQ-SH. HEFER"
  },
  {
    "id": 430,
    "name": "בית לחם הגלילית",
    "engName": "BET LEHEM HAGELILIT"
  },
  {
    "id": 751,
    "name": "בית מאיר",
    "engName": "BET ME'IR"
  },
  {
    "id": 784,
    "name": "בית נחמיה",
    "engName": "BET NEHEMYA"
  },
  {
    "id": 16,
    "name": "בית ניר",
    "engName": "BET NIR"
  },
  {
    "id": 672,
    "name": "בית נקופה",
    "engName": "BET NEQOFA"
  },
  {
    "id": 202,
    "name": "בית עובד",
    "engName": "BET OVED"
  },
  {
    "id": 301,
    "name": "בית עוזיאל",
    "engName": "BET UZZI'EL"
  },
  {
    "id": 756,
    "name": "בית עזרא",
    "engName": "BET EZRA"
  },
  {
    "id": 604,
    "name": "בית עריף",
    "engName": "BET ARIF"
  },
  {
    "id": 212,
    "name": "בית צבי",
    "engName": "BET ZEVI"
  },
  {
    "id": 598,
    "name": "בית קמה",
    "engName": "BET QAMA"
  },
  {
    "id": 365,
    "name": "בית קשת",
    "engName": "BET QESHET"
  },
  {
    "id": 848,
    "name": "בית רבן",
    "engName": "BET RABBAN"
  },
  {
    "id": 1162,
    "name": "בית רימון",
    "engName": "BET RIMMON"
  },
  {
    "id": 9200,
    "name": "בית שאן",
    "engName": "BET SHE'AN"
  },
  {
    "id": 2610,
    "name": "בית שמש",
    "engName": "BET SHEMESH"
  },
  {
    "id": 248,
    "name": "בית שערים",
    "engName": "BET SHE'ARIM"
  },
  {
    "id": 747,
    "name": "בית שקמה",
    "engName": "BET SHIQMA"
  },
  {
    "id": 252,
    "name": "ביתן אהרן",
    "engName": "BITAN AHARON"
  },
  {
    "id": 3780,
    "name": "ביתר עילית",
    "engName": "BETAR ILLIT"
  },
  {
    "id": 94,
    "name": "בלפוריה",
    "engName": "BALFURYA"
  },
  {
    "id": 760,
    "name": "בן זכאי",
    "engName": "BEN ZAKKAY"
  },
  {
    "id": 712,
    "name": "בן עמי",
    "engName": "BEN AMMI"
  },
  {
    "id": 1084,
    "name": "בן שמן (כפר נוער)",
    "engName": "BEN SHEMEN(K.NO'AR)"
  },
  {
    "id": 2013,
    "name": "בן שמן (מושב)",
    "engName": "BEN SHEMEN (MOSHAV)"
  },
  {
    "id": 6100,
    "name": "בני ברק",
    "engName": "BENE BERAQ"
  },
  {
    "id": 1368,
    "name": "בני דקלים",
    "engName": "BNE DEQALIM"
  },
  {
    "id": 592,
    "name": "בני דרום",
    "engName": "BENE DAROM"
  },
  {
    "id": 386,
    "name": "בני דרור",
    "engName": "BENE DEROR"
  },
  {
    "id": 4015,
    "name": "בני יהודה",
    "engName": "BENE YEHUDA"
  },
  {
    "id": 1363,
    "name": "בני נצרים",
    "engName": "BNE NETSARIM"
  },
  {
    "id": 448,
    "name": "בני עטרות",
    "engName": "BENE ATAROT"
  },
  {
    "id": 1066,
    "name": "בני עי\"ש",
    "engName": "BENE AYISH"
  },
  {
    "id": 418,
    "name": "בני ציון",
    "engName": "BENE ZIYYON"
  },
  {
    "id": 588,
    "name": "בני ראם",
    "engName": "BENE RE'EM"
  },
  {
    "id": 685,
    "name": "בניה",
    "engName": "BENAYA"
  },
  {
    "id": 9800,
    "name": "בנימינה-גבעת עדה*",
    "engName": "BINYAMINA-GIV'AT ADA"
  },
  {
    "id": 1326,
    "name": "בסמ\"ה",
    "engName": "BASMA"
  },
  {
    "id": 944,
    "name": "בסמת טבעון",
    "engName": "BASMAT TAB'UN"
  },
  {
    "id": 483,
    "name": "בענה",
    "engName": "BI'NE"
  },
  {
    "id": 389,
    "name": "בצרה",
    "engName": "BAZRA"
  },
  {
    "id": 589,
    "name": "בצת",
    "engName": "BEZET"
  },
  {
    "id": 864,
    "name": "בקוע",
    "engName": "BEQOA"
  },
  {
    "id": 3612,
    "name": "בקעות",
    "engName": "BEQA'OT"
  },
  {
    "id": 823,
    "name": "בר גיורא",
    "engName": "BAR GIYYORA"
  },
  {
    "id": 1191,
    "name": "בר יוחאי",
    "engName": "BAR YOHAY"
  },
  {
    "id": 3744,
    "name": "ברוכין",
    "engName": "BRUKHIN"
  },
  {
    "id": 428,
    "name": "ברור חיל",
    "engName": "BEROR HAYIL"
  },
  {
    "id": 2060,
    "name": "ברוש",
    "engName": "BEROSH"
  },
  {
    "id": 3710,
    "name": "ברכה",
    "engName": "BERAKHA"
  },
  {
    "id": 746,
    "name": "ברכיה",
    "engName": "BEREKHYA"
  },
  {
    "id": 667,
    "name": "ברעם",
    "engName": "BAR'AM"
  },
  {
    "id": 141,
    "name": "ברק",
    "engName": "BARAQ"
  },
  {
    "id": 617,
    "name": "ברקאי",
    "engName": "BARQAY"
  },
  {
    "id": 3654,
    "name": "ברקן",
    "engName": "BARQAN"
  },
  {
    "id": 2038,
    "name": "ברקת",
    "engName": "BAREQET"
  },
  {
    "id": 1323,
    "name": "בת הדר",
    "engName": "BAT HADAR"
  },
  {
    "id": 1361,
    "name": "בת חן",
    "engName": "BAT HEN"
  },
  {
    "id": 1319,
    "name": "בת חפר",
    "engName": "BAT HEFER"
  },
  {
    "id": 6200,
    "name": "בת ים",
    "engName": "BAT YAM"
  },
  {
    "id": 3794,
    "name": "בת עין",
    "engName": "BAT AYIN"
  },
  {
    "id": 33,
    "name": "בת שלמה",
    "engName": "BAT SHELOMO"
  },
  {
    "id": 1292,
    "name": "ג'דיידה-מכר",
    "engName": "JUDEIDE-MAKER"
  },
  {
    "id": 485,
    "name": "ג'ולס",
    "engName": "JULIS"
  },
  {
    "id": 627,
    "name": "ג'לג'וליה",
    "engName": "JALJULYE"
  },
  {
    "id": 541,
    "name": "ג'סר א-זרקא",
    "engName": "JISR AZ-ZARQA"
  },
  {
    "id": 487,
    "name": "ג'ש (גוש חלב)",
    "engName": "JISH(GUSH HALAV)"
  },
  {
    "id": 628,
    "name": "ג'ת",
    "engName": "JATT"
  },
  {
    "id": 872,
    "name": "גאולי תימן",
    "engName": "GE'ULE TEMAN"
  },
  {
    "id": 379,
    "name": "גאולים",
    "engName": "GE'ULIM"
  },
  {
    "id": 853,
    "name": "גאליה",
    "engName": "GE'ALYA"
  },
  {
    "id": 352,
    "name": "גבולות",
    "engName": "GEVULOT"
  },
  {
    "id": 424,
    "name": "גבים",
    "engName": "GEVIM"
  },
  {
    "id": 86,
    "name": "גבע",
    "engName": "GEVA"
  },
  {
    "id": 3763,
    "name": "גבע בנימין",
    "engName": "GEVA BINYAMIN"
  },
  {
    "id": 683,
    "name": "גבע כרמל",
    "engName": "GEVA  KARMEL"
  },
  {
    "id": 2014,
    "name": "גבעולים",
    "engName": "GIV'OLIM"
  },
  {
    "id": 3644,
    "name": "גבעון החדשה",
    "engName": "GIV'ON HAHADASHA"
  },
  {
    "id": 1344,
    "name": "גבעות בר",
    "engName": "GEVA'OT BAR"
  },
  {
    "id": 1293,
    "name": "גבעת אבני",
    "engName": "GIV'AT AVNI"
  },
  {
    "id": 1288,
    "name": "גבעת אלה",
    "engName": "GIV'AT ELA"
  },
  {
    "id": 147,
    "name": "גבעת ברנר",
    "engName": "GIV'AT BRENNER"
  },
  {
    "id": 870,
    "name": "גבעת השלושה",
    "engName": "GIV'AT HASHELOSHA"
  },
  {
    "id": 3730,
    "name": "גבעת זאב",
    "engName": "GIV'AT ZE'EV"
  },
  {
    "id": 207,
    "name": "גבעת ח\"ן",
    "engName": "GIV'AT HEN"
  },
  {
    "id": 2018,
    "name": "גבעת חיים (איחוד)",
    "engName": "GIV'AT HAYYIM (IHUD)"
  },
  {
    "id": 173,
    "name": "גבעת חיים (מאוחד)",
    "engName": "GIV'AT HAYYIM(ME'UHAD)"
  },
  {
    "id": 4021,
    "name": "גבעת יואב",
    "engName": "GIV'AT YO'AV"
  },
  {
    "id": 787,
    "name": "גבעת יערים",
    "engName": "GIV'AT YE'ARIM"
  },
  {
    "id": 919,
    "name": "גבעת ישעיהו",
    "engName": "GIV'AT YESHA'YAHU"
  },
  {
    "id": 802,
    "name": "גבעת כ\"ח",
    "engName": "GIV'AT KOAH"
  },
  {
    "id": 360,
    "name": "גבעת ניל\"י",
    "engName": "GIV'AT NILI"
  },
  {
    "id": 703,
    "name": "גבעת עוז",
    "engName": "GIV'AT OZ"
  },
  {
    "id": 681,
    "name": "גבעת שמואל",
    "engName": "GIV'AT SHEMU'EL"
  },
  {
    "id": 566,
    "name": "גבעת שמש",
    "engName": "GIV'AT SHEMESH"
  },
  {
    "id": 1077,
    "name": "גבעת שפירא",
    "engName": "GIV'AT SHAPPIRA"
  },
  {
    "id": 793,
    "name": "גבעתי",
    "engName": "GIV'ATI"
  },
  {
    "id": 6300,
    "name": "גבעתיים",
    "engName": "GIV'ATAYIM"
  },
  {
    "id": 342,
    "name": "גברעם",
    "engName": "GEVAR'AM"
  },
  {
    "id": 133,
    "name": "גבת",
    "engName": "GEVAT"
  },
  {
    "id": 35,
    "name": "גדות",
    "engName": "GADOT"
  },
  {
    "id": 145,
    "name": "גדיש",
    "engName": "GADISH"
  },
  {
    "id": 442,
    "name": "גדעונה",
    "engName": "GID'ONA"
  },
  {
    "id": 2550,
    "name": "גדרה",
    "engName": "GEDERA"
  },
  {
    "id": 852,
    "name": "גונן",
    "engName": "GONEN"
  },
  {
    "id": 755,
    "name": "גורן",
    "engName": "GOREN"
  },
  {
    "id": 1219,
    "name": "גורנות הגליל",
    "engName": "GORNOT HAGALIL"
  },
  {
    "id": 457,
    "name": "גזית",
    "engName": "GAZIT"
  },
  {
    "id": 370,
    "name": "גזר",
    "engName": "GEZER"
  },
  {
    "id": 706,
    "name": "גיאה",
    "engName": "GE'A"
  },
  {
    "id": 196,
    "name": "גיבתון",
    "engName": "GIBBETON"
  },
  {
    "id": 1043,
    "name": "גיזו",
    "engName": "GIZO"
  },
  {
    "id": 1204,
    "name": "גילון",
    "engName": "GILON"
  },
  {
    "id": 736,
    "name": "גילת",
    "engName": "GILAT"
  },
  {
    "id": 262,
    "name": "גינוסר",
    "engName": "GINNOSAR"
  },
  {
    "id": 92,
    "name": "גיניגר",
    "engName": "GINNEGAR"
  },
  {
    "id": 863,
    "name": "גינתון",
    "engName": "GINNATON"
  },
  {
    "id": 1206,
    "name": "גיתה",
    "engName": "GITTA"
  },
  {
    "id": 3613,
    "name": "גיתית",
    "engName": "GITTIT"
  },
  {
    "id": 393,
    "name": "גלאון",
    "engName": "GAL'ON"
  },
  {
    "id": 3606,
    "name": "גלגל",
    "engName": "GILGAL"
  },
  {
    "id": 346,
    "name": "גליל ים",
    "engName": "GELIL YAM"
  },
  {
    "id": 369,
    "name": "גלעד (אבן יצחק)",
    "engName": "GAL'ED (EVEN YIZHAQ)"
  },
  {
    "id": 745,
    "name": "גמזו",
    "engName": "GIMZO"
  },
  {
    "id": 1072,
    "name": "גן הדרום",
    "engName": "GAN HADAROM"
  },
  {
    "id": 225,
    "name": "גן השומרון",
    "engName": "GAN HASHOMERON"
  },
  {
    "id": 239,
    "name": "גן חיים",
    "engName": "GAN HAYYIM"
  },
  {
    "id": 734,
    "name": "גן יאשיה",
    "engName": "GAN YOSHIYYA"
  },
  {
    "id": 166,
    "name": "גן יבנה",
    "engName": "GAN YAVNE"
  },
  {
    "id": 1274,
    "name": "גן נר",
    "engName": "GAN NER"
  },
  {
    "id": 311,
    "name": "גן שורק",
    "engName": "GAN SOREQ"
  },
  {
    "id": 144,
    "name": "גן שלמה",
    "engName": "GAN SHELOMO"
  },
  {
    "id": 72,
    "name": "גן שמואל",
    "engName": "GAN SHEMU'EL"
  },
  {
    "id": 836,
    "name": "גנות",
    "engName": "GANNOT"
  },
  {
    "id": 549,
    "name": "גנות הדר",
    "engName": "GANNOT HADAR"
  },
  {
    "id": 1103,
    "name": "גני הדר",
    "engName": "GANNE HADAR"
  },
  {
    "id": 1371,
    "name": "גני טל",
    "engName": "GANNE TAL"
  },
  {
    "id": 862,
    "name": "גני יוחנן",
    "engName": "GANNE YOHANAN"
  },
  {
    "id": 218,
    "name": "גני עם",
    "engName": "GANNE AM"
  },
  {
    "id": 229,
    "name": "גני תקווה",
    "engName": "GANNE TIQWA"
  },
  {
    "id": 842,
    "name": "געש",
    "engName": "GA'ASH"
  },
  {
    "id": 463,
    "name": "געתון",
    "engName": "GA'TON"
  },
  {
    "id": 39,
    "name": "גפן",
    "engName": "GEFEN"
  },
  {
    "id": 1129,
    "name": "גרופית",
    "engName": "GEROFIT"
  },
  {
    "id": 4022,
    "name": "גשור",
    "engName": "GESHUR"
  },
  {
    "id": 305,
    "name": "גשר",
    "engName": "GESHER"
  },
  {
    "id": 574,
    "name": "גשר הזיו",
    "engName": "GESHER HAZIW"
  },
  {
    "id": 340,
    "name": "גת (קיבוץ)",
    "engName": "GAT(QIBBUZ)"
  },
  {
    "id": 128,
    "name": "גת רימון",
    "engName": "GAT RIMMON"
  },
  {
    "id": 494,
    "name": "דאלית אל-כרמל",
    "engName": "DALIYAT AL-KARMEL"
  },
  {
    "id": 146,
    "name": "דבורה",
    "engName": "DEVORA"
  },
  {
    "id": 489,
    "name": "דבורייה",
    "engName": "DABURIYYA"
  },
  {
    "id": 849,
    "name": "דבירה",
    "engName": "DEVIRA"
  },
  {
    "id": 407,
    "name": "דברת",
    "engName": "DAVERAT"
  },
  {
    "id": 62,
    "name": "דגניה א'",
    "engName": "DEGANYA ALEF"
  },
  {
    "id": 79,
    "name": "דגניה ב'",
    "engName": "DEGANYA BET"
  },
  {
    "id": 1067,
    "name": "דוב\"ב",
    "engName": "DOVEV"
  },
  {
    "id": 3747,
    "name": "דולב",
    "engName": "DOLEV"
  },
  {
    "id": 738,
    "name": "דור",
    "engName": "DOR"
  },
  {
    "id": 336,
    "name": "דורות",
    "engName": "DOROT"
  },
  {
    "id": 475,
    "name": "דחי",
    "engName": "DAHI"
  },
  {
    "id": 490,
    "name": "דייר אל-אסד",
    "engName": "DEIR AL-ASAD"
  },
  {
    "id": 492,
    "name": "דייר חנא",
    "engName": "DEIR HANNA"
  },
  {
    "id": 493,
    "name": "דייר ראפאת",
    "engName": "DEIR RAFAT"
  },
  {
    "id": 2200,
    "name": "דימונה",
    "engName": "DIMONA"
  },
  {
    "id": 2063,
    "name": "דישון",
    "engName": "DISHON"
  },
  {
    "id": 300,
    "name": "דלייה",
    "engName": "DALIYYA"
  },
  {
    "id": 431,
    "name": "דלתון",
    "engName": "DALTON"
  },
  {
    "id": 1317,
    "name": "דמיידה",
    "engName": "DEMEIDE"
  },
  {
    "id": 303,
    "name": "דן",
    "engName": "DAN"
  },
  {
    "id": 302,
    "name": "דפנה",
    "engName": "DAFNA"
  },
  {
    "id": 1241,
    "name": "דקל",
    "engName": "DEQEL"
  },
  {
    "id": 1349,
    "name": "דריג'את",
    "engName": "DERIG'AT"
  },
  {
    "id": 702,
    "name": "האון",
    "engName": "HAON"
  },
  {
    "id": 675,
    "name": "הבונים",
    "engName": "HABONIM"
  },
  {
    "id": 356,
    "name": "הגושרים",
    "engName": "HAGOSHERIM"
  },
  {
    "id": 191,
    "name": "הדר עם",
    "engName": "HADAR AM"
  },
  {
    "id": 9700,
    "name": "הוד השרון",
    "engName": "HOD HASHARON"
  },
  {
    "id": 1322,
    "name": "הודיות",
    "engName": "HODAYOT"
  },
  {
    "id": 726,
    "name": "הודייה",
    "engName": "HODIYYA"
  },
  {
    "id": 1186,
    "name": "הושעיה",
    "engName": "HOSHA'AYA"
  },
  {
    "id": 250,
    "name": "הזורע",
    "engName": "HAZOREA"
  },
  {
    "id": 307,
    "name": "הזורעים",
    "engName": "HAZORE'IM"
  },
  {
    "id": 434,
    "name": "החותרים",
    "engName": "HAHOTERIM"
  },
  {
    "id": 684,
    "name": "היוגב",
    "engName": "HAYOGEV"
  },
  {
    "id": 1208,
    "name": "הילה",
    "engName": "HILLA"
  },
  {
    "id": 377,
    "name": "המעפיל",
    "engName": "HAMA'PIL"
  },
  {
    "id": 677,
    "name": "הסוללים",
    "engName": "HASOLELIM"
  },
  {
    "id": 423,
    "name": "העוגן",
    "engName": "HAOGEN"
  },
  {
    "id": 3769,
    "name": "הר אדר",
    "engName": "HAR ADAR"
  },
  {
    "id": 3603,
    "name": "הר גילה",
    "engName": "HAR GILLO"
  },
  {
    "id": 1261,
    "name": "הר עמשא",
    "engName": "HAR AMASA"
  },
  {
    "id": 464,
    "name": "הראל",
    "engName": "HAR'EL"
  },
  {
    "id": 1249,
    "name": "הרדוף",
    "engName": "HARDUF"
  },
  {
    "id": 6400,
    "name": "הרצלייה",
    "engName": "HERZLIYYA"
  },
  {
    "id": 1203,
    "name": "הררית",
    "engName": "HARARIT"
  },
  {
    "id": 3639,
    "name": "ורד יריחו",
    "engName": "WERED YERIHO"
  },
  {
    "id": 1133,
    "name": "ורדון",
    "engName": "WARDON"
  },
  {
    "id": 815,
    "name": "זבדיאל",
    "engName": "ZAVDI'EL"
  },
  {
    "id": 44,
    "name": "זוהר",
    "engName": "ZOHAR"
  },
  {
    "id": 584,
    "name": "זיקים",
    "engName": "ZIQIM"
  },
  {
    "id": 788,
    "name": "זיתן",
    "engName": "ZETAN"
  },
  {
    "id": 9300,
    "name": "זכרון יעקב",
    "engName": "ZIKHRON YA'AQOV"
  },
  {
    "id": 799,
    "name": "זכריה",
    "engName": "ZEKHARYA"
  },
  {
    "id": 1290,
    "name": "זמר",
    "engName": "ZEMER"
  },
  {
    "id": 1065,
    "name": "זמרת",
    "engName": "ZIMRAT"
  },
  {
    "id": 816,
    "name": "זנוח",
    "engName": "ZANOAH"
  },
  {
    "id": 2064,
    "name": "זרועה",
    "engName": "ZERU'A"
  },
  {
    "id": 975,
    "name": "זרזיר",
    "engName": "ZARZIR"
  },
  {
    "id": 818,
    "name": "זרחיה",
    "engName": "ZERAHYA"
  },
  {
    "id": 1321,
    "name": "ח'ואלד",
    "engName": "KHAWALED"
  },
  {
    "id": 235,
    "name": "חבצלת השרון",
    "engName": "HAVAZZELET HASHARON"
  },
  {
    "id": 1110,
    "name": "חבר",
    "engName": "HEVER"
  },
  {
    "id": 717,
    "name": "חגור",
    "engName": "HAGOR"
  },
  {
    "id": 3764,
    "name": "חגי",
    "engName": "HAGGAY"
  },
  {
    "id": 205,
    "name": "חגלה",
    "engName": "HOGLA"
  },
  {
    "id": 4026,
    "name": "חד-נס",
    "engName": "HAD-NES"
  },
  {
    "id": 618,
    "name": "חדיד",
    "engName": "HADID"
  },
  {
    "id": 6500,
    "name": "חדרה",
    "engName": "HADERA"
  },
  {
    "id": 948,
    "name": "חוג'ייראת (ד'הרה) (שבט)",
    "engName": "HUJEIRAT (DAHRA)"
  },
  {
    "id": 160,
    "name": "חולדה",
    "engName": "HULDA"
  },
  {
    "id": 6600,
    "name": "חולון",
    "engName": "HOLON"
  },
  {
    "id": 1239,
    "name": "חולית",
    "engName": "HOLIT"
  },
  {
    "id": 253,
    "name": "חולתה",
    "engName": "HULATA"
  },
  {
    "id": 662,
    "name": "חוסן",
    "engName": "HOSEN"
  },
  {
    "id": 1332,
    "name": "חוסנייה",
    "engName": "HUSSNIYYA"
  },
  {
    "id": 115,
    "name": "חופית",
    "engName": "HOFIT"
  },
  {
    "id": 374,
    "name": "חוקוק",
    "engName": "HUQOQ"
  },
  {
    "id": 1303,
    "name": "חורה",
    "engName": "HURA"
  },
  {
    "id": 496,
    "name": "חורפיש",
    "engName": "HURFEISH"
  },
  {
    "id": 355,
    "name": "חורשים",
    "engName": "HORESHIM"
  },
  {
    "id": 1047,
    "name": "חזון",
    "engName": "HAZON"
  },
  {
    "id": 219,
    "name": "חיבת ציון",
    "engName": "HIBBAT ZIYYON"
  },
  {
    "id": 3643,
    "name": "חיננית",
    "engName": "HINNANIT"
  },
  {
    "id": 4000,
    "name": "חיפה",
    "engName": "HAIFA"
  },
  {
    "id": 162,
    "name": "חירות",
    "engName": "HERUT"
  },
  {
    "id": 1272,
    "name": "חלוץ",
    "engName": "HALUZ"
  },
  {
    "id": 3573,
    "name": "חלמיש",
    "engName": "HALLAMISH"
  },
  {
    "id": 820,
    "name": "חלץ",
    "engName": "HELEZ"
  },
  {
    "id": 993,
    "name": "חמאם",
    "engName": "HAMAM"
  },
  {
    "id": 801,
    "name": "חמד",
    "engName": "HEMED"
  },
  {
    "id": 343,
    "name": "חמדיה",
    "engName": "HAMADYA"
  },
  {
    "id": 3646,
    "name": "חמדת",
    "engName": "HEMDAT"
  },
  {
    "id": 3609,
    "name": "חמרה",
    "engName": "HAMRA"
  },
  {
    "id": 807,
    "name": "חניאל",
    "engName": "HANNI'EL"
  },
  {
    "id": 280,
    "name": "חניתה",
    "engName": "HANITA"
  },
  {
    "id": 1257,
    "name": "חנתון",
    "engName": "HANNATON"
  },
  {
    "id": 4005,
    "name": "חספין",
    "engName": "HASPIN"
  },
  {
    "id": 363,
    "name": "חפץ חיים",
    "engName": "HAFEZ HAYYIM"
  },
  {
    "id": 90,
    "name": "חפצי-בה",
    "engName": "HEFZI-BAH"
  },
  {
    "id": 700,
    "name": "חצב",
    "engName": "HAZAV"
  },
  {
    "id": 13,
    "name": "חצבה",
    "engName": "HAZEVA"
  },
  {
    "id": 2034,
    "name": "חצור הגלילית",
    "engName": "HAZOR HAGELILIT"
  },
  {
    "id": 406,
    "name": "חצור-אשדוד",
    "engName": "HAZOR-ASHDOD"
  },
  {
    "id": 397,
    "name": "חצרים",
    "engName": "HAZERIM"
  },
  {
    "id": 422,
    "name": "חרב לאת",
    "engName": "HEREV LE'ET"
  },
  {
    "id": 1024,
    "name": "חרוצים",
    "engName": "HARUZIM"
  },
  {
    "id": 1247,
    "name": "חריש",
    "engName": "HARISH"
  },
  {
    "id": 3717,
    "name": "חרמש",
    "engName": "HERMESH"
  },
  {
    "id": 1209,
    "name": "חרשים",
    "engName": "HARASHIM"
  },
  {
    "id": 3770,
    "name": "חשמונאים",
    "engName": "HASHMONA'IM"
  },
  {
    "id": 6700,
    "name": "טבריה",
    "engName": "TIBERIAS"
  },
  {
    "id": 962,
    "name": "טובא-זנגרייה",
    "engName": "TUBA-ZANGARIYYE"
  },
  {
    "id": 498,
    "name": "טורעאן",
    "engName": "TUR'AN"
  },
  {
    "id": 2730,
    "name": "טייבה",
    "engName": "TAYIBE"
  },
  {
    "id": 497,
    "name": "טייבה (בעמק)",
    "engName": "TAYIBE(BAEMEQ)"
  },
  {
    "id": 2720,
    "name": "טירה",
    "engName": "TIRE"
  },
  {
    "id": 663,
    "name": "טירת יהודה",
    "engName": "TIRAT YEHUDA"
  },
  {
    "id": 2100,
    "name": "טירת כרמל",
    "engName": "TIRAT KARMEL"
  },
  {
    "id": 268,
    "name": "טירת צבי",
    "engName": "TIRAT ZEVI"
  },
  {
    "id": 462,
    "name": "טל שחר",
    "engName": "TAL SHAHAR"
  },
  {
    "id": 1181,
    "name": "טל-אל",
    "engName": "TAL-EL"
  },
  {
    "id": 1177,
    "name": "טללים",
    "engName": "TELALIM"
  },
  {
    "id": 3788,
    "name": "טלמון",
    "engName": "TALMON"
  },
  {
    "id": 8900,
    "name": "טמרה",
    "engName": "TAMRA"
  },
  {
    "id": 547,
    "name": "טמרה (יזרעאל)",
    "engName": "TAMRA (YIZRE'EL)"
  },
  {
    "id": 3743,
    "name": "טנא",
    "engName": "TENE"
  },
  {
    "id": 1214,
    "name": "טפחות",
    "engName": "TEFAHOT"
  },
  {
    "id": 1295,
    "name": "יאנוח-ג'ת",
    "engName": "YANUH-JAT"
  },
  {
    "id": 1232,
    "name": "יבול",
    "engName": "YEVUL"
  },
  {
    "id": 46,
    "name": "יבנאל",
    "engName": "YAVNE'EL"
  },
  {
    "id": 2660,
    "name": "יבנה",
    "engName": "YAVNE"
  },
  {
    "id": 96,
    "name": "יגור",
    "engName": "YAGUR"
  },
  {
    "id": 798,
    "name": "יגל",
    "engName": "YAGEL"
  },
  {
    "id": 577,
    "name": "יד בנימין",
    "engName": "YAD BINYAMIN"
  },
  {
    "id": 1134,
    "name": "יד השמונה",
    "engName": "YAD HASHEMONA"
  },
  {
    "id": 758,
    "name": "יד חנה",
    "engName": "YAD HANNA"
  },
  {
    "id": 358,
    "name": "יד מרדכי",
    "engName": "YAD MORDEKHAY"
  },
  {
    "id": 775,
    "name": "יד נתן",
    "engName": "YAD NATAN"
  },
  {
    "id": 64,
    "name": "יד רמב\"ם",
    "engName": "YAD RAMBAM"
  },
  {
    "id": 1144,
    "name": "ידידה",
    "engName": "YEDIDA"
  },
  {
    "id": 9400,
    "name": "יהוד",
    "engName": "YEHUD"
  },
  {
    "id": 1158,
    "name": "יהל",
    "engName": "YAHEL"
  },
  {
    "id": 2009,
    "name": "יובל",
    "engName": "YUVAL"
  },
  {
    "id": 1226,
    "name": "יובלים",
    "engName": "YUVALLIM"
  },
  {
    "id": 1112,
    "name": "יודפת",
    "engName": "YODEFAT"
  },
  {
    "id": 4007,
    "name": "יונתן",
    "engName": "YONATAN"
  },
  {
    "id": 803,
    "name": "יושיביה",
    "engName": "YOSHIVYA"
  },
  {
    "id": 452,
    "name": "יזרעאל",
    "engName": "YIZRE'EL"
  },
  {
    "id": 409,
    "name": "יחיעם",
    "engName": "YEHI'AM"
  },
  {
    "id": 866,
    "name": "יטבתה",
    "engName": "YOTVATA"
  },
  {
    "id": 3607,
    "name": "ייט\"ב",
    "engName": "YITAV"
  },
  {
    "id": 811,
    "name": "יכיני",
    "engName": "YAKHINI"
  },
  {
    "id": 753,
    "name": "ינוב",
    "engName": "YANUV"
  },
  {
    "id": 2011,
    "name": "ינון",
    "engName": "YINNON"
  },
  {
    "id": 29,
    "name": "יסוד המעלה",
    "engName": "YESUD HAMA'ALA"
  },
  {
    "id": 440,
    "name": "יסודות",
    "engName": "YESODOT"
  },
  {
    "id": 575,
    "name": "יסעור",
    "engName": "YAS'UR"
  },
  {
    "id": 1138,
    "name": "יעד",
    "engName": "YA'AD"
  },
  {
    "id": 1117,
    "name": "יעל",
    "engName": "YA'EL"
  },
  {
    "id": 1044,
    "name": "יעף",
    "engName": "YE'AF"
  },
  {
    "id": 795,
    "name": "יערה",
    "engName": "YA'ARA"
  },
  {
    "id": 499,
    "name": "יפיע",
    "engName": "YAFI"
  },
  {
    "id": 3566,
    "name": "יפית",
    "engName": "YAFIT"
  },
  {
    "id": 134,
    "name": "יפעת",
    "engName": "YIF'AT"
  },
  {
    "id": 453,
    "name": "יפתח",
    "engName": "YIFTAH"
  },
  {
    "id": 3749,
    "name": "יצהר",
    "engName": "YIZHAR"
  },
  {
    "id": 759,
    "name": "יציץ",
    "engName": "YAZIZ"
  },
  {
    "id": 417,
    "name": "יקום",
    "engName": "YAQUM"
  },
  {
    "id": 3647,
    "name": "יקיר",
    "engName": "YAQIR"
  },
  {
    "id": 241,
    "name": "יקנעם (מושבה)",
    "engName": "YOQNE'AM(MOSHAVA)"
  },
  {
    "id": 240,
    "name": "יקנעם עילית",
    "engName": "YOQNE'AM ILLIT"
  },
  {
    "id": 623,
    "name": "יראון",
    "engName": "YIR'ON"
  },
  {
    "id": 2026,
    "name": "ירדנה",
    "engName": "YARDENA"
  },
  {
    "id": 831,
    "name": "ירוחם",
    "engName": "YEROHAM"
  },
  {
    "id": 3000,
    "name": "ירושלים",
    "engName": "JERUSALEM"
  },
  {
    "id": 718,
    "name": "ירחיב",
    "engName": "YARHIV"
  },
  {
    "id": 502,
    "name": "ירכא",
    "engName": "YIRKA"
  },
  {
    "id": 183,
    "name": "ירקונה",
    "engName": "YARQONA"
  },
  {
    "id": 916,
    "name": "ישע",
    "engName": "YESHA"
  },
  {
    "id": 805,
    "name": "ישעי",
    "engName": "YISH'I"
  },
  {
    "id": 828,
    "name": "ישרש",
    "engName": "YASHRESH"
  },
  {
    "id": 1227,
    "name": "יתד",
    "engName": "YATED"
  },
  {
    "id": 504,
    "name": "כאבול",
    "engName": "KABUL"
  },
  {
    "id": 505,
    "name": "כאוכב אבו אל-היג'א",
    "engName": "KAOKAB ABU AL-HIJA"
  },
  {
    "id": 576,
    "name": "כברי",
    "engName": "KABRI"
  },
  {
    "id": 371,
    "name": "כדורי",
    "engName": "KADOORIE"
  },
  {
    "id": 1338,
    "name": "כדיתה",
    "engName": "KADDITA"
  },
  {
    "id": 3564,
    "name": "כוכב השחר",
    "engName": "KOKHAV HASHAHAR"
  },
  {
    "id": 1224,
    "name": "כוכב יאיר",
    "engName": "KOKHAV YA'IR"
  },
  {
    "id": 3779,
    "name": "כוכב יעקב",
    "engName": "KOKHAV YA'AQOV"
  },
  {
    "id": 824,
    "name": "כוכב מיכאל",
    "engName": "KOKHAV MIKHA'EL"
  },
  {
    "id": 1252,
    "name": "כורזים",
    "engName": "KORAZIM"
  },
  {
    "id": 1210,
    "name": "כחל",
    "engName": "KAHAL"
  },
  {
    "id": 1367,
    "name": "כחלה",
    "engName": "KOCHLEA"
  },
  {
    "id": 840,
    "name": "כיסופים",
    "engName": "KISSUFIM"
  },
  {
    "id": 1153,
    "name": "כישור",
    "engName": "KISHOR"
  },
  {
    "id": 1183,
    "name": "כליל",
    "engName": "KELIL"
  },
  {
    "id": 1229,
    "name": "כלנית",
    "engName": "KALLANIT"
  },
  {
    "id": 1331,
    "name": "כמאנה",
    "engName": "KAMANE"
  },
  {
    "id": 1291,
    "name": "כמהין",
    "engName": "KEMEHIN"
  },
  {
    "id": 1201,
    "name": "כמון",
    "engName": "KAMMON"
  },
  {
    "id": 2006,
    "name": "כנות",
    "engName": "KANNOT"
  },
  {
    "id": 4028,
    "name": "כנף",
    "engName": "KANAF"
  },
  {
    "id": 63,
    "name": "כנרת (מושבה)",
    "engName": "KINNERET(MOSHAVA)"
  },
  {
    "id": 57,
    "name": "כנרת (קבוצה)",
    "engName": "KINNERET(QEVUZA)"
  },
  {
    "id": 1059,
    "name": "כסיפה",
    "engName": "KUSEIFE"
  },
  {
    "id": 859,
    "name": "כסלון",
    "engName": "KESALON"
  },
  {
    "id": 1296,
    "name": "כסרא-סמיע",
    "engName": "KISRA-SUMEI"
  },
  {
    "id": 978,
    "name": "כעביה-טבאש-חג'אג'רה",
    "engName": "KA'ABIYYE-TABBASH-HAJAJRE"
  },
  {
    "id": 857,
    "name": "כפר אביב",
    "engName": "KEFAR AVIV"
  },
  {
    "id": 3638,
    "name": "כפר אדומים",
    "engName": "KEFAR ADUMMIM"
  },
  {
    "id": 364,
    "name": "כפר אוריה",
    "engName": "KEFAR URIYYA"
  },
  {
    "id": 690,
    "name": "כפר אחים",
    "engName": "KEFAR AHIM"
  },
  {
    "id": 220,
    "name": "כפר ביאליק",
    "engName": "KEFAR BIALIK"
  },
  {
    "id": 177,
    "name": "כפר ביל\"ו",
    "engName": "KEFAR BILU"
  },
  {
    "id": 357,
    "name": "כפר בלום",
    "engName": "KEFAR BLUM"
  },
  {
    "id": 2010,
    "name": "כפר בן נון",
    "engName": "KEFAR BIN NUN"
  },
  {
    "id": 633,
    "name": "כפר ברא",
    "engName": "KAFAR BARA"
  },
  {
    "id": 132,
    "name": "כפר ברוך",
    "engName": "KEFAR BARUKH"
  },
  {
    "id": 106,
    "name": "כפר גדעון",
    "engName": "KEFAR GID'ON"
  },
  {
    "id": 427,
    "name": "כפר גלים",
    "engName": "KEFAR GALLIM"
  },
  {
    "id": 310,
    "name": "כפר גליקסון",
    "engName": "KEFAR GLIKSON"
  },
  {
    "id": 76,
    "name": "כפר גלעדי",
    "engName": "KEFAR GIL'ADI"
  },
  {
    "id": 707,
    "name": "כפר דניאל",
    "engName": "KEFAR DANIYYEL"
  },
  {
    "id": 3796,
    "name": "כפר האורנים",
    "engName": "KEFAR HAORANIM"
  },
  {
    "id": 192,
    "name": "כפר החורש",
    "engName": "KEFAR HAHORESH"
  },
  {
    "id": 254,
    "name": "כפר המכבי",
    "engName": "KEFAR HAMAKKABBI"
  },
  {
    "id": 582,
    "name": "כפר הנגיד",
    "engName": "KEFAR HANAGID"
  },
  {
    "id": 890,
    "name": "כפר הנוער הדתי",
    "engName": "KEFAR HANO'AR HADATI"
  },
  {
    "id": 443,
    "name": "כפר הנשיא",
    "engName": "KEFAR HANASI"
  },
  {
    "id": 187,
    "name": "כפר הס",
    "engName": "KEFAR HESS"
  },
  {
    "id": 217,
    "name": "כפר הרא\"ה",
    "engName": "KEFAR HARO'E"
  },
  {
    "id": 888,
    "name": "כפר הרי\"ף",
    "engName": "KEFAR HARIF"
  },
  {
    "id": 190,
    "name": "כפר ויתקין",
    "engName": "KEFAR VITKIN"
  },
  {
    "id": 320,
    "name": "כפר ורבורג",
    "engName": "KEFAR WARBURG"
  },
  {
    "id": 1263,
    "name": "כפר ורדים",
    "engName": "KEFAR WERADIM"
  },
  {
    "id": 1325,
    "name": "כפר זוהרים",
    "engName": "KEFAR ZOHARIM"
  },
  {
    "id": 786,
    "name": "כפר זיתים",
    "engName": "KEFAR ZETIM"
  },
  {
    "id": 696,
    "name": "כפר חב\"ד",
    "engName": "KEFAR HABAD"
  },
  {
    "id": 609,
    "name": "כפר חושן",
    "engName": "KEFAR HOSHEN"
  },
  {
    "id": 255,
    "name": "כפר חיטים",
    "engName": "KEFAR HITTIM"
  },
  {
    "id": 193,
    "name": "כפר חיים",
    "engName": "KEFAR HAYYIM"
  },
  {
    "id": 1297,
    "name": "כפר חנניה",
    "engName": "KEFAR HANANYA"
  },
  {
    "id": 112,
    "name": "כפר חסידים א'",
    "engName": "KEFAR HASIDIM ALEF"
  },
  {
    "id": 889,
    "name": "כפר חסידים ב'",
    "engName": "KEFAR HASIDIM BET"
  },
  {
    "id": 4004,
    "name": "כפר חרוב",
    "engName": "KEFAR HARUV"
  },
  {
    "id": 673,
    "name": "כפר טרומן",
    "engName": "KEFAR TRUMAN"
  },
  {
    "id": 507,
    "name": "כפר יאסיף",
    "engName": "KAFAR YASIF"
  },
  {
    "id": 233,
    "name": "כפר ידידיה",
    "engName": "KEFAR YEDIDYA"
  },
  {
    "id": 140,
    "name": "כפר יהושע",
    "engName": "KEFAR YEHOSHUA"
  },
  {
    "id": 168,
    "name": "כפר יונה",
    "engName": "KEFAR YONA"
  },
  {
    "id": 85,
    "name": "כפר יחזקאל",
    "engName": "KEFAR YEHEZQEL"
  },
  {
    "id": 170,
    "name": "כפר יעבץ",
    "engName": "KEFAR YA'BEZ"
  },
  {
    "id": 508,
    "name": "כפר כמא",
    "engName": "KAFAR KAMA"
  },
  {
    "id": 509,
    "name": "כפר כנא",
    "engName": "KAFAR KANNA"
  },
  {
    "id": 387,
    "name": "כפר מונש",
    "engName": "KEFAR MONASH"
  },
  {
    "id": 1095,
    "name": "כפר מימון",
    "engName": "KEFAR MAYMON"
  },
  {
    "id": 98,
    "name": "כפר מל\"ל",
    "engName": "KEFAR MALAL"
  },
  {
    "id": 510,
    "name": "כפר מנדא",
    "engName": "KAFAR MANDA"
  },
  {
    "id": 274,
    "name": "כפר מנחם",
    "engName": "KEFAR MENAHEM"
  },
  {
    "id": 297,
    "name": "כפר מסריק",
    "engName": "KEFAR MASARYK"
  },
  {
    "id": 512,
    "name": "כפר מצר",
    "engName": "KAFAR MISR"
  },
  {
    "id": 764,
    "name": "כפר מרדכי",
    "engName": "KEFAR MORDEKHAY"
  },
  {
    "id": 316,
    "name": "כפר נטר",
    "engName": "KEFAR NETTER"
  },
  {
    "id": 345,
    "name": "כפר סאלד",
    "engName": "KEFAR SZOLD"
  },
  {
    "id": 6900,
    "name": "כפר סבא",
    "engName": "KEFAR SAVA"
  },
  {
    "id": 107,
    "name": "כפר סילבר",
    "engName": "KEFAR SILVER"
  },
  {
    "id": 249,
    "name": "כפר סירקין",
    "engName": "KEFAR SIRKIN"
  },
  {
    "id": 875,
    "name": "כפר עבודה",
    "engName": "KEFAR AVODA"
  },
  {
    "id": 845,
    "name": "כפר עזה",
    "engName": "KEFAR AZZA"
  },
  {
    "id": 3488,
    "name": "כפר עציון",
    "engName": "KEFAR EZYON"
  },
  {
    "id": 189,
    "name": "כפר פינס",
    "engName": "KEFAR PINES"
  },
  {
    "id": 634,
    "name": "כפר קאסם",
    "engName": "KAFAR QASEM"
  },
  {
    "id": 388,
    "name": "כפר קיש",
    "engName": "KEFAR KISCH"
  },
  {
    "id": 654,
    "name": "כפר קרע",
    "engName": "KAFAR QARA"
  },
  {
    "id": 579,
    "name": "כפר ראש הנקרה",
    "engName": "KEFAR ROSH HANIQRA"
  },
  {
    "id": 1130,
    "name": "כפר רוזנואלד (זרעית)",
    "engName": "KEFAR ROZENWALD(ZARIT)"
  },
  {
    "id": 295,
    "name": "כפר רופין",
    "engName": "KEFAR RUPPIN"
  },
  {
    "id": 1166,
    "name": "כפר רות",
    "engName": "KEFAR RUT"
  },
  {
    "id": 605,
    "name": "כפר שמאי",
    "engName": "KEFAR SHAMMAY"
  },
  {
    "id": 743,
    "name": "כפר שמואל",
    "engName": "KEFAR SHEMU'EL"
  },
  {
    "id": 267,
    "name": "כפר שמריהו",
    "engName": "KEFAR SHEMARYAHU"
  },
  {
    "id": 47,
    "name": "כפר תבור",
    "engName": "KEFAR TAVOR"
  },
  {
    "id": 3572,
    "name": "כפר תפוח",
    "engName": "KEFAR TAPPUAH"
  },
  {
    "id": 1285,
    "name": "כרכום",
    "engName": "KARKOM"
  },
  {
    "id": 664,
    "name": "כרם בן זמרה",
    "engName": "KEREM BEN ZIMRA"
  },
  {
    "id": 88,
    "name": "כרם בן שמן",
    "engName": "KEREM BEN SHEMEN"
  },
  {
    "id": 1094,
    "name": "כרם יבנה (ישיבה)",
    "engName": "KEREM YAVNE(YESHIVA)"
  },
  {
    "id": 580,
    "name": "כרם מהר\"ל",
    "engName": "KEREM MAHARAL"
  },
  {
    "id": 1085,
    "name": "כרם שלום",
    "engName": "KEREM SHALOM"
  },
  {
    "id": 1264,
    "name": "כרמי יוסף",
    "engName": "KARME YOSEF"
  },
  {
    "id": 3766,
    "name": "כרמי צור",
    "engName": "KARME ZUR"
  },
  {
    "id": 1139,
    "name": "כרמיאל",
    "engName": "KARMI'EL"
  },
  {
    "id": 768,
    "name": "כרמייה",
    "engName": "KARMIYYA"
  },
  {
    "id": 1198,
    "name": "כרמים",
    "engName": "KERAMIM"
  },
  {
    "id": 3656,
    "name": "כרמל",
    "engName": "KARMEL"
  },
  {
    "id": 1207,
    "name": "לבון",
    "engName": "LAVON"
  },
  {
    "id": 585,
    "name": "לביא",
    "engName": "LAVI"
  },
  {
    "id": 1230,
    "name": "לבנים",
    "engName": "LIVNIM"
  },
  {
    "id": 2023,
    "name": "להב",
    "engName": "LAHAV"
  },
  {
    "id": 380,
    "name": "להבות הבשן",
    "engName": "LAHAVOT HABASHAN"
  },
  {
    "id": 715,
    "name": "להבות חביבה",
    "engName": "LAHAVOT HAVIVA"
  },
  {
    "id": 1271,
    "name": "להבים",
    "engName": "LEHAVIM"
  },
  {
    "id": 7000,
    "name": "לוד",
    "engName": "LOD"
  },
  {
    "id": 52,
    "name": "לוזית",
    "engName": "LUZIT"
  },
  {
    "id": 595,
    "name": "לוחמי הגיטאות",
    "engName": "LOHAME HAGETA'OT"
  },
  {
    "id": 1171,
    "name": "לוטם",
    "engName": "LOTEM"
  },
  {
    "id": 1255,
    "name": "לוטן",
    "engName": "LOTAN"
  },
  {
    "id": 674,
    "name": "לימן",
    "engName": "LIMAN"
  },
  {
    "id": 24,
    "name": "לכיש",
    "engName": "LAKHISH"
  },
  {
    "id": 1310,
    "name": "לפיד",
    "engName": "LAPPID"
  },
  {
    "id": 1173,
    "name": "לפידות",
    "engName": "LAPPIDOT"
  },
  {
    "id": 1060,
    "name": "לקיה",
    "engName": "LAQYE"
  },
  {
    "id": 2055,
    "name": "מאור",
    "engName": "MA'OR"
  },
  {
    "id": 102,
    "name": "מאיר שפיה",
    "engName": "ME'IR SHEFEYA"
  },
  {
    "id": 771,
    "name": "מבוא ביתר",
    "engName": "MEVO BETAR"
  },
  {
    "id": 3569,
    "name": "מבוא דותן",
    "engName": "MEVO DOTAN"
  },
  {
    "id": 3709,
    "name": "מבוא חורון",
    "engName": "MEVO HORON"
  },
  {
    "id": 4204,
    "name": "מבוא חמה",
    "engName": "MEVO HAMMA"
  },
  {
    "id": 1141,
    "name": "מבוא מודיעים",
    "engName": "MEVO MODI'IM"
  },
  {
    "id": 1318,
    "name": "מבואות ים",
    "engName": "MEVO'OT YAM"
  },
  {
    "id": 1080,
    "name": "מבועים",
    "engName": "MABBU'IM"
  },
  {
    "id": 829,
    "name": "מבטחים",
    "engName": "MIVTAHIM"
  },
  {
    "id": 573,
    "name": "מבקיעים",
    "engName": "MAVQI'IM"
  },
  {
    "id": 1015,
    "name": "מבשרת ציון",
    "engName": "MEVASSERET ZIYYON"
  },
  {
    "id": 516,
    "name": "מג'ד אל-כרום",
    "engName": "MAJD AL-KURUM"
  },
  {
    "id": 4201,
    "name": "מג'דל שמס",
    "engName": "MAJDAL SHAMS"
  },
  {
    "id": 481,
    "name": "מגאר",
    "engName": "MUGHAR"
  },
  {
    "id": 689,
    "name": "מגדים",
    "engName": "MEGADIM"
  },
  {
    "id": 65,
    "name": "מגדל",
    "engName": "MIGDAL"
  },
  {
    "id": 874,
    "name": "מגדל העמק",
    "engName": "MIGDAL HAEMEQ"
  },
  {
    "id": 3561,
    "name": "מגדל עוז",
    "engName": "MIGDAL OZ"
  },
  {
    "id": 3751,
    "name": "מגדלים",
    "engName": "MIGDALIM"
  },
  {
    "id": 586,
    "name": "מגידו",
    "engName": "MEGIDDO"
  },
  {
    "id": 375,
    "name": "מגל",
    "engName": "MAGGAL"
  },
  {
    "id": 695,
    "name": "מגן",
    "engName": "MAGEN"
  },
  {
    "id": 1155,
    "name": "מגן שאול",
    "engName": "MAGEN SHA'UL"
  },
  {
    "id": 722,
    "name": "מגשימים",
    "engName": "MAGSHIMIM"
  },
  {
    "id": 2029,
    "name": "מדרך עוז",
    "engName": "MIDRAKH OZ"
  },
  {
    "id": 1140,
    "name": "מדרשת בן גוריון",
    "engName": "MIDRESHET BEN GURION"
  },
  {
    "id": 897,
    "name": "מדרשת רופין",
    "engName": "MIDRESHET RUPPIN"
  },
  {
    "id": 3797,
    "name": "מודיעין עילית",
    "engName": "MODI'IN ILLIT"
  },
  {
    "id": 1200,
    "name": "מודיעין-מכבים-רעות*",
    "engName": "MODI'IN-MAKKABBIM-RE'UT"
  },
  {
    "id": 1360,
    "name": "מולדה*",
    "engName": "MOLADA*"
  },
  {
    "id": 269,
    "name": "מולדת",
    "engName": "MOLEDET"
  },
  {
    "id": 208,
    "name": "מוצא עילית",
    "engName": "MOZA ILLIT"
  },
  {
    "id": 635,
    "name": "מוקייבלה",
    "engName": "MUQEIBLE"
  },
  {
    "id": 1163,
    "name": "מורן",
    "engName": "MORAN"
  },
  {
    "id": 1178,
    "name": "מורשת",
    "engName": "MORESHET"
  },
  {
    "id": 606,
    "name": "מזור",
    "engName": "MAZOR"
  },
  {
    "id": 28,
    "name": "מזכרת בתיה",
    "engName": "MAZKERET BATYA"
  },
  {
    "id": 104,
    "name": "מזרע",
    "engName": "MIZRA"
  },
  {
    "id": 517,
    "name": "מזרעה",
    "engName": "MAZRA'A"
  },
  {
    "id": 3599,
    "name": "מחולה",
    "engName": "MEHOLA"
  },
  {
    "id": 1411,
    "name": "מחנה הילה*",
    "engName": "MAHANE HILLA"
  },
  {
    "id": 1418,
    "name": "מחנה טלי*",
    "engName": "MAHANE TALI"
  },
  {
    "id": 1413,
    "name": "מחנה יהודית*",
    "engName": "MAHANE YEHUDIT"
  },
  {
    "id": 1416,
    "name": "מחנה יוכבד*",
    "engName": "MAHANE YOKHEVED"
  },
  {
    "id": 1415,
    "name": "מחנה יפה*",
    "engName": "MAHANE YAFA"
  },
  {
    "id": 1414,
    "name": "מחנה מרים*",
    "engName": "MAHANE MIRYAM"
  },
  {
    "id": 1412,
    "name": "מחנה תל נוף*",
    "engName": "MAHANE TEL NOF"
  },
  {
    "id": 308,
    "name": "מחניים",
    "engName": "MAHANAYIM"
  },
  {
    "id": 776,
    "name": "מחסיה",
    "engName": "MAHSEYA"
  },
  {
    "id": 43,
    "name": "מטולה",
    "engName": "METULA"
  },
  {
    "id": 822,
    "name": "מטע",
    "engName": "MATTA"
  },
  {
    "id": 1128,
    "name": "מי עמי",
    "engName": "ME AMMI"
  },
  {
    "id": 2054,
    "name": "מיטב",
    "engName": "METAV"
  },
  {
    "id": 649,
    "name": "מייסר",
    "engName": "MEISER"
  },
  {
    "id": 4019,
    "name": "מיצר",
    "engName": "MEZAR"
  },
  {
    "id": 1282,
    "name": "מירב",
    "engName": "MERAV"
  },
  {
    "id": 607,
    "name": "מירון",
    "engName": "MERON"
  },
  {
    "id": 731,
    "name": "מישר",
    "engName": "MESHAR"
  },
  {
    "id": 1268,
    "name": "מיתר",
    "engName": "METAR"
  },
  {
    "id": 3614,
    "name": "מכורה",
    "engName": "MEKHORA"
  },
  {
    "id": 1343,
    "name": "מכחול",
    "engName": "MAKCHUL"
  },
  {
    "id": 382,
    "name": "מכמורת",
    "engName": "MIKHMORET"
  },
  {
    "id": 1202,
    "name": "מכמנים",
    "engName": "MIKHMANNIM"
  },
  {
    "id": 164,
    "name": "מלאה",
    "engName": "MELE'A"
  },
  {
    "id": 2044,
    "name": "מלילות",
    "engName": "MELILOT"
  },
  {
    "id": 596,
    "name": "מלכייה",
    "engName": "MALKIYYA"
  },
  {
    "id": 1154,
    "name": "מלכישוע",
    "engName": "MALKISHUA"
  },
  {
    "id": 2030,
    "name": "מנוחה",
    "engName": "MENUHA"
  },
  {
    "id": 1174,
    "name": "מנוף",
    "engName": "MANOF"
  },
  {
    "id": 1205,
    "name": "מנות",
    "engName": "MANOT"
  },
  {
    "id": 48,
    "name": "מנחמיה",
    "engName": "MENAHEMYA"
  },
  {
    "id": 347,
    "name": "מנרה",
    "engName": "MENARA"
  },
  {
    "id": 994,
    "name": "מנשית זבדה",
    "engName": "MANSHIYYET ZABDA"
  },
  {
    "id": 1258,
    "name": "מסד",
    "engName": "MASSAD"
  },
  {
    "id": 263,
    "name": "מסדה",
    "engName": "MASSADA"
  },
  {
    "id": 298,
    "name": "מסילות",
    "engName": "MESILLOT"
  },
  {
    "id": 742,
    "name": "מסילת ציון",
    "engName": "MESILLAT ZIYYON"
  },
  {
    "id": 748,
    "name": "מסלול",
    "engName": "MASLUL"
  },
  {
    "id": 4203,
    "name": "מסעדה",
    "engName": "MAS'ADE"
  },
  {
    "id": 197,
    "name": "מעברות",
    "engName": "MA'BAROT"
  },
  {
    "id": 1082,
    "name": "מעגלים",
    "engName": "MA'GALIM"
  },
  {
    "id": 678,
    "name": "מעגן",
    "engName": "MA'AGAN"
  },
  {
    "id": 694,
    "name": "מעגן מיכאל",
    "engName": "MA'AGAN MIKHA'EL"
  },
  {
    "id": 272,
    "name": "מעוז חיים",
    "engName": "MA'OZ HAYYIM"
  },
  {
    "id": 3657,
    "name": "מעון",
    "engName": "MA'ON"
  },
  {
    "id": 570,
    "name": "מעונה",
    "engName": "ME'ONA"
  },
  {
    "id": 416,
    "name": "מעיין ברוך",
    "engName": "MA'YAN BARUKH"
  },
  {
    "id": 290,
    "name": "מעיין צבי",
    "engName": "MA'YAN ZEVI"
  },
  {
    "id": 518,
    "name": "מעיליא",
    "engName": "MI'ELYA"
  },
  {
    "id": 3616,
    "name": "מעלה אדומים",
    "engName": "MA'ALE ADUMMIM"
  },
  {
    "id": 3608,
    "name": "מעלה אפרים",
    "engName": "MA'ALE EFRAYIM"
  },
  {
    "id": 1127,
    "name": "מעלה גלבוע",
    "engName": "MA'ALE GILBOA"
  },
  {
    "id": 4008,
    "name": "מעלה גמלא",
    "engName": "MA'ALE GAMLA"
  },
  {
    "id": 286,
    "name": "מעלה החמישה",
    "engName": "MA'ALE HAHAMISHA"
  },
  {
    "id": 3752,
    "name": "מעלה לבונה",
    "engName": "MA'ALE LEVONA"
  },
  {
    "id": 3651,
    "name": "מעלה מכמש",
    "engName": "MA'ALE MIKHMAS"
  },
  {
    "id": 1327,
    "name": "מעלה עירון",
    "engName": "MA'ALE IRON"
  },
  {
    "id": 3653,
    "name": "מעלה עמוס",
    "engName": "MA'ALE AMOS"
  },
  {
    "id": 3637,
    "name": "מעלה שומרון",
    "engName": "MA'ALE SHOMERON"
  },
  {
    "id": 1063,
    "name": "מעלות-תרשיחא",
    "engName": "MA'ALOT-TARSHIHA"
  },
  {
    "id": 344,
    "name": "מענית",
    "engName": "MA'ANIT"
  },
  {
    "id": 230,
    "name": "מעש",
    "engName": "MA'AS"
  },
  {
    "id": 668,
    "name": "מפלסים",
    "engName": "MEFALLESIM"
  },
  {
    "id": 3745,
    "name": "מצדות יהודה",
    "engName": "MEZADOT YEHUDA"
  },
  {
    "id": 325,
    "name": "מצובה",
    "engName": "MAZZUVA"
  },
  {
    "id": 757,
    "name": "מצליח",
    "engName": "MAZLIAH"
  },
  {
    "id": 58,
    "name": "מצפה",
    "engName": "MIZPA"
  },
  {
    "id": 1222,
    "name": "מצפה אבי\"ב",
    "engName": "MIZPE AVIV"
  },
  {
    "id": 1370,
    "name": "מצפה אילן",
    "engName": "MITSPE ILAN"
  },
  {
    "id": 3576,
    "name": "מצפה יריחו",
    "engName": "MIZPE YERIHO"
  },
  {
    "id": 1190,
    "name": "מצפה נטופה",
    "engName": "MIZPE NETOFA"
  },
  {
    "id": 99,
    "name": "מצפה רמון",
    "engName": "MIZPE RAMON"
  },
  {
    "id": 3610,
    "name": "מצפה שלם",
    "engName": "MIZPE SHALEM"
  },
  {
    "id": 648,
    "name": "מצר",
    "engName": "MEZER"
  },
  {
    "id": 843,
    "name": "מרגליות",
    "engName": "MARGALIYYOT"
  },
  {
    "id": 4101,
    "name": "מרום גולן",
    "engName": "MEROM GOLAN"
  },
  {
    "id": 1340,
    "name": "מרחב עם",
    "engName": "MERHAV AM"
  },
  {
    "id": 97,
    "name": "מרחביה (מושב)",
    "engName": "MERHAVYA(MOSHAV)"
  },
  {
    "id": 66,
    "name": "מרחביה (קיבוץ)",
    "engName": "MERHAVYA(QIBBUZ)"
  },
  {
    "id": 1098,
    "name": "מרכז שפירא",
    "engName": "MERKAZ SHAPPIRA"
  },
  {
    "id": 421,
    "name": "משאבי שדה",
    "engName": "MASH'ABBE SADE"
  },
  {
    "id": 765,
    "name": "משגב דב",
    "engName": "MISGAV DOV"
  },
  {
    "id": 378,
    "name": "משגב עם",
    "engName": "MISGAV AM"
  },
  {
    "id": 520,
    "name": "משהד",
    "engName": "MESHHED"
  },
  {
    "id": 3605,
    "name": "משואה",
    "engName": "MASSU'A"
  },
  {
    "id": 620,
    "name": "משואות יצחק",
    "engName": "MASSU'OT YIZHAQ"
  },
  {
    "id": 3785,
    "name": "משכיות",
    "engName": "MASKIYYOT"
  },
  {
    "id": 670,
    "name": "משמר איילון",
    "engName": "MISHMAR AYYALON"
  },
  {
    "id": 563,
    "name": "משמר דוד",
    "engName": "MISHMAR DAWID"
  },
  {
    "id": 732,
    "name": "משמר הירדן",
    "engName": "MISHMAR HAYARDEN"
  },
  {
    "id": 395,
    "name": "משמר הנגב",
    "engName": "MISHMAR HANEGEV"
  },
  {
    "id": 130,
    "name": "משמר העמק",
    "engName": "MISHMAR HAEMEQ"
  },
  {
    "id": 729,
    "name": "משמר השבעה",
    "engName": "MISHMAR HASHIV'A"
  },
  {
    "id": 194,
    "name": "משמר השרון",
    "engName": "MISHMAR HASHARON"
  },
  {
    "id": 213,
    "name": "משמרות",
    "engName": "MISHMAROT"
  },
  {
    "id": 425,
    "name": "משמרת",
    "engName": "MISHMERET"
  },
  {
    "id": 791,
    "name": "משען",
    "engName": "MASH'EN"
  },
  {
    "id": 1315,
    "name": "מתן",
    "engName": "MATTAN"
  },
  {
    "id": 1184,
    "name": "מתת",
    "engName": "MATTAT"
  },
  {
    "id": 3648,
    "name": "מתתיהו",
    "engName": "MATTITYAHU"
  },
  {
    "id": 4551,
    "name": "נאות גולן",
    "engName": "NE'OT GOLAN"
  },
  {
    "id": 1124,
    "name": "נאות הכיכר",
    "engName": "NE'OT HAKIKKAR"
  },
  {
    "id": 408,
    "name": "נאות מרדכי",
    "engName": "NE'OT MORDEKHAY"
  },
  {
    "id": 1197,
    "name": "נאות סמדר",
    "engName": "NE'OT SMADAR"
  },
  {
    "id": 524,
    "name": "נאעורה",
    "engName": "NA'URA"
  },
  {
    "id": 396,
    "name": "נבטים",
    "engName": "NEVATIM"
  },
  {
    "id": 315,
    "name": "נגבה",
    "engName": "NEGBA"
  },
  {
    "id": 3724,
    "name": "נגוהות",
    "engName": "NEGOHOT"
  },
  {
    "id": 309,
    "name": "נהורה",
    "engName": "NEHORA"
  },
  {
    "id": 80,
    "name": "נהלל",
    "engName": "NAHALAL"
  },
  {
    "id": 9100,
    "name": "נהרייה",
    "engName": "NAHARIYYA"
  },
  {
    "id": 4304,
    "name": "נוב",
    "engName": "NOV"
  },
  {
    "id": 55,
    "name": "נוגה",
    "engName": "NOGAH"
  },
  {
    "id": 1366,
    "name": "נווה",
    "engName": "NAVE"
  },
  {
    "id": 590,
    "name": "נווה אור",
    "engName": "NEWE UR"
  },
  {
    "id": 4303,
    "name": "נווה אטי\"ב",
    "engName": "NEWE ATIV"
  },
  {
    "id": 405,
    "name": "נווה אילן",
    "engName": "NEWE ILAN"
  },
  {
    "id": 296,
    "name": "נווה איתן",
    "engName": "NEWE ETAN"
  },
  {
    "id": 3725,
    "name": "נווה דניאל",
    "engName": "NEWE DANIYYEL"
  },
  {
    "id": 1057,
    "name": "נווה זוהר",
    "engName": "NEWE ZOHAR"
  },
  {
    "id": 1314,
    "name": "נווה זיו",
    "engName": "NEWE ZIV"
  },
  {
    "id": 1279,
    "name": "נווה חריף",
    "engName": "NEWE HARIF"
  },
  {
    "id": 312,
    "name": "נווה ים",
    "engName": "NEWE YAM"
  },
  {
    "id": 686,
    "name": "נווה ימין",
    "engName": "NEWE YAMIN"
  },
  {
    "id": 858,
    "name": "נווה ירק",
    "engName": "NEWE YARAQ"
  },
  {
    "id": 827,
    "name": "נווה מבטח",
    "engName": "NEWE MIVTAH"
  },
  {
    "id": 1071,
    "name": "נווה מיכאל",
    "engName": "NEWE MIKHA'EL"
  },
  {
    "id": 1259,
    "name": "נווה שלום",
    "engName": "NEWE SHALOM"
  },
  {
    "id": 15,
    "name": "נועם",
    "engName": "NO'AM"
  },
  {
    "id": 1333,
    "name": "נוף איילון",
    "engName": "NOF AYYALON"
  },
  {
    "id": 3790,
    "name": "נופים",
    "engName": "NOFIM"
  },
  {
    "id": 1284,
    "name": "נופית",
    "engName": "NOFIT"
  },
  {
    "id": 257,
    "name": "נופך",
    "engName": "NOFEKH"
  },
  {
    "id": 3726,
    "name": "נוקדים",
    "engName": "NOQEDIM"
  },
  {
    "id": 447,
    "name": "נורדייה",
    "engName": "NORDIYYA"
  },
  {
    "id": 833,
    "name": "נורית",
    "engName": "NURIT"
  },
  {
    "id": 59,
    "name": "נחושה",
    "engName": "NEHUSHA"
  },
  {
    "id": 844,
    "name": "נחל עוז",
    "engName": "NAHAL OZ"
  },
  {
    "id": 2045,
    "name": "נחלה",
    "engName": "NAHALA"
  },
  {
    "id": 3767,
    "name": "נחליאל",
    "engName": "NAHALI'EL"
  },
  {
    "id": 449,
    "name": "נחלים",
    "engName": "NEHALIM"
  },
  {
    "id": 809,
    "name": "נחם",
    "engName": "NAHAM"
  },
  {
    "id": 522,
    "name": "נחף",
    "engName": "NAHEF"
  },
  {
    "id": 433,
    "name": "נחשולים",
    "engName": "NAHSHOLIM"
  },
  {
    "id": 777,
    "name": "נחשון",
    "engName": "NAHSHON"
  },
  {
    "id": 705,
    "name": "נחשונים",
    "engName": "NAHSHONIM"
  },
  {
    "id": 1147,
    "name": "נטועה",
    "engName": "NETU'A"
  },
  {
    "id": 4014,
    "name": "נטור",
    "engName": "NATUR"
  },
  {
    "id": 1369,
    "name": "נטע",
    "engName": "NETA"
  },
  {
    "id": 174,
    "name": "נטעים",
    "engName": "NETA'IM"
  },
  {
    "id": 1254,
    "name": "נטף",
    "engName": "NATAF"
  },
  {
    "id": 523,
    "name": "ניין",
    "engName": "NEIN"
  },
  {
    "id": 3655,
    "name": "ניל\"י",
    "engName": "NILI"
  },
  {
    "id": 351,
    "name": "ניצן",
    "engName": "NIZZAN"
  },
  {
    "id": 1419,
    "name": "ניצן ב'",
    "engName": "NIZZAN B"
  },
  {
    "id": 1195,
    "name": "ניצנה (קהילת חינוך)",
    "engName": "NIZZANA (QEHILAT HINUH)"
  },
  {
    "id": 1280,
    "name": "ניצני סיני",
    "engName": "NIZZANE SINAY"
  },
  {
    "id": 851,
    "name": "ניצני עוז",
    "engName": "NIZZANE OZ"
  },
  {
    "id": 359,
    "name": "ניצנים",
    "engName": "NIZZANIM"
  },
  {
    "id": 808,
    "name": "ניר אליהו",
    "engName": "NIR ELIYYAHU"
  },
  {
    "id": 553,
    "name": "ניר בנים",
    "engName": "NIR BANIM"
  },
  {
    "id": 720,
    "name": "ניר גלים",
    "engName": "NIR GALLIM"
  },
  {
    "id": 256,
    "name": "ניר דוד (תל עמל)",
    "engName": "NIR DAWID (TEL AMAL)"
  },
  {
    "id": 11,
    "name": "ניר ח\"ן",
    "engName": "NIR HEN"
  },
  {
    "id": 165,
    "name": "ניר יפה",
    "engName": "NIR YAFE"
  },
  {
    "id": 402,
    "name": "ניר יצחק",
    "engName": "NIR YIZHAQ"
  },
  {
    "id": 699,
    "name": "ניר ישראל",
    "engName": "NIR YISRA'EL"
  },
  {
    "id": 2047,
    "name": "ניר משה",
    "engName": "NIR MOSHE"
  },
  {
    "id": 69,
    "name": "ניר עוז",
    "engName": "NIR OZ"
  },
  {
    "id": 348,
    "name": "ניר עם",
    "engName": "NIR AM"
  },
  {
    "id": 769,
    "name": "ניר עציון",
    "engName": "NIR EZYON"
  },
  {
    "id": 2048,
    "name": "ניר עקיבא",
    "engName": "NIR AQIVA"
  },
  {
    "id": 331,
    "name": "ניר צבי",
    "engName": "NIR ZEVI"
  },
  {
    "id": 602,
    "name": "נירים",
    "engName": "NIRIM"
  },
  {
    "id": 1236,
    "name": "נירית",
    "engName": "NIRIT"
  },
  {
    "id": 3620,
    "name": "נירן",
    "engName": "NIRAN"
  },
  {
    "id": 825,
    "name": "נס הרים",
    "engName": "NES HARIM"
  },
  {
    "id": 1143,
    "name": "נס עמים",
    "engName": "NES AMMIM"
  },
  {
    "id": 7200,
    "name": "נס ציונה",
    "engName": "NES ZIYYONA"
  },
  {
    "id": 186,
    "name": "נעורים",
    "engName": "NE'URIM"
  },
  {
    "id": 3787,
    "name": "נעלה",
    "engName": "NA'ALE"
  },
  {
    "id": 3713,
    "name": "נעמ\"ה",
    "engName": "NA'AMA"
  },
  {
    "id": 158,
    "name": "נען",
    "engName": "NA'AN"
  },
  {
    "id": 1372,
    "name": "נצר חזני",
    "engName": "NEZER HAZZANI"
  },
  {
    "id": 435,
    "name": "נצר סרני",
    "engName": "NEZER SERENI"
  },
  {
    "id": 7300,
    "name": "נצרת",
    "engName": "NAZARETH"
  },
  {
    "id": 1061,
    "name": "נצרת עילית",
    "engName": "NAZERAT ILLIT"
  },
  {
    "id": 2500,
    "name": "נשר",
    "engName": "NESHER"
  },
  {
    "id": 3555,
    "name": "נתיב הגדוד",
    "engName": "NETIV HAGEDUD"
  },
  {
    "id": 693,
    "name": "נתיב הל\"ה",
    "engName": "NETIV HALAMED-HE"
  },
  {
    "id": 1242,
    "name": "נתיב העשרה",
    "engName": "NETIV HAASARA"
  },
  {
    "id": 792,
    "name": "נתיב השיירה",
    "engName": "NETIV HASHAYYARA"
  },
  {
    "id": 246,
    "name": "נתיבות",
    "engName": "NETIVOT"
  },
  {
    "id": 7400,
    "name": "נתניה",
    "engName": "NETANYA"
  },
  {
    "id": 525,
    "name": "סאג'ור",
    "engName": "SAJUR"
  },
  {
    "id": 578,
    "name": "סאסא",
    "engName": "SASA"
  },
  {
    "id": 587,
    "name": "סביון*",
    "engName": "SAVYON"
  },
  {
    "id": 2046,
    "name": "סגולה",
    "engName": "SEGULLA"
  },
  {
    "id": 942,
    "name": "סואעד (חמרייה)*",
    "engName": "SAWA'ID(HAMRIYYE)"
  },
  {
    "id": 526,
    "name": "סולם",
    "engName": "SULAM"
  },
  {
    "id": 3756,
    "name": "סוסיה",
    "engName": "SUSEYA"
  },
  {
    "id": 1238,
    "name": "סופה",
    "engName": "SUFA"
  },
  {
    "id": 7500,
    "name": "סח'נין",
    "engName": "SAKHNIN"
  },
  {
    "id": 1245,
    "name": "סלמה",
    "engName": "SALLAMA"
  },
  {
    "id": 3567,
    "name": "סלעית",
    "engName": "SAL'IT"
  },
  {
    "id": 1156,
    "name": "סמר",
    "engName": "SAMAR"
  },
  {
    "id": 3777,
    "name": "סנסנה",
    "engName": "SANSANA"
  },
  {
    "id": 419,
    "name": "סעד",
    "engName": "SA'AD"
  },
  {
    "id": 454,
    "name": "סער",
    "engName": "SA'AR"
  },
  {
    "id": 1176,
    "name": "ספיר",
    "engName": "SAPPIR"
  },
  {
    "id": 610,
    "name": "סתרייה",
    "engName": "SITRIYYA"
  },
  {
    "id": 4501,
    "name": "ע'ג'ר",
    "engName": "GHAJAR"
  },
  {
    "id": 892,
    "name": "עבדון",
    "engName": "AVDON"
  },
  {
    "id": 376,
    "name": "עברון",
    "engName": "EVRON"
  },
  {
    "id": 794,
    "name": "עגור",
    "engName": "AGUR"
  },
  {
    "id": 1199,
    "name": "עדי",
    "engName": "ADI"
  },
  {
    "id": 2035,
    "name": "עדנים",
    "engName": "ADANIM"
  },
  {
    "id": 826,
    "name": "עוזה",
    "engName": "UZA"
  },
  {
    "id": 528,
    "name": "עוזייר",
    "engName": "UZEIR"
  },
  {
    "id": 737,
    "name": "עולש",
    "engName": "OLESH"
  },
  {
    "id": 666,
    "name": "עומר",
    "engName": "OMER"
  },
  {
    "id": 810,
    "name": "עופר",
    "engName": "OFER"
  },
  {
    "id": 32,
    "name": "עוצם",
    "engName": "OZEM"
  },
  {
    "id": 328,
    "name": "עזוז",
    "engName": "EZUZ"
  },
  {
    "id": 1149,
    "name": "עזר",
    "engName": "EZER"
  },
  {
    "id": 837,
    "name": "עזריאל",
    "engName": "AZRI'EL"
  },
  {
    "id": 711,
    "name": "עזריה",
    "engName": "AZARYA"
  },
  {
    "id": 817,
    "name": "עזריקם",
    "engName": "AZRIQAM"
  },
  {
    "id": 3658,
    "name": "עטרת",
    "engName": "ATERET"
  },
  {
    "id": 1175,
    "name": "עידן",
    "engName": "IDDAN"
  },
  {
    "id": 530,
    "name": "עיילבון",
    "engName": "EILABUN"
  },
  {
    "id": 156,
    "name": "עיינות",
    "engName": "AYANOT"
  },
  {
    "id": 511,
    "name": "עילוט",
    "engName": "ILUT"
  },
  {
    "id": 687,
    "name": "עין איילה",
    "engName": "EN AYYALA"
  },
  {
    "id": 546,
    "name": "עין אל-אסד",
    "engName": "EIN AL-ASAD"
  },
  {
    "id": 273,
    "name": "עין גב",
    "engName": "EN GEV"
  },
  {
    "id": 2042,
    "name": "עין גדי",
    "engName": "EN GEDI"
  },
  {
    "id": 436,
    "name": "עין דור",
    "engName": "EN DOR"
  },
  {
    "id": 1240,
    "name": "עין הבשור",
    "engName": "EN HABESOR"
  },
  {
    "id": 74,
    "name": "עין הוד",
    "engName": "EN HOD"
  },
  {
    "id": 167,
    "name": "עין החורש",
    "engName": "EN HAHORESH"
  },
  {
    "id": 289,
    "name": "עין המפרץ",
    "engName": "EN HAMIFRAZ"
  },
  {
    "id": 383,
    "name": "עין הנצי\"ב",
    "engName": "EN HANAZIV"
  },
  {
    "id": 367,
    "name": "עין העמק",
    "engName": "EN HAEMEQ"
  },
  {
    "id": 270,
    "name": "עין השופט",
    "engName": "EN HASHOFET"
  },
  {
    "id": 676,
    "name": "עין השלושה",
    "engName": "EN HASHELOSHA"
  },
  {
    "id": 157,
    "name": "עין ורד",
    "engName": "EN WERED"
  },
  {
    "id": 4503,
    "name": "עין זיוון",
    "engName": "EN ZIWAN"
  },
  {
    "id": 1320,
    "name": "עין חוד",
    "engName": "EIN HOD"
  },
  {
    "id": 1053,
    "name": "עין חצבה",
    "engName": "EN HAZEVA"
  },
  {
    "id": 89,
    "name": "עין חרוד (איחוד)",
    "engName": "EN HAROD (IHUD)"
  },
  {
    "id": 82,
    "name": "עין חרוד (מאוחד)",
    "engName": "EN HAROD(ME'UHAD)"
  },
  {
    "id": 806,
    "name": "עין יהב",
    "engName": "EN YAHAV"
  },
  {
    "id": 813,
    "name": "עין יעקב",
    "engName": "EN YA'AQOV"
  },
  {
    "id": 1056,
    "name": "עין כרם-בי\"ס חקלאי",
    "engName": "EN KAREM-B.S.HAQLA'I"
  },
  {
    "id": 426,
    "name": "עין כרמל",
    "engName": "EN KARMEL"
  },
  {
    "id": 532,
    "name": "עין מאהל",
    "engName": "EIN MAHEL"
  },
  {
    "id": 521,
    "name": "עין נקובא",
    "engName": "EIN NAQQUBA"
  },
  {
    "id": 223,
    "name": "עין עירון",
    "engName": "EN IRON"
  },
  {
    "id": 622,
    "name": "עין צורים",
    "engName": "EN ZURIM"
  },
  {
    "id": 4502,
    "name": "עין קנייא",
    "engName": "EIN QINIYYE"
  },
  {
    "id": 514,
    "name": "עין ראפה",
    "engName": "EIN RAFA"
  },
  {
    "id": 139,
    "name": "עין שמר",
    "engName": "EN SHEMER"
  },
  {
    "id": 880,
    "name": "עין שריד",
    "engName": "EN SARID"
  },
  {
    "id": 1251,
    "name": "עין תמר",
    "engName": "EN TAMAR"
  },
  {
    "id": 871,
    "name": "עינת",
    "engName": "ENAT"
  },
  {
    "id": 1187,
    "name": "עיר אובות",
    "engName": "IR OVOT"
  },
  {
    "id": 7600,
    "name": "עכו",
    "engName": "AKKO"
  },
  {
    "id": 1146,
    "name": "עלומים",
    "engName": "ALUMIM"
  },
  {
    "id": 3765,
    "name": "עלי",
    "engName": "ELI"
  },
  {
    "id": 3727,
    "name": "עלי זהב",
    "engName": "ALE ZAHAV"
  },
  {
    "id": 688,
    "name": "עלמה",
    "engName": "ALMA"
  },
  {
    "id": 3715,
    "name": "עלמון",
    "engName": "ALMON"
  },
  {
    "id": 1212,
    "name": "עמוקה",
    "engName": "AMUQQA"
  },
  {
    "id": 779,
    "name": "עמינדב",
    "engName": "AMMINADAV"
  },
  {
    "id": 385,
    "name": "עמיעד",
    "engName": "AMMI'AD"
  },
  {
    "id": 318,
    "name": "עמיעוז",
    "engName": "AMMI'OZ"
  },
  {
    "id": 773,
    "name": "עמיקם",
    "engName": "AMMIQAM"
  },
  {
    "id": 319,
    "name": "עמיר",
    "engName": "AMIR"
  },
  {
    "id": 3660,
    "name": "עמנואל",
    "engName": "IMMANU'EL"
  },
  {
    "id": 708,
    "name": "עמקה",
    "engName": "AMQA"
  },
  {
    "id": 3712,
    "name": "ענב",
    "engName": "ENAV"
  },
  {
    "id": 534,
    "name": "עספיא",
    "engName": "ISIFYA"
  },
  {
    "id": 7700,
    "name": "עפולה",
    "engName": "AFULA"
  },
  {
    "id": 3617,
    "name": "עפרה",
    "engName": "OFRA"
  },
  {
    "id": 3778,
    "name": "עץ אפרים",
    "engName": "EZ EFRAYIM"
  },
  {
    "id": 917,
    "name": "עצמון שגב",
    "engName": "ATSMON SEGEV"
  },
  {
    "id": 531,
    "name": "עראבה",
    "engName": "ARRABE"
  },
  {
    "id": 1246,
    "name": "עראמשה*",
    "engName": "ARAMSHA"
  },
  {
    "id": 1335,
    "name": "ערב אל נעים",
    "engName": "ARAB AL NAIM"
  },
  {
    "id": 2560,
    "name": "ערד",
    "engName": "ARAD"
  },
  {
    "id": 593,
    "name": "ערוגות",
    "engName": "ARUGOT"
  },
  {
    "id": 637,
    "name": "ערערה",
    "engName": "AR'ARA"
  },
  {
    "id": 1192,
    "name": "ערערה-בנגב",
    "engName": "AR'ARA-BANEGEV"
  },
  {
    "id": 591,
    "name": "עשרת",
    "engName": "ASERET"
  },
  {
    "id": 53,
    "name": "עתלית",
    "engName": "ATLIT"
  },
  {
    "id": 3748,
    "name": "עתניאל",
    "engName": "OTNI'EL"
  },
  {
    "id": 1151,
    "name": "פארן",
    "engName": "PARAN"
  },
  {
    "id": 3768,
    "name": "פדואל",
    "engName": "PEDU'EL"
  },
  {
    "id": 750,
    "name": "פדויים",
    "engName": "PEDUYIM"
  },
  {
    "id": 838,
    "name": "פדיה",
    "engName": "PEDAYA"
  },
  {
    "id": 537,
    "name": "פוריידיס",
    "engName": "FUREIDIS"
  },
  {
    "id": 1104,
    "name": "פורייה - כפר עבודה",
    "engName": "PORIYYA-KEFAR AVODA"
  },
  {
    "id": 1105,
    "name": "פורייה - נווה עובד",
    "engName": "PORIYYA-NEWE OVED"
  },
  {
    "id": 1313,
    "name": "פורייה עילית",
    "engName": "PORIYYA ILLIT"
  },
  {
    "id": 767,
    "name": "פורת",
    "engName": "PORAT"
  },
  {
    "id": 749,
    "name": "פטיש",
    "engName": "PATTISH"
  },
  {
    "id": 1185,
    "name": "פלך",
    "engName": "PELEKH"
  },
  {
    "id": 597,
    "name": "פלמחים",
    "engName": "PALMAHIM"
  },
  {
    "id": 3723,
    "name": "פני חבר",
    "engName": "PENE HEVER"
  },
  {
    "id": 3659,
    "name": "פסגות",
    "engName": "PESAGOT"
  },
  {
    "id": 535,
    "name": "פסוטה",
    "engName": "FASSUTA"
  },
  {
    "id": 2059,
    "name": "פעמי תש\"ז",
    "engName": "PA'AME TASHAZ"
  },
  {
    "id": 3615,
    "name": "פצאל",
    "engName": "PEZA'EL"
  },
  {
    "id": 536,
    "name": "פקיעין (בוקייעה)",
    "engName": "PEQI'IN (BUQEI'A)"
  },
  {
    "id": 281,
    "name": "פקיעין חדשה",
    "engName": "PEQI'IN HADASHA"
  },
  {
    "id": 7800,
    "name": "פרדס חנה-כרכור",
    "engName": "PARDES HANNA-KARKUR"
  },
  {
    "id": 171,
    "name": "פרדסייה",
    "engName": "PARDESIYYA"
  },
  {
    "id": 599,
    "name": "פרוד",
    "engName": "PAROD"
  },
  {
    "id": 2053,
    "name": "פרזון",
    "engName": "PERAZON"
  },
  {
    "id": 1231,
    "name": "פרי גן",
    "engName": "PERI GAN"
  },
  {
    "id": 7900,
    "name": "פתח תקווה",
    "engName": "PETAH TIQWA"
  },
  {
    "id": 839,
    "name": "פתחיה",
    "engName": "PETAHYA"
  },
  {
    "id": 413,
    "name": "צאלים",
    "engName": "ZE'ELIM"
  },
  {
    "id": 1180,
    "name": "צביה",
    "engName": "ZVIYYA"
  },
  {
    "id": 1213,
    "name": "צבעון",
    "engName": "ZIV'ON"
  },
  {
    "id": 465,
    "name": "צובה",
    "engName": "ZOVA"
  },
  {
    "id": 1136,
    "name": "צוחר",
    "engName": "ZOHAR"
  },
  {
    "id": 1111,
    "name": "צופייה",
    "engName": "ZOFIYYA"
  },
  {
    "id": 3791,
    "name": "צופים",
    "engName": "ZUFIM"
  },
  {
    "id": 198,
    "name": "צופית",
    "engName": "ZOFIT"
  },
  {
    "id": 1150,
    "name": "צופר",
    "engName": "ZOFAR"
  },
  {
    "id": 1102,
    "name": "צוקי ים",
    "engName": "ZUQI YAM"
  },
  {
    "id": 1262,
    "name": "צוקים",
    "engName": "ZUQIM"
  },
  {
    "id": 1113,
    "name": "צור הדסה",
    "engName": "ZUR HADASSA"
  },
  {
    "id": 1345,
    "name": "צור יצחק",
    "engName": "ZUR YIZHAQ"
  },
  {
    "id": 276,
    "name": "צור משה",
    "engName": "ZUR MOSHE"
  },
  {
    "id": 1148,
    "name": "צור נתן",
    "engName": "ZUR NATAN"
  },
  {
    "id": 774,
    "name": "צוריאל",
    "engName": "ZURI'EL"
  },
  {
    "id": 1221,
    "name": "צורית",
    "engName": "ZURIT"
  },
  {
    "id": 613,
    "name": "ציפורי",
    "engName": "ZIPPORI"
  },
  {
    "id": 796,
    "name": "צלפון",
    "engName": "ZELAFON"
  },
  {
    "id": 636,
    "name": "צנדלה",
    "engName": "SANDALA"
  },
  {
    "id": 594,
    "name": "צפרייה",
    "engName": "ZAFRIYYA"
  },
  {
    "id": 1079,
    "name": "צפרירים",
    "engName": "ZAFRIRIM"
  },
  {
    "id": 8000,
    "name": "צפת",
    "engName": "ZEFAT"
  },
  {
    "id": 612,
    "name": "צרופה",
    "engName": "ZERUFA"
  },
  {
    "id": 567,
    "name": "צרעה",
    "engName": "ZOR'A"
  },
  {
    "id": 334,
    "name": "קבוצת יבנה",
    "engName": "QEVUZAT YAVNE"
  },
  {
    "id": 3557,
    "name": "קדומים",
    "engName": "QEDUMIM"
  },
  {
    "id": 195,
    "name": "קדימה-צורן",
    "engName": "QADIMA-ZORAN"
  },
  {
    "id": 392,
    "name": "קדמה",
    "engName": "QEDMA"
  },
  {
    "id": 4025,
    "name": "קדמת צבי",
    "engName": "QIDMAT ZEVI"
  },
  {
    "id": 3781,
    "name": "קדר",
    "engName": "QEDAR"
  },
  {
    "id": 615,
    "name": "קדרון",
    "engName": "QIDRON"
  },
  {
    "id": 1211,
    "name": "קדרים",
    "engName": "QADDARIM"
  },
  {
    "id": 766,
    "name": "קוממיות",
    "engName": "QOMEMIYYUT"
  },
  {
    "id": 1179,
    "name": "קורנית",
    "engName": "QORANIT"
  },
  {
    "id": 1052,
    "name": "קטורה",
    "engName": "QETURA"
  },
  {
    "id": 1167,
    "name": "קיסריה",
    "engName": "QESARYYA"
  },
  {
    "id": 414,
    "name": "קלחים",
    "engName": "QELAHIM"
  },
  {
    "id": 3601,
    "name": "קליה",
    "engName": "QALYA"
  },
  {
    "id": 638,
    "name": "קלנסווה",
    "engName": "QALANSAWE"
  },
  {
    "id": 4024,
    "name": "קלע",
    "engName": "QELA"
  },
  {
    "id": 1243,
    "name": "קציר                ",
    "engName": "QAZIR"
  },
  {
    "id": 1347,
    "name": "קצר א-סר",
    "engName": "QASR A-SIR"
  },
  {
    "id": 4100,
    "name": "קצרין",
    "engName": "QAZRIN"
  },
  {
    "id": 2620,
    "name": "קריית אונו",
    "engName": "QIRYAT ONO"
  },
  {
    "id": 3611,
    "name": "קריית ארבע",
    "engName": "QIRYAT ARBA"
  },
  {
    "id": 6800,
    "name": "קריית אתא",
    "engName": "QIRYAT ATTA"
  },
  {
    "id": 9500,
    "name": "קריית ביאליק",
    "engName": "QIRYAT BIALIK"
  },
  {
    "id": 2630,
    "name": "קריית גת",
    "engName": "QIRYAT GAT"
  },
  {
    "id": 2300,
    "name": "קריית טבעון",
    "engName": "QIRYAT TIV'ON"
  },
  {
    "id": 9600,
    "name": "קריית ים",
    "engName": "QIRYAT YAM"
  },
  {
    "id": 1137,
    "name": "קריית יערים",
    "engName": "QIRYAT YE'ARIM"
  },
  {
    "id": 2039,
    "name": "קריית יערים (מוסד)",
    "engName": "QIRYAT YE'ARIM(INSTITUTE)"
  },
  {
    "id": 8200,
    "name": "קריית מוצקין",
    "engName": "QIRYAT MOTZKIN"
  },
  {
    "id": 1034,
    "name": "קריית מלאכי",
    "engName": "QIRYAT MAL'AKHI"
  },
  {
    "id": 3746,
    "name": "קריית נטפים",
    "engName": "QIRYAT NETAFIM"
  },
  {
    "id": 78,
    "name": "קריית ענבים",
    "engName": "QIRYAT ANAVIM"
  },
  {
    "id": 469,
    "name": "קריית עקרון",
    "engName": "QIRYAT EQRON"
  },
  {
    "id": 412,
    "name": "קריית שלמה",
    "engName": "QIRYAT SHELOMO"
  },
  {
    "id": 2800,
    "name": "קריית שמונה",
    "engName": "QIRYAT SHEMONA"
  },
  {
    "id": 3640,
    "name": "קרני שומרון",
    "engName": "QARNE SHOMERON"
  },
  {
    "id": 4006,
    "name": "קשת",
    "engName": "QESHET"
  },
  {
    "id": 543,
    "name": "ראמה",
    "engName": "RAME"
  },
  {
    "id": 1334,
    "name": "ראס אל-עין",
    "engName": "RAS AL-EIN"
  },
  {
    "id": 990,
    "name": "ראס עלי",
    "engName": "RAS ALI"
  },
  {
    "id": 2640,
    "name": "ראש העין",
    "engName": "ROSH HAAYIN"
  },
  {
    "id": 26,
    "name": "ראש פינה",
    "engName": "ROSH PINNA"
  },
  {
    "id": 3602,
    "name": "ראש צורים",
    "engName": "ROSH ZURIM"
  },
  {
    "id": 8300,
    "name": "ראשון לציון",
    "engName": "RISHON LEZIYYON"
  },
  {
    "id": 3795,
    "name": "רבבה",
    "engName": "REVAVA"
  },
  {
    "id": 564,
    "name": "רבדים",
    "engName": "REVADIM"
  },
  {
    "id": 354,
    "name": "רביבים",
    "engName": "REVIVIM"
  },
  {
    "id": 1225,
    "name": "רביד",
    "engName": "RAVID"
  },
  {
    "id": 390,
    "name": "רגבה",
    "engName": "REGBA"
  },
  {
    "id": 444,
    "name": "רגבים",
    "engName": "REGAVIM"
  },
  {
    "id": 1161,
    "name": "רהט",
    "engName": "RAHAT"
  },
  {
    "id": 2051,
    "name": "רווחה",
    "engName": "REWAHA"
  },
  {
    "id": 2016,
    "name": "רוויה",
    "engName": "REWAYA"
  },
  {
    "id": 1341,
    "name": "רוח מדבר",
    "engName": "RUAH MIDBAR"
  },
  {
    "id": 362,
    "name": "רוחמה",
    "engName": "RUHAMA"
  },
  {
    "id": 539,
    "name": "רומאנה",
    "engName": "RUMMANE"
  },
  {
    "id": 997,
    "name": "רומת הייב",
    "engName": "RUMAT HEIB"
  },
  {
    "id": 3619,
    "name": "רועי",
    "engName": "RO'I"
  },
  {
    "id": 3782,
    "name": "רותם",
    "engName": "ROTEM"
  },
  {
    "id": 854,
    "name": "רחוב",
    "engName": "REHOV"
  },
  {
    "id": 8400,
    "name": "רחובות",
    "engName": "REHOVOT"
  },
  {
    "id": 3822,
    "name": "רחלים",
    "engName": "REHELIM"
  },
  {
    "id": 540,
    "name": "ריחאנייה",
    "engName": "REIHANIYYE"
  },
  {
    "id": 3568,
    "name": "ריחן",
    "engName": "REHAN"
  },
  {
    "id": 542,
    "name": "ריינה",
    "engName": "REINE"
  },
  {
    "id": 3565,
    "name": "רימונים",
    "engName": "RIMMONIM"
  },
  {
    "id": 616,
    "name": "רינתיה",
    "engName": "RINNATYA"
  },
  {
    "id": 922,
    "name": "רכסים",
    "engName": "REKHASIM"
  },
  {
    "id": 1069,
    "name": "רם-און",
    "engName": "RAM-ON"
  },
  {
    "id": 4702,
    "name": "רמות",
    "engName": "RAMOT"
  },
  {
    "id": 206,
    "name": "רמות השבים",
    "engName": "RAMOT HASHAVIM"
  },
  {
    "id": 735,
    "name": "רמות מאיר",
    "engName": "RAMOT ME'IR"
  },
  {
    "id": 445,
    "name": "רמות מנשה",
    "engName": "RAMOT MENASHE"
  },
  {
    "id": 372,
    "name": "רמות נפתלי",
    "engName": "RAMOT NAFTALI"
  },
  {
    "id": 8500,
    "name": "רמלה",
    "engName": "RAMLA"
  },
  {
    "id": 8600,
    "name": "רמת גן",
    "engName": "RAMAT GAN"
  },
  {
    "id": 135,
    "name": "רמת דוד",
    "engName": "RAMAT DAWID"
  },
  {
    "id": 184,
    "name": "רמת הכובש",
    "engName": "RAMAT HAKOVESH"
  },
  {
    "id": 335,
    "name": "רמת השופט",
    "engName": "RAMAT HASHOFET"
  },
  {
    "id": 2650,
    "name": "רמת השרון",
    "engName": "RAMAT HASHARON"
  },
  {
    "id": 178,
    "name": "רמת יוחנן",
    "engName": "RAMAT YOHANAN"
  },
  {
    "id": 122,
    "name": "רמת ישי",
    "engName": "RAMAT YISHAY"
  },
  {
    "id": 4701,
    "name": "רמת מגשימים",
    "engName": "RAMAT MAGSHIMIM"
  },
  {
    "id": 339,
    "name": "רמת צבי",
    "engName": "RAMAT ZEVI"
  },
  {
    "id": 460,
    "name": "רמת רזיאל",
    "engName": "RAMAT RAZI'EL"
  },
  {
    "id": 127,
    "name": "רמת רחל",
    "engName": "RAMAT RAHEL"
  },
  {
    "id": 789,
    "name": "רנן",
    "engName": "RANNEN"
  },
  {
    "id": 713,
    "name": "רעים",
    "engName": "RE'IM"
  },
  {
    "id": 8700,
    "name": "רעננה",
    "engName": "RA'ANNANA"
  },
  {
    "id": 1228,
    "name": "רקפת",
    "engName": "RAQQEFET"
  },
  {
    "id": 247,
    "name": "רשפון",
    "engName": "RISHPON"
  },
  {
    "id": 437,
    "name": "רשפים",
    "engName": "RESHAFIM"
  },
  {
    "id": 1260,
    "name": "רתמים",
    "engName": "RETAMIM"
  },
  {
    "id": 324,
    "name": "שאר ישוב",
    "engName": "SHE'AR YASHUV"
  },
  {
    "id": 282,
    "name": "שבי ציון",
    "engName": "SHAVE ZIYYON"
  },
  {
    "id": 3571,
    "name": "שבי שומרון",
    "engName": "SHAVE SHOMERON"
  },
  {
    "id": 913,
    "name": "שבלי - אום אל-גנם",
    "engName": "SHIBLI-UMM AL-GHANAM"
  },
  {
    "id": 1286,
    "name": "שגב-שלום",
    "engName": "SEGEV-SHALOM"
  },
  {
    "id": 721,
    "name": "שדה אילן",
    "engName": "SEDE ILAN"
  },
  {
    "id": 304,
    "name": "שדה אליהו",
    "engName": "SEDE ELIYYAHU"
  },
  {
    "id": 861,
    "name": "שדה אליעזר",
    "engName": "SEDE ELI'EZER"
  },
  {
    "id": 885,
    "name": "שדה בוקר",
    "engName": "SEDE BOQER"
  },
  {
    "id": 36,
    "name": "שדה דוד",
    "engName": "SEDE DAWID"
  },
  {
    "id": 284,
    "name": "שדה ורבורג",
    "engName": "SEDE WARBURG"
  },
  {
    "id": 293,
    "name": "שדה יואב",
    "engName": "SEDE YO'AV"
  },
  {
    "id": 142,
    "name": "שדה יעקב",
    "engName": "SEDE YA'AQOV"
  },
  {
    "id": 2008,
    "name": "שדה יצחק",
    "engName": "SEDE YIZHAQ"
  },
  {
    "id": 18,
    "name": "שדה משה",
    "engName": "SEDE MOSHE"
  },
  {
    "id": 259,
    "name": "שדה נחום",
    "engName": "SEDE NAHUM"
  },
  {
    "id": 329,
    "name": "שדה נחמיה",
    "engName": "SEDE NEHEMYA"
  },
  {
    "id": 1058,
    "name": "שדה ניצן",
    "engName": "SEDE NIZZAN"
  },
  {
    "id": 739,
    "name": "שדה עוזיהו",
    "engName": "SEDE UZZIYYAHU"
  },
  {
    "id": 2049,
    "name": "שדה צבי",
    "engName": "SEDE ZEVI"
  },
  {
    "id": 327,
    "name": "שדות ים",
    "engName": "SEDOT YAM"
  },
  {
    "id": 27,
    "name": "שדות מיכה",
    "engName": "SEDOT MIKHA"
  },
  {
    "id": 1223,
    "name": "שדי אברהם",
    "engName": "SEDE AVRAHAM"
  },
  {
    "id": 2015,
    "name": "שדי חמד",
    "engName": "SEDE HEMED"
  },
  {
    "id": 2057,
    "name": "שדי תרומות",
    "engName": "SEDE TERUMOT"
  },
  {
    "id": 555,
    "name": "שדמה",
    "engName": "SHEDEMA"
  },
  {
    "id": 306,
    "name": "שדמות דבורה",
    "engName": "SHADMOT DEVORA"
  },
  {
    "id": 3578,
    "name": "שדמות מחולה",
    "engName": "SHADMOT MEHOLA"
  },
  {
    "id": 1031,
    "name": "שדרות",
    "engName": "SEDEROT"
  },
  {
    "id": 741,
    "name": "שואבה",
    "engName": "SHO'EVA"
  },
  {
    "id": 761,
    "name": "שובה",
    "engName": "SHUVA"
  },
  {
    "id": 394,
    "name": "שובל",
    "engName": "SHOVAL"
  },
  {
    "id": 1304,
    "name": "שוהם",
    "engName": "SHOHAM"
  },
  {
    "id": 614,
    "name": "שומרה",
    "engName": "SHOMERA"
  },
  {
    "id": 1265,
    "name": "שומרייה",
    "engName": "SHOMERIYYA"
  },
  {
    "id": 415,
    "name": "שוקדה",
    "engName": "SHOQEDA"
  },
  {
    "id": 456,
    "name": "שורש",
    "engName": "SHORESH"
  },
  {
    "id": 1235,
    "name": "שורשים",
    "engName": "SHORASHIM"
  },
  {
    "id": 224,
    "name": "שושנת העמקים",
    "engName": "SHOSHANNAT HAAMAQIM"
  },
  {
    "id": 527,
    "name": "שזור",
    "engName": "SHEZOR"
  },
  {
    "id": 7,
    "name": "שחר",
    "engName": "SHAHAR"
  },
  {
    "id": 1266,
    "name": "שחרות",
    "engName": "SHAHARUT"
  },
  {
    "id": 865,
    "name": "שיבולים",
    "engName": "SHIBBOLIM"
  },
  {
    "id": 1267,
    "name": "שיטים",
    "engName": "SHITTIM"
  },
  {
    "id": 658,
    "name": "שייח' דנון",
    "engName": "SHEIKH DANNUN"
  },
  {
    "id": 3641,
    "name": "שילה",
    "engName": "SHILO"
  },
  {
    "id": 1165,
    "name": "שילת",
    "engName": "SHILAT"
  },
  {
    "id": 1160,
    "name": "שכניה",
    "engName": "SHEKHANYA"
  },
  {
    "id": 873,
    "name": "שלווה",
    "engName": "SHALWA"
  },
  {
    "id": 1373,
    "name": "שלווה במדבר",
    "engName": "SHALVA BAMIDBAR"
  },
  {
    "id": 439,
    "name": "שלוחות",
    "engName": "SHELUHOT"
  },
  {
    "id": 812,
    "name": "שלומי",
    "engName": "SHELOMI"
  },
  {
    "id": 1364,
    "name": "שלומית",
    "engName": "SHLOMIT"
  },
  {
    "id": 366,
    "name": "שמיר",
    "engName": "SHAMIR"
  },
  {
    "id": 3784,
    "name": "שמעה",
    "engName": "SHIM'A"
  },
  {
    "id": 432,
    "name": "שמרת",
    "engName": "SHAMERAT"
  },
  {
    "id": 1337,
    "name": "שמשית",
    "engName": "SHIMSHIT"
  },
  {
    "id": 1132,
    "name": "שניר",
    "engName": "SENIR"
  },
  {
    "id": 538,
    "name": "שעב",
    "engName": "SHA'AB"
  },
  {
    "id": 4009,
    "name": "שעל",
    "engName": "SHA'AL"
  },
  {
    "id": 856,
    "name": "שעלבים",
    "engName": "SHA'ALVIM"
  },
  {
    "id": 661,
    "name": "שער אפרים",
    "engName": "SHA'AR EFRAYIM"
  },
  {
    "id": 264,
    "name": "שער הגולן",
    "engName": "SHA'AR HAGOLAN"
  },
  {
    "id": 237,
    "name": "שער העמקים",
    "engName": "SHA'AR HAAMAQIM"
  },
  {
    "id": 921,
    "name": "שער מנשה",
    "engName": "SHA'AR MENASHE"
  },
  {
    "id": 3720,
    "name": "שערי תקווה",
    "engName": "SHA'ARE TIQWA"
  },
  {
    "id": 232,
    "name": "שפיים",
    "engName": "SHEFAYIM"
  },
  {
    "id": 692,
    "name": "שפיר",
    "engName": "SHAFIR"
  },
  {
    "id": 846,
    "name": "שפר",
    "engName": "SHEFER"
  },
  {
    "id": 8800,
    "name": "שפרעם",
    "engName": "SHEFAR'AM"
  },
  {
    "id": 3649,
    "name": "שקד",
    "engName": "SHAQED"
  },
  {
    "id": 1233,
    "name": "שקף",
    "engName": "SHEQEF"
  },
  {
    "id": 292,
    "name": "שרונה",
    "engName": "SHARONA"
  },
  {
    "id": 1114,
    "name": "שריגים (לי-און)",
    "engName": "SARIGIM (LI-ON)"
  },
  {
    "id": 126,
    "name": "שריד",
    "engName": "SARID"
  },
  {
    "id": 398,
    "name": "שרשרת",
    "engName": "SHARSHERET"
  },
  {
    "id": 1045,
    "name": "שתולה",
    "engName": "SHETULA"
  },
  {
    "id": 763,
    "name": "שתולים",
    "engName": "SHETULIM"
  },
  {
    "id": 2062,
    "name": "תאשור",
    "engName": "TE'ASHUR"
  },
  {
    "id": 2061,
    "name": "תדהר",
    "engName": "TIDHAR"
  },
  {
    "id": 1172,
    "name": "תובל",
    "engName": "TUVAL"
  },
  {
    "id": 3558,
    "name": "תומר",
    "engName": "TOMER"
  },
  {
    "id": 1083,
    "name": "תושייה",
    "engName": "TUSHIYYA"
  },
  {
    "id": 163,
    "name": "תימורים",
    "engName": "TIMMORIM"
  },
  {
    "id": 10,
    "name": "תירוש",
    "engName": "TIROSH"
  },
  {
    "id": 5000,
    "name": "תל אביב -יפו",
    "engName": "TEL AVIV - YAFO"
  },
  {
    "id": 84,
    "name": "תל יוסף",
    "engName": "TEL YOSEF"
  },
  {
    "id": 287,
    "name": "תל יצחק",
    "engName": "TEL YIZHAQ"
  },
  {
    "id": 154,
    "name": "תל מונד",
    "engName": "TEL MOND"
  },
  {
    "id": 103,
    "name": "תל עדשים",
    "engName": "TEL ADASHIM"
  },
  {
    "id": 719,
    "name": "תל קציר",
    "engName": "TEL QAZIR"
  },
  {
    "id": 1054,
    "name": "תל שבע",
    "engName": "TEL SHEVA"
  },
  {
    "id": 1283,
    "name": "תל תאומים",
    "engName": "TEL TE'OMIM"
  },
  {
    "id": 3719,
    "name": "תלם",
    "engName": "TELEM"
  },
  {
    "id": 1051,
    "name": "תלמי אליהו",
    "engName": "TALME ELIYYAHU"
  },
  {
    "id": 2003,
    "name": "תלמי אלעזר",
    "engName": "TALME EL'AZAR"
  },
  {
    "id": 2050,
    "name": "תלמי ביל\"ו",
    "engName": "TALME BILU"
  },
  {
    "id": 1237,
    "name": "תלמי יוסף",
    "engName": "TALME YOSEF"
  },
  {
    "id": 727,
    "name": "תלמי יחיאל",
    "engName": "TALME YEHI'EL"
  },
  {
    "id": 744,
    "name": "תלמי יפה",
    "engName": "TALME YAFE"
  },
  {
    "id": 814,
    "name": "תלמים",
    "engName": "TELAMIM"
  },
  {
    "id": 1244,
    "name": "תמרת",
    "engName": "TIMRAT"
  },
  {
    "id": 2002,
    "name": "תנובות",
    "engName": "TENUVOT"
  },
  {
    "id": 752,
    "name": "תעוז",
    "engName": "TA'OZ"
  },
  {
    "id": 709,
    "name": "תפרח",
    "engName": "TIFRAH"
  },
  {
    "id": 665,
    "name": "תקומה",
    "engName": "TEQUMA"
  },
  {
    "id": 3563,
    "name": "תקוע",
    "engName": "TEQOA"
  },
  {
    "id": 1346,
    "name": "תרבין א-צאנע (יישוב)*",
    "engName": "TARABIN AS-SANI"
  },
  {
    "id": 778,
    "name": "תרום",
    "engName": "TARUM"
  }
]

