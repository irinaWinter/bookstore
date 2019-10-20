var books = [{"name":"Английский язык. Профессиональная лексика","author":"Юшкевич А. А.","type":"Методическое пособие","specialty":"42.02.02, 29.02.07","price":100,"img":"book","year":2018,"format":"60х84/16","pages":null,"annotation":null,"reissue":null, "new":true, "popular": false},
{"name":"Безопасность жизнедеятельности","author":"Александрович Д. А.","type":"Методические рекомендации по оказанию первой помощи пострадавшим","specialty":"42.02.02","price":150,"img":"book","year":2017,"format":"60х84/32","pages":80,"annotation":null,"reissue":null, "new":true, "popular": false},
{"name":"Верстка. Требования к оформлению книг ","author":"Минаева О. Е.","type":"Учебное пособие","specialty":"42.02.02","price":150,"img":"page-proofs_2018","year":2016,"format":"60х84/16","pages":60,"annotation":null,"reissue":null, "new":true, "popular": true},
{"name":"Живопись с основами цветоведения","author":"Калинкина Д. Д.","type":"Курс лекций","specialty":"42.02.02","price":150,"img":"book","year":2018,"format":"60х84/16","pages":72,"annotation":null,"reissue":"2-е издание", "new":true, "popular": false},
{"name":"Информационные системы в профессиональной деятельности. Программа Quark Xpress 8. Часть 1","author":"Минаева О. Е.","type":"Курс лекций","specialty":"42.02.01","price":150,"img":"book","year":2016,"format":"60х84/8","pages":60,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Информационные системы в профессиональной деятельности. Программа Quark Xpress 8. Часть 2","author":"Минаева О. Е.","type":"Курс лекций","specialty":"42.02.01","price":150,"img":"book","year":2016,"format":"60х84/8","pages":60,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Конструирование и дизайн изделий из бумаги и картона","author":"Ефремов Н. Ф., Счеславский Д. А.","type":"Учебное пособие","specialty":"42.02.01","price":200,"img":"book","year":2015,"format":"60х84/16","pages":132,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Компьютерная графика","author":"Дорощенко М. А.","type":"Курс лекций","specialty":"42.02.01","price":250,"img":"book","year":2014,"format":"60х84/16","pages":236,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Композиция","author":"Кузьмина Т. М.","type":"Учебное пособие","specialty":"42.02.01","price":170,"img":"book","year":2014,"format":"60х84/16","pages":60,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Качество и потребительская безопасность продукции","author":"Терехова Л. В.","type":"Курс лекций","specialty":"42.02.01","price":150,"img":"book","year":2014,"format":"60х84/16","pages":76,"annotation":null,"reissue":null, "new":false},
{"name":"Краткий курс физико-химических основ полиграфического производства","author":"Бурсак С. С.","type":"Учебное пособие","specialty":"29.02.06","price":250,"img":"physics_2017","year":2017,"format":"60х84/16","pages":160,"annotation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","reissue":null, "new":false, "popular": true},
{"name":"Метрология и стандартизация","author":"Фолиев В. С. ","type":"Курс лекций","specialty":"29.02.06","price":150,"img":"book","year":2013,"format":"60х84/16","pages":84,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Мультимедийные технологии","author":"Дорощенко М. А.","type":"Курс лекций","specialty":"29.02.06","price":200,"img":"book","year":2014,"format":"60х84/16","pages":116,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Оборудование печатных процессов","author":"Румянцев В. Н., Попова Н. В.","type":"Учебник","specialty":"29.02.06","price":300,"img":"book","year":2015,"format":"60х84/16","pages":260,"annotation":null,"reissue":null, "new":false, "popular": true},
{"name":"Основы автоматизации полиграфического производства","author":"Фолиев В. С., Корначева Л. И. ","type":"Учебное пособие","specialty":"29.02.06","price":150,"img":"book","year":2016,"format":"60х84/16","pages":100,"annotation":null,"reissue":null, "new":false, "popular": true},
{"name":"Основы инженерной графики","author":"Миргородская О. Л.","type":"Учебное пособие","specialty":"29.02.07","price":200,"img":"book","year":2014,"format":"60х84/16","pages":112,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Программы Adobe. Основы программы InDesign + интерактивные возможности","author":"Минаева О. Е.","type":"Курс лекций","specialty":"29.02.07","price":250,"img":"book","year":2015,"format":"60х84/8","pages":88,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Рекомендации печатнику","author":"Силина В. И.","type":"Методичексое пособие ","specialty":"29.02.07","price":150,"img":"book","year":2016,"format":"60х84/16","pages":68,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Словарь терминов дизайнера упаковки","author":"Смиренный И. Н., Кухарский В. В., Орехов Н. Н.","type":"Словарь","specialty":"29.02.07","price":250,"img":"book","year":2016,"format":"60х84/16","pages":156,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Технологический контроль полиграфических процессов","author":"Абдул С. Н.","type":"Курс лекций","specialty":"29.02.07","price":150,"img":"book","year":2018,"format":"60х84/16","pages":64,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Технология и оборудование производства изделий из бумаги и картона. Допечатные процессы","author":"Звгинцева Н. В., Терехова Л. В.","type":"Учебное пособие","specialty":"","price":200,"img":"book","year":2018,"format":"60х84/16","pages":156,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Технология послепечатных процессов","author":"Абдул С. Н.","type":"Учебное пособие","specialty":"29.02.07","price":300,"img":"book","year":2016,"format":"60х84/16","pages":236,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Тара и ее производство","author":"Ефремов Н. Ф., Звягинцева Н. В.","type":"Учебное пособие","specialty":"54.02.01","price":320,"img":"book","year":2017,"format":"60х84/16","pages":320,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Употребление строчных и прописных букв","author":"Кулемасова Е. В.","type":"Методические указания","specialty":"54.02.01","price":120,"img":"book","year":2018,"format":"60х84/16","pages":56,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Шпаргалка по InDesign CS5","author":"Минаева О. Е.","type":"","specialty":"54.02.01","price":250,"img":"book","year":2013,"format":"60х84/16","pages":136,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Шрифт","author":"Орехов Н. Н.","type":"Учебное пособие","specialty":"54.02.01","price":250,"img":"book","year":2016,"format":"60х84/16","pages":172,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Эргономика","author":"Кузьмина Т. М.","type":"Курс лекций","specialty":"54.02.01","price":150,"img":"book","year":2013,"format":"60х84/16","pages":108,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Экономика организации","author":"Кушелева Т. Е.","type":"Учебное пособие","specialty":"54.01.20","price":300,"img":"book","year":2015,"format":"60х84/16","pages":316,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Английский язык","author":"Кравцова М. К.","type":"Сборник упражнений ","specialty":"Все специальности","price":80,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Информационные технологии в издательском деле","author":"Леонтьева Л. П.","type":"Методические указания к выполнению самостоятельных работ для студентов 3 курса","specialty":"42.02.02 Издательское дело","price":50,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Информационные технологии в издательском деле","author":"Леонтьева Л. П.","type":"Методические указания по проведению практических работ ","specialty":"42.02.02","price":60,"img":"book","year":2018,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Компьютерная верстка","author":"Минаева О. Е.","type":"Методические указания","specialty":"42.02.02","price":null,"img":"book","year":2013,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Материаловедение","author":"Попова Н. В.","type":"Методические указания","specialty":"29.02.06","price":120,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Мультимедийные технологии","author":"Ермаков А. В.","type":"Методические указания по выполнению практических работ ","specialty":"54.01.20","price":100,"img":"book","year":2015,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Мультимедийные технологии","author":"Ермаков А. В., Минаева О. Е.","type":"Методические рекомендации по выполнению самостоятельных работ","specialty":"54.01.20","price":80,"img":"book","year":2018,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.01.05 Автоматизированные и информационные технологии","author":"Абдул С. Н., Гурочкина Г. В., Корначева Л. И.","type":"Методические указания","specialty":"54.01.20","price":120,"img":"book","year":2014,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 02.01 Выполнение рекламных проектов в материале. Макетирование в рекламных проектах","author":"Кузьмина Т. М.","type":"Методичексие указания к выполнению практических работ для сиудентов 4 курса","specialty":"42.02.01","price":60,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.01.02 Допечатные процессы","author":"Звягинцева Н. В., Корначева Л. И.","type":"Методические указания","specialty":"54.01.20","price":150,"img":"book","year":2014,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 02.01 Конструирование и дизайн изделий из бумаги и картона","author":"Счеславский Д. А.","type":"Сборник упражнений и задач","specialty":"29.02.07","price":80,"img":"book","year":2015,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 02.02 Проектная и компьютерная графика и мультимедиа. Информационные технологии в профессиональной деятельности","author":"Леонтьева Л. П.","type":"Методические указания по организации выполнению самостоятельной работы","specialty":"42.02.01","price":60,"img":"book","year":2018,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 02.02 Проектная и компьютерная графика и мультимедиа. Информационные технологии в профессиональной деятельности","author":"Леонтьева Л. П.","type":"Методические рекомендации по проведению практических работ","specialty":"42.02.01","price":80,"img":"book","year":2018,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 03.01 Маркетинг в рекламе. Рекламная деятельность","author":"Брянкина С. Ю.","type":"Методические указания к выполнению самостоятельных работ для студентов 3 курса","specialty":"42.02.01","price":80,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.02 Основы проектной и компьютерной графики","author":"Калинкина Д.Д., Миргородская О. Л., Минаева О. Е.","type":"Методические указания","specialty":"54.01.20","price":100,"img":"book","year":2014,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.02 Основы проектной и компьютерной графики","author":"Леонтьева Л. П.","type":"Методические рекомендации","specialty":"","price":100,"img":"book","year":2017,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.02 Основы проектной и компьютерной графики","author":"Леонтьева Л. П.","type":"Методические рекомендации по выполнению практических работ","specialty":"54.02.01","price":100,"img":"book","year":2018,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.01.04 Технология и оборудование послепечатных процессов","author":"Абдул С. Н.","type":"Методические указания","specialty":"54.01.20","price":100,"img":"book","year":2013,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.01.03 Печатные процессы","author":"Попова Н. В., Терехова Л. В.","type":"Методические указания","specialty":"29.02.09","price":200,"img":"book","year":2014,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 02.02.02 Технология отделочных процессов упаковочного производства ","author":"Терехова Л. В.","type":"Методические указания","specialty":"29.02.09","price":120,"img":"book","year":2015,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.02 Технико-экономический анализ полиграфических технологий","author":"Гурочкина Г. В.","type":"Методические указания","specialty":"29.02.09","price":50,"img":"book","year":2014,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.01 Художественное проектирование рекламного продукта","author":"Брянкина С. Ю., Орехов Н. Н., Бабаева К. А.","type":"Методические указания","specialty":"29.02.09","price":200,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false}
]