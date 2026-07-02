// Translations object for multi-language support
const translations = {
    uz: {
        // Navigation
        'nav-home': 'Bosh sahifa',
        'nav-about': 'Institut haqida',
        'nav-research': 'Tadqiqotlar',
        'nav-garden': 'Botanika Bog\'i',
        'nav-council': 'Ilmiy Kengash',
        'nav-publications': 'Nashrlar',
        'nav-contact': 'Aloqa',
        'site-title': 'Botanika Instituti',

        // Hero Section
        'hero-title': 'O\'zbekiston Respublikasi Botanika Instituti',
        'hero-subtitle': 'O\'simliklar dunyosini tadqiq qilamiz, tabiiy resurslarni saqlashga hissa qo\'shamiz',
        'hero-research': 'Tadqiqotlarimiz',
        'hero-about': 'Biz haqimizda',

        // About Section
        'about-title': 'Institut haqida',
        'about-subtitle': 'O\'zbekiston flora va fauna dunyosini o\'rganuvchi yetakchi ilmiy muassasa',
        'about-text1': 'Botanika Instituti O\'zbekiston Respublikasi Fanlar akademiyasining tarkibiy qismi bo\'lib, o\'simliklar dunyosini chuqur o\'rganish, tabiiy resurslarni saqlash va racional foydalanish yo\'llarini ishlab chiqish bilan shug\'ullanadi.',
        'about-text2': 'Institut 1950-yilda tashkil etilgan bo\'lib, 70 yildan ortiq vaqt davomida O\'zbekiston florasi, o\'simliklar sistematikasi, ekologiyasi va amaliy botanika sohasida muhim tadqiqotlar olib bormoqda.',
        'about-history': 'Tariximiz',
        'about-mission': 'Missiyamiz',
        'about-mission-text': 'O\'zbekiston o\'simliklarini o\'rganish, saqlash va kelajak avlodlar uchun muhofaza qilish orqali ilm-fan rivojiga hissa qo\'shish.',
        'about-info': 'Asosiy Ma\'lumotlar',
        'about-founded': 'Tashkil etilgan',
        'about-staff': 'Xodimlar',
        'about-location': 'Joylashuv',
        'about-area': 'Maydon',
        'about-achievements': 'Yutuqlarimiz',
        'achievement1': '500+ ilmiy maqola',
        'achievement2': '25+ davlat loyihalari',
        'achievement3': 'IUCN bilan hamkorlik',
        'achievement4': 'Xalqaro tan olish',
        'stat-researchers': 'Tadqiqotchilar',
        'stat-publications': 'Ilmiy maqolalar',
        'stat-projects': 'Loyihalar',
        'stat-species': 'O\'simlik turlari',
        'stat-years': 'Yillik tajriba',

        // Research Section
        'research-title': 'Tadqiqot yo\'nalishlari',
        'research-subtitle': 'Zamonaviy usullar yordamida o\'simliklar dunyosini o\'rganamiz',
        'research-taxonomy': 'O\'simliklar sistematikasi',
        'research-taxonomy-desc': 'O\'zbekiston flora turlarini tasniflash va ularning evolyutsion rivojlanishini o\'rganish',
        'research-ecology': 'O\'simliklar ekologiyasi',
        'research-ecology-desc': 'Atrof-muhit o\'zgarishlari ta\'sirini o\'rganish va moslashish mexanizmlarini aniqlash',
        'research-biotech': 'Biotexnologiya',
        'research-biotech-desc': 'O\'simliklardan foydali moddalar ajratib olish va in vitro ko\'paytirish usullari',
        'research-conservation': 'Tabiatni muhofaza qilish',
        'research-conservation-desc': 'Kam uchraydigan va yo\'qolib ketish xavfi ostidagi turlarni saqlash dasturlari',

        // Botanical Garden Section
        'garden-title': 'Toshkent Botanika Bog\'i',
        'garden-subtitle': 'Akademik F.N. Rusanov nomidagi botanika bog\'i - O\'rta Osiyodagi eng yirik o\'simliklar kolleksiyasi',
        'garden-species': 'O\'simlik turlari',
        'garden-countries': 'Mamlakatdan',
        'garden-hectares': 'Gektar maydon',
        'garden-founded': 'Tashkil etilgan',
        'garden-collections-title': 'Asosiy Kolleksiyalar',
        'collection-endemic': 'Endemik O\'simliklar',
        'collection-endemic-desc': 'O\'zbekiston va O\'rta Osiyoga xos noyob turlar kolleksiyasi',
        'collection-medicinal': 'Dorivor O\'simliklar',
        'collection-medicinal-desc': 'An\'anaviy va zamonaviy tibbiyotda qo\'llaniladigan o\'simliklar',
        'collection-alpine': 'Tog\' O\'simliklari',
        'collection-alpine-desc': 'Oloy, Qoratepa va Hisor tizmalaridan yig\'ilgan turlar',
        'collection-desert': 'Cho\'l O\'simliklari',
        'collection-desert-desc': 'Qizilqum va Qoraqum cho\'llariga moslashgan turlar',
        'garden-services-title': 'Xizmatlar va Imkoniyatlar',
        'service-research': 'Ilmiy Tadqiqotlar',
        'service-research-desc': 'O\'simliklar biologiyasi va ekologiyasi bo\'yicha tadqiqotlar',
        'service-education': 'Ta\'lim Dasturlari',
        'service-education-desc': 'Talabalar va maktab o\'quvchilari uchun ekskursiyalar',
        'service-conservation': 'Muhofaza Dasturlari',
        'service-conservation-desc': 'Kam uchraydigan turlarni saqlash va ko\'paytirish',
        'service-tours': 'Jamoat Turlari',
        'service-tours-desc': 'Har hafta oxiri ochiq turlar va master-klasslar',

        // Science Council Section
        'council-title': 'Ilmiy Kengash',
        'council-subtitle': 'Institut faoliyatini koordinatsiya qiluvchi ilmiy organi',
        'council-about': 'Kengash haqida',
        'council-desc': 'Ilmiy Kengash institutning ilmiy faoliyatini rejalashtirish, koordinatsiya qilish va baholash bilan shug\'ullanadi. Kengash tarkibiga taniqli olimlar va mutaxassislar kiradi.',
        'council-functions': 'Asosiy vazifalar:',
        'council-task1': 'Ilmiy tadqiqot yo\'nalishlarini belgilash',
        'council-task2': 'Ilmiy loyihalarni baholash va tasdiqlash',
        'council-task3': 'Dissertatsiya ishlarini himoya qilish',
        'council-task4': 'Xalqaro hamkorlik dasturlarini ishlab chiqish',
        'council-members': 'Kengash a\'zolari',
        'member1-position': 'Kengash raisi',
        'member2-position': 'Kengash o\'rinbosari',
        'member3-position': 'Kotib',

        // Publications Section
        'pub-title': 'Nashrlar',
        'pub-subtitle': 'Ilmiy tadqiqotlarimiz natijalari',
        'pub-journal': 'Ilmiy jurnal',
        'pub-journal-desc': '"O\'zbekiston botanikasi" jurnali yilda 4 marta chop etiladi',
        'pub-articles': 'Ilmiy maqolalar',
        'pub-articles-desc': 'Xalqaro jurnallarda chop etilgan maqolalar to\'plami',
        'pub-dissertations': 'Dissertatsiyalar',
        'pub-dissertations-desc': 'Himoya qilingan doktorlik va magistrlik dissertatsiyalari',
        'pub-read': 'O\'qish',

        // Contact Section
        'contact-title': 'Aloqa',
        'contact-subtitle': 'Biz bilan bog\'laning',
        'contact-address': 'Manzil',
        'contact-phone': 'Telefon',
        'contact-email': 'Email',
        'form-name': 'Ism',
        'form-email': 'Email',
        'form-subject': 'Mavzu',
        'form-message': 'Xabar',
        'form-submit': 'Yuborish',

        // Footer
        'footer-desc': 'O\'zbekiston Respublikasi Fanlar akademiyasining botanika sohasidagi yetakchi ilmiy muassasasi',
        'footer-quick': 'Tezkor havolalar',
        'footer-research': 'Tadqiqot yo\'nalishlari',
        'footer-contact': 'Aloqa ma\'lumotlari',
        'footer-copyright': 'Botanika Instituti. Barcha huquqlar himoyalangan.'
    },

    ru: {
        // Navigation
        'nav-home': 'Главная',
        'nav-about': 'Об институте',
        'nav-research': 'Исследования',
        'nav-garden': 'Ботанический сад',
        'nav-council': 'Учёный совет',
        'nav-publications': 'Публикации',
        'nav-contact': 'Контакты',
        'site-title': 'Институт Ботаники',

        // Hero Section
        'hero-title': 'Институт Ботаники Республики Узбекистан',
        'hero-subtitle': 'Исследуем мир растений, вносим вклад в сохранение природных ресурсов',
        'hero-research': 'Наши исследования',
        'hero-about': 'О нас',

        // About Section
        'about-title': 'Об институте',
        'about-subtitle': 'Ведущее научное учреждение, изучающее флору и фауну Узбекистана',
        'about-text1': 'Институт ботаники является составной частью Академии наук Республики Узбекистан и занимается глубоким изучением мира растений, разработкой путей сохранения и рационального использования природных ресурсов.',
        'about-text2': 'Институт был создан в 1950 году и на протяжении более 70 лет проводит важные исследования в области флоры Узбекистана, систематики растений, экологии и прикладной ботаники.',
        'stat-researchers': 'Исследователи',
        'stat-publications': 'Научные статьи',
        'stat-projects': 'Проекты',

        // Research Section
        'research-title': 'Направления исследований',
        'research-subtitle': 'Изучаем мир растений современными методами',
        'research-taxonomy': 'Систематика растений',
        'research-taxonomy-desc': 'Классификация видов флоры Узбекистана и изучение их эволюционного развития',
        'research-ecology': 'Экология растений',
        'research-ecology-desc': 'Изучение влияния изменений окружающей среды и выявление механизмов адаптации',
        'research-biotech': 'Биотехнология',
        'research-biotech-desc': 'Выделение полезных веществ из растений и методы размножения in vitro',
        'research-conservation': 'Охрана природы',
        'research-conservation-desc': 'Программы сохранения редких и исчезающих видов',

        // Botanical Garden Section
        'garden-title': 'Ташкентский ботанический сад',
        'garden-subtitle': 'Ботанический сад имени академика Ф.Н. Русанова - крупнейшая коллекция растений в Средней Азии',
        'garden-species': 'Видов растений',
        'garden-countries': 'Стран',
        'garden-hectares': 'Гектаров площади',
        'garden-founded': 'Основан',
        'garden-collections-title': 'Основные коллекции',
        'collection-endemic': 'Эндемичные растения',
        'collection-endemic-desc': 'Коллекция уникальных видов Узбекистана и Средней Азии',
        'collection-medicinal': 'Лекарственные растения',
        'collection-medicinal-desc': 'Растения, применяемые в традиционной и современной медицине',
        'collection-alpine': 'Горные растения',
        'collection-alpine-desc': 'Виды, собранные в хребтах Алай, Каратепа и Гиссар',
        'collection-desert': 'Пустынные растения',
        'collection-desert-desc': 'Виды, адаптированные к пустыням Кызылкум и Каракум',
        'garden-services-title': 'Услуги и возможности',
        'service-research': 'Научные исследования',
        'service-research-desc': 'Исследования по биологии и экологии растений',
        'service-education': 'Образовательные программы',
        'service-education-desc': 'Экскурсии для студентов и школьников',
        'service-conservation': 'Программы сохранения',
        'service-conservation-desc': 'Сохранение и размножение редких видов',
        'service-tours': 'Общественные туры',
        'service-tours-desc': 'Открытые туры и мастер-классы каждые выходные',

        // Science Council Section
        'council-title': 'Учёный совет',
        'council-subtitle': 'Научный орган, координирующий деятельность института',
        'council-about': 'О совете',
        'council-desc': 'Учёный совет занимается планированием, координацией и оценкой научной деятельности института. В состав совета входят известные учёные и специалисты.',
        'council-functions': 'Основные задачи:',
        'council-task1': 'Определение направлений научных исследований',
        'council-task2': 'Оценка и утверждение научных проектов',
        'council-task3': 'Защита диссертационных работ',
        'council-task4': 'Разработка программ международного сотрудничества',
        'council-members': 'Члены совета',
        'member1-position': 'Председатель совета',
        'member2-position': 'Заместитель председателя',
        'member3-position': 'Секретарь',

        // Publications Section
        'pub-title': 'Публикации',
        'pub-subtitle': 'Результаты наших научных исследований',
        'pub-journal': 'Научный журнал',
        'pub-journal-desc': 'Журнал "Ботаника Узбекистана" издается 4 раза в год',
        'pub-articles': 'Научные статьи',
        'pub-articles-desc': 'Сборник статей, опубликованных в международных журналах',
        'pub-dissertations': 'Диссертации',
        'pub-dissertations-desc': 'Защищённые докторские и магистерские диссертации',
        'pub-read': 'Читать',

        // Contact Section
        'contact-title': 'Контакты',
        'contact-subtitle': 'Свяжитесь с нами',
        'contact-address': 'Адрес',
        'contact-phone': 'Телефон',
        'contact-email': 'Email',
        'form-name': 'Имя',
        'form-email': 'Email',
        'form-subject': 'Тема',
        'form-message': 'Сообщение',
        'form-submit': 'Отправить',

        // Footer
        'footer-desc': 'Ведущее научное учреждение Академии наук Республики Узбекистан в области ботаники',
        'footer-quick': 'Быстрые ссылки',
        'footer-research': 'Направления исследований',
        'footer-contact': 'Контактная информация',
        'footer-copyright': 'Институт ботаники. Все права защищены.'
    },

    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Institute',
        'nav-research': 'Research',
        'nav-garden': 'Botanical Garden',
        'nav-council': 'Science Council',
        'nav-publications': 'Publications',
        'nav-contact': 'Contact',
        'site-title': 'Institute of Botany',

        // Hero Section
        'hero-title': 'Institute of Botany of the Republic of Uzbekistan',
        'hero-subtitle': 'Exploring the world of plants, contributing to the conservation of natural resources',
        'hero-research': 'Our Research',
        'hero-about': 'About Us',

        // About Section
        'about-title': 'About the Institute',
        'about-subtitle': 'Leading scientific institution studying the flora and fauna of Uzbekistan',
        'about-text1': 'The Institute of Botany is an integral part of the Academy of Sciences of the Republic of Uzbekistan and is engaged in deep study of the plant world, developing ways to preserve and rationally use natural resources.',
        'about-text2': 'The institute was established in 1950 and for more than 70 years has been conducting important research in the field of Uzbekistan\'s flora, plant systematics, ecology and applied botany.',
        'stat-researchers': 'Researchers',
        'stat-publications': 'Scientific Articles',
        'stat-projects': 'Projects',

        // Research Section
        'research-title': 'Research Directions',
        'research-subtitle': 'We study the world of plants using modern methods',
        'research-taxonomy': 'Plant Systematics',
        'research-taxonomy-desc': 'Classification of Uzbekistan flora species and study of their evolutionary development',
        'research-ecology': 'Plant Ecology',
        'research-ecology-desc': 'Study of environmental impacts and identification of adaptation mechanisms',
        'research-biotech': 'Biotechnology',
        'research-biotech-desc': 'Extraction of useful substances from plants and in vitro propagation methods',
        'research-conservation': 'Nature Conservation',
        'research-conservation-desc': 'Conservation programs for rare and endangered species',

        // Botanical Garden Section
        'garden-title': 'Tashkent Botanical Garden',
        'garden-subtitle': 'F.N. Rusanov Botanical Garden - the largest plant collection in Central Asia',
        'garden-species': 'Plant species',
        'garden-countries': 'Countries',
        'garden-hectares': 'Hectares area',
        'garden-founded': 'Founded',
        'garden-collections-title': 'Main Collections',
        'collection-endemic': 'Endemic Plants',
        'collection-endemic-desc': 'Collection of unique species of Uzbekistan and Central Asia',
        'collection-medicinal': 'Medicinal Plants',
        'collection-medicinal-desc': 'Plants used in traditional and modern medicine',
        'collection-alpine': 'Mountain Plants',
        'collection-alpine-desc': 'Species collected from Alay, Karatepa and Hissar ranges',
        'collection-desert': 'Desert Plants',
        'collection-desert-desc': 'Species adapted to Kyzylkum and Karakum deserts',
        'garden-services-title': 'Services and Opportunities',
        'service-research': 'Scientific Research',
        'service-research-desc': 'Research on plant biology and ecology',
        'service-education': 'Educational Programs',
        'service-education-desc': 'Excursions for students and schoolchildren',
        'service-conservation': 'Conservation Programs',
        'service-conservation-desc': 'Conservation and propagation of rare species',
        'service-tours': 'Public Tours',
        'service-tours-desc': 'Open tours and master classes every weekend',

        // Science Council Section
        'council-title': 'Science Council',
        'council-subtitle': 'Scientific body coordinating institute activities',
        'council-about': 'About the Council',
        'council-desc': 'The Science Council is engaged in planning, coordinating and evaluating the scientific activities of the institute. The council includes renowned scientists and specialists.',
        'council-functions': 'Main tasks:',
        'council-task1': 'Determining scientific research directions',
        'council-task2': 'Evaluating and approving scientific projects',
        'council-task3': 'Defense of dissertation works',
        'council-task4': 'Development of international cooperation programs',
        'council-members': 'Council Members',
        'member1-position': 'Council Chairman',
        'member2-position': 'Deputy Chairman',
        'member3-position': 'Secretary',

        // Publications Section
        'pub-title': 'Publications',
        'pub-subtitle': 'Results of our scientific research',
        'pub-journal': 'Scientific Journal',
        'pub-journal-desc': 'The journal "Botany of Uzbekistan" is published 4 times a year',
        'pub-articles': 'Scientific Articles',
        'pub-articles-desc': 'Collection of articles published in international journals',
        'pub-dissertations': 'Dissertations',
        'pub-dissertations-desc': 'Defended doctoral and master\'s dissertations',
        'pub-read': 'Read',

        // Contact Section
        'contact-title': 'Contact',
        'contact-subtitle': 'Get in touch with us',
        'contact-address': 'Address',
        'contact-phone': 'Phone',
        'contact-email': 'Email',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-submit': 'Submit',

        // Footer
        'footer-desc': 'Leading scientific institution of the Academy of Sciences of the Republic of Uzbekistan in the field of botany',
        'footer-quick': 'Quick Links',
        'footer-research': 'Research Directions',
        'footer-contact': 'Contact Information',
        'footer-copyright': 'Institute of Botany. All rights reserved.'
    }
};

// Language switching functionality
let currentLanguage = 'uz';

function switchLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-key attributes
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferred-language') || 'uz';
    switchLanguage(savedLanguage);
});

// Export for use in other scripts
window.translations = translations;
window.switchLanguage = switchLanguage;
window.currentLanguage = currentLanguage;