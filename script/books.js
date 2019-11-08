var books = [
// Издательское дело
{"name":"Программы Adobe. Основы программы Illustrator CC","author":"Дорощенко М. А., Миронова Л. И.","type":"Курс лекций","specialty":"Издательское дело","price":150,"img":"illustrator","year":2018,"format":"60х84/8","pages":52,
	"annotation":"Издание знакомит с интерфейсом программы Adobe Illustrator. Содержит пошаговые инструкции по работе с документом, сопровождаемые подробными иллюстрациями.",
	"reissue":"2-е издание", "new":true, "popular": true},

{"name":"Программы Adobe. Основы программы Photoshop CC","author":"Дорощенко М. А., Миронова Л. И.","type":"Курс лекций","specialty":"Издательское дело","price":150,"img":"photoshop","year":2018,"format":"60х84/32","pages":64,
	"annotation":"Издание знакомит с интерфейсом программы Adobe Photoshop. Содержит пошаговые инструкции по работе с документом, сопровождаемые подробными иллюстрациями.",
	"reissue":"2-е издание", "new":true, "popular": true},

{"name":"Верстка. Требования к оформлению книг ","author":"Минаева О. Е.","type":"Учебное пособие","specialty":"Издательское дело, Дизайн (по отраслям), Реклама","price":150,"img":"page-proofs_2018","year":2018,"format":"60х84/16","pages":64,
	"annotation":"В учебном пособии приводится ряд рекомендаций по оформлению книжных изданий, которые составлены на основе технологических правил набора и верстки, а также справочников по художественно-техническому оформлению и вычитке книжных изданий с учетом современных требований издательств и специфики компьютерной верстки. Каждая тема проиллюстрирована примерами типичных ошибок и примерами правильного оформления различных элементов издания.",
	"reissue":"5-е издание", "new":true, "popular": true},

// Графический дизайнер
{"name":"Основы графического дизайна","author":"Минаева О. Е.","type":"Методические указания","specialty":"Графический дизайнер","price":150,"img":"graphic-design-basics","year":2018,"format":"60х84/8","pages":60,
	"annotation":"Издание знакомит с понятиями графического дизайна. Рассматривается корпоративный, информационный, многостраничный дизайн и дизайн упаковки. Для каждого из видов даются рекомендации, приводятся удачные примеры, а также примеры с ошибками.",
	"reissue":"самостоятельное издание", "new":true, "popular": true},

{"name":"Физика","author":"Попова И. В.","type":"Методическое пособие с примерами решения задач", "specialty":"Все специальности",
	"price":150,"img":"physic-mp-2019","year":2019,"format":"60х84/16","pages":84,
	"annotation":"Данное методическое пособие предназначено оказать помощь студентам в изучении курса физики и при подготовке к экзамену по данному предмету. Материал разделен на три связанные между собой части: краткие теоретические сведения, примеры решения задач, задачи для самостоятельного решения.",
	"reissue":"самостоятельное издание", "new":false, "popular": false},

{"name":"Физическая культура","author":"Сигаев М. М.",
	"type":"Курс лекций для студентов I курса","specialty":"Все специальности","price":150,"img":"physical-training","year":2019,"format":"60х84/16","pages":104,
	"annotation":"В издании расмматриваются основы здорового образа жизни, методики самостоятельных занятий физическими упражнениями, самоконтроль, психофизические основы учебного и производственного труда, средства физической культуры в регуляции работоспособности, физическая культура в профессиональной деятельности специалиста, развитие физических способностей человека.",
	"reissue":"3-е издание", "new":false, "popular": false},

{"name":"Химия","author":"Серегина Т. А., Бурсак С. С.","type":"Методические указания к выполнению лабораторных работ для студентов I курса",
	"specialty":"Все специальности","price":200,"img":"chemistry","year":2018,"format":"60х84/16","pages":52,
	"annotation":"Данные методические указания предназначены в помощь студентам I курса при выполнении лабораторных работ по химии. Лабораторные работы помогают студентам усвоить законы и основные теоретические положения химии, знакомят со свойствами важнейших веществ, прививают навыки выполнения простейших химических экспериментов.",
	"reissue":"самостоятельное издание", "new":true, "popular": true},

{"name":"Компьютерная графика","author":"Дорощенко М. А.","type":"Курс лекций","specialty":"Графический дизайнер","price":250,
	"img":"book","year":2018,"format":"60х84/16","pages":152,
	"annotation":"Данный курс лекций разработан на основе примерной рабочей программы по дисциплине «Компьютерная графика». Составлен на основе государственных стандартов и предназначен для студентов специальности 54.01.20 Графический дизайнер. Издание знакомит с основами компьютерной графики, рассматривает векторную графику в программе Adobe Illustrator, а также растровую графику в программе Adobe Photoshop.",
	"reissue":"самостоятельное издание", "new":false, "popular": true},

{"name":"Английский язык. Профессиональная лексика","author":"Юшкевич А. А.","type":"Методическое пособие",
	"specialty":"Дизайн (по отраслям), Полиграфическое производство",
	"price":170,"img":"english-language","year":2018,"format":"60х84/16","pages":32,
	"annotation":"методическое пособие направленно на снятие языкового барьера у студентов и обогащение их лексического запаса. В сборник включены тексты, статьи из аутентичных англо-язычных источников и упражнения к ним. Представленные статьи содержат широко используемую терминологию по направлениям полиграфии и дизайна, включая материал по допечатным процессам и технологии печати. Методическое пособие состоит из 10 уроков (units) и приложений с дополнительными текстами для самостоятельной работы.",
	"reissue":"самостоятельное издание", "new":false, "popular": false},

{"name":"Материаловедение","author":"Попова Н. В.","type":"Методические указания к выполнению практических работ",
	"specialty":"Дизайн (по отраслям), Издательское дело","price":150,"img":"materials-science","year":2019,"format":"60х84/16","pages":16,
	"annotation":"Издание содержит задания для практических работ, а также указаня к их выполнению.",
	"reissue":"самостоятельное издание", "new":false},

{"name":"Математика","author":"Ромбах О. Б.","type":"Методическое пособие",
	"specialty":"Все специальности","price":250,"img":"maths","year":2018,"format":"60х84/16","pages":72,
	"annotation": "Методические рекомендации состоят из пяти разделов: Дифференциальное исчисление, Вычисление предела функции с помощью правила Лопиталя, Интегральное исчисление, Дифференциальные уравнения, Теория вероятностей. Издание содержит теоретический материал, большое количество рекомендаций и способов решения типовых задач, примеров и тренажеров для решения.",
	"reissue":"самостоятельное издание", "new":false, "popular": true},




{"name":"Краткий курс физико-химических основ полиграфического производства","author":"Бурсак С. С.","type":"Учебное пособие",
	"specialty":"Производство изделий из бумаги и картона","price":250,"img":"physics_2017","year":2017,"format":"60х84/16","pages":160,
	"annotation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"reissue":null, "new":false, "popular": true},	

{"name":"Метрология и стандартизация","author":"Фолиев В. С. ","type":"Курс лекций","specialty":"Производство изделий из бумаги и картона","price":150,"img":"book","year":2013,"format":"60х84/16","pages":84,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Мультимедийные технологии","author":"Дорощенко М. А.","type":"Курс лекций","specialty":"Дизайн (по отраслям)","price":200,"img":"book","year":2014,"format":"60х84/16","pages":116,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Оборудование печатных процессов","author":"Румянцев В. Н., Попова Н. В.","type":"Учебник","specialty":"Дизайн (по отраслям)","price":300,"img":"book","year":2015,"format":"60х84/16","pages":260,"annotation":null,"reissue":null, "new":false, "popular": true},
{"name":"Основы автоматизации полиграфического производства","author":"Фолиев В. С., Корначева Л. И. ","type":"Учебное пособие","specialty":"Дизайн (по отраслям)","price":150,"img":"book","year":2016,"format":"60х84/16","pages":100,"annotation":null,"reissue":null, "new":false, "popular": true},
{"name":"Основы инженерной графики","author":"Миргородская О. Л.","type":"Учебное пособие","specialty":"Монтаж и техническая эксплуатация промышленного оборудования (по отраслям)","price":200,"img":"book","year":2014,"format":"60х84/16","pages":112,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Программы Adobe. Основы программы InDesign + интерактивные возможности","author":"Минаева О. Е.","type":"Курс лекций","specialty":"","price":250,"img":"book","year":2015,"format":"60х84/8","pages":88,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Рекомендации печатнику","author":"Силина В. И.","type":"Методичексое пособие ","specialty":"","price":150,"img":"book","year":2016,"format":"60х84/16","pages":68,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Словарь терминов дизайнера упаковки","author":"Смиренный И. Н., Кухарский В. В., Орехов Н. Н.","type":"Словарь","specialty":"Техника и искусство фотографии","price":250,"img":"book","year":2016,"format":"60х84/16","pages":156,"annotation":null,"reissue":null, "new":true, "popular": false},
{"name":"Технологический контроль полиграфических процессов","author":"Абдул С. Н.","type":"Курс лекций","specialty":"Техника и искусство фотографии","price":150,"img":"book","year":2018,"format":"60х84/16","pages":64,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Технология и оборудование производства изделий из бумаги и картона. Допечатные процессы","author":"Звгинцева Н. В., Терехова Л. В.","type":"Учебное пособие","specialty":"Техника и искусство фотографии","price":200,"img":"book","year":2018,"format":"60х84/16","pages":156,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Технология послепечатных процессов","author":"Абдул С. Н.","type":"Учебное пособие","specialty":"Анимация (по видам)","price":300,"img":"book","year":2016,"format":"60х84/16","pages":236,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Тара и ее производство","author":"Ефремов Н. Ф., Звягинцева Н. В.","type":"Учебное пособие","specialty":"Анимация (по видам)","price":320,"img":"book","year":2017,"format":"60х84/16","pages":320,"annotation":null,"reissue":null, "new":true, "popular": false},
{"name":"Употребление строчных и прописных букв","author":"Кулемасова Е. В.","type":"Методические указания","specialty":"Анимация (по видам)","price":120,"img":"book","year":2018,"format":"60х84/16","pages":56,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Шпаргалка по InDesign CS5","author":"Минаева О. Е.","type":"","specialty":"Реклама","price":250,"img":"book","year":2013,"format":"60х84/16","pages":136,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Шрифт","author":"Орехов Н. Н.","type":"Учебное пособие","specialty":"Реклама","price":250,"img":"book","year":2016,"format":"60х84/16","pages":172,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Эргономика","author":"Кузьмина Т. М.","type":"Курс лекций","specialty":"Реклама","price":150,"img":"book","year":2013,"format":"60х84/16","pages":108,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Экономика организации","author":"Кушелева Т. Е.","type":"Учебное пособие","specialty":"Издательское дело","price":300,"img":"book","year":2015,"format":"60х84/16","pages":316,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Английский язык","author":"Кравцова М. К.","type":"Сборник упражнений ","specialty":"Все специальности","price":80,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Информационные технологии в издательском деле","author":"Леонтьева Л. П.","type":"Методические указания к выполнению самостоятельных работ для студентов 3 курса","specialty":"Издательское дело Издательское дело","price":50,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Информационные технологии в издательском деле","author":"Леонтьева Л. П.","type":"Методические указания по проведению практических работ ","specialty":"Издательское дело","price":60,"img":"book","year":2018,"format":"","pages":null,"annotation":null,"reissue":null, "new":true, "popular": false},
{"name":"Компьютерная верстка","author":"Минаева О. Е.","type":"Методические указания","specialty":"Издательское дело","price":null,"img":"book","year":2013,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Материаловедение","author":"Попова Н. В.","type":"Методические указания","specialty":"Полиграфическое производство","price":120,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Мультимедийные технологии","author":"Ермаков А. В.","type":"Методические указания по выполнению практических работ ","specialty":"Издательское дело","price":100,"img":"book","year":2015,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"Мультимедийные технологии","author":"Ермаков А. В., Минаева О. Е.","type":"Методические рекомендации по выполнению самостоятельных работ","specialty":"Издательское дело","price":80,"img":"book","year":2018,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.01.05 Автоматизированные и информационные технологии","author":"Абдул С. Н., Гурочкина Г. В., Корначева Л. И.","type":"Методические указания","specialty":"Полиграфическое производство","price":120,"img":"book","year":2014,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 02.01 Выполнение рекламных проектов в материале. Макетирование в рекламных проектах","author":"Кузьмина Т. М.","type":"Методичексие указания к выполнению практических работ для сиудентов 4 курса","specialty":"Печатное дело","price":60,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.01.02 Допечатные процессы","author":"Звягинцева Н. В., Корначева Л. И.","type":"Методические указания","specialty":"Полиграфическое производство","price":150,"img":"book","year":2014,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 02.01 Конструирование и дизайн изделий из бумаги и картона","author":"Счеславский Д. А.","type":"Сборник упражнений и задач","specialty":"Техника и искусство фотографии","price":80,"img":"book","year":2015,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 02.02 Проектная и компьютерная графика и мультимедиа. Информационные технологии в профессиональной деятельности","author":"Леонтьева Л. П.","type":"Методические указания по организации выполнению самостоятельной работы","specialty":"Реклама","price":60,"img":"book","year":2018,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 02.02 Проектная и компьютерная графика и мультимедиа. Информационные технологии в профессиональной деятельности","author":"Леонтьева Л. П.","type":"Методические рекомендации по проведению практических работ","specialty":"Печатное дело","price":80,"img":"book","year":2018,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 03.01 Маркетинг в рекламе. Рекламная деятельность","author":"Брянкина С. Ю.","type":"Методические указания к выполнению самостоятельных работ для студентов 3 курса","specialty":"Печатное дело","price":80,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.02 Основы проектной и компьютерной графики","author":"Калинкина Д.Д., Миргородская О. Л., Минаева О. Е.","type":"Методические указания","specialty":"Полиграфическое производство","price":100,"img":"book","year":2014,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.02 Основы проектной и компьютерной графики","author":"Леонтьева Л. П.","type":"Методические рекомендации","specialty":"Реклама","price":100,"img":"book","year":2017,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.02 Основы проектной и компьютерной графики","author":"Леонтьева Л. П.","type":"Методические рекомендации по выполнению практических работ","specialty":"Реклама","price":100,"img":"book","year":2018,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.01.04 Технология и оборудование послепечатных процессов","author":"Абдул С. Н.","type":"Методические указания","specialty":"Полиграфическое производство","price":100,"img":"book","year":2013,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.01.03 Печатные процессы","author":"Попова Н. В., Терехова Л. В.","type":"Методические указания","specialty":"Реклама","price":200,"img":"book","year":2014,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 02.02.02 Технология отделочных процессов упаковочного производства ","author":"Терехова Л. В.","type":"Методические указания","specialty":"Печатное дело","price":120,"img":"book","year":2015,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.02 Технико-экономический анализ полиграфических технологий","author":"Гурочкина Г. В.","type":"Методические указания","specialty":"Реклама","price":50,"img":"book","year":2014,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false},
{"name":"МДК 01.01 Художественное проектирование рекламного продукта","author":"Брянкина С. Ю., Орехов Н. Н., Бабаева К. А.","type":"Методические указания","specialty":"Дизайн (по отраслям)","price":200,"img":"book","year":2016,"format":"","pages":null,"annotation":null,"reissue":null, "new":false, "popular": false}
]