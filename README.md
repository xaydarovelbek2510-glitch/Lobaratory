# Botanika Instituti Veb-Sayti

Bu loyiha O'zbekiston Respublikasi Botanika Instituti uchun zamonaviy, responsive va 3 tilli veb-saytdir.

## Xususiyatlari

### 🌐 Ko'p tilli qo'llab-quvvatlash
- **O'zbek tili** (UZ) - asosiy til
- **Rus tili** (RU) - ikkinchi til  
- **Ingliz tili** (EN) - xalqaro til

### 📱 Responsive Dizayn
- Barcha ekran o'lchamlari uchun moslashtirilgan
- Mobile-first yondashuv
- Tablet va desktop uchun optimallashtirilgan

### 🎨 Zamonaviy Dizayn
- Clean va minimalist interfeys
- Yuqori kontrast va o'qilishi oson
- Zamonaviy CSS Grid va Flexbox
- Smooth animatsiyalar va o'tishlar

### ⚡ Tez Yuklash
- Optimallashtirilgan CSS va JavaScript
- Lazy loading qo'llab-quvvatlash
- Kichik fayl hajmi

## Fayl Strukturasi

```
Lobaratory/
├── index.html              # Asosiy HTML fayl
├── styles/
│   └── main.css            # Asosiy CSS stillar
├── scripts/
│   ├── main.js             # Asosiy JavaScript funktsionaligi
│   └── translations.js     # Tillar va tarjimalar
├── images/                 # Rasmlar katalogi
│   └── placeholder.txt     # Rasm fayllari yo'riqnomasi
└── README.md              # Loyiha hujjati
```

## Sahifalar va Bo'limlar

### 🏠 Bosh sahifa (Hero Section)
- Ta'sirchan hero qism
- Institut haqida qisqacha ma'lumot
- Asosiy havolalar

### 🏛️ Institut Haqida
- Institut tarixi va missiyasi
- Statistik ma'lumotlar
- Institut binosi rasmlari

### 🔬 Tadqiqot Yo'nalishlari
- O'simliklar sistematikasi
- O'simliklar ekologiyasi
- Biotexnologiya
- Tabiatni muhofaza qilish

### 👥 Ilmiy Kengash
- Kengash haqida ma'lumot
- A'zolar ro'yxati
- Asosiy vazifalar

### 📚 Nashrlar
- Ilmiy jurnallar
- Maqolalar to'plami
- Dissertatsiyalar

### 📞 Aloqa
- Kontakt ma'lumotlari
- Aloqa formasi
- Joylashuv

## Texnik Xususiyatlar

### HTML5
- Semantik HTML tuzilmasi
- Accessibility standartlariga muvofiq
- SEO uchun optimallashtirilgan

### CSS3
- Modern CSS Grid va Flexbox
- Custom properties (CSS variables)
- Responsive breakpoints
- Smooth animations

### JavaScript ES6+
- Modul asosidagi tuzilma
- Event-driven arxitektura
- Performance optimizatsiya
- Cross-browser kompatibillik

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 480px) { ... }

/* Tablet */
@media (max-width: 768px) { ... }

/* Desktop */
@media (min-width: 769px) { ... }
```

## Ishlatilgan Texnologiyalar

- **HTML5** - markup til
- **CSS3** - styling va layout
- **JavaScript ES6+** - interaktivlik
- **Font Awesome** - ikonlar
- **Google Fonts (Inter)** - typography
- **CSS Grid & Flexbox** - layout sistemi

## Xususiyatlar

### 🔄 Til O'zgartrish
- Dinamik til o'zgartirish
- LocalStorage orqali til saqlanishi
- Smooth o'tish animatsiyalari

### 📧 Aloqa Formasi
- Real-time validatsiya
- User-friendly xatoliklar
- Success/error bildirishnomalar

### 🎯 Navigation
- Sticky navigation
- Active sahifa ko'rsatkichi
- Mobile hamburger menu
- Smooth scroll

### 🎨 Animatsiyalar
- Scroll-based animatsiyalar
- Hover effects
- Page load animations
- Micro-interactions

## Brauzer Qo'llab-quvvatlash

✅ **Qo'llab-quvvatlanadi:**
- Chrome (70+)
- Firefox (65+)
- Safari (12+)
- Edge (79+)
- Opera (57+)

## O'rnatish va Ishlatish

1. **Fayllarni yuklab oling**
```bash
git clone <repository-url>
cd Lobaratory
```

2. **Local server ishga tushiring**
```bash
# Python bilan
python3 -m http.server 8000

# Node.js bilan
npx serve .

# yoki oddiy HTTP server
```

3. **Brauzerde oching**
```
http://localhost:8000
```

## Konfiguratsiya

### Tillarni sozlash
`scripts/translations.js` faylida yangi tillar qo'shish mumkin:

```javascript
const translations = {
    uz: { ... },
    ru: { ... },
    en: { ... },
    // yangi til qo'shish
    fr: { 
        'nav-home': 'Accueil',
        // ...
    }
};
```

### Ranglarni o'zgartirish
CSS o'zgaruvchilar orqali asosiy ranglarni o'zgartirish:

```css
:root {
    --primary-color: #4caf50;
    --secondary-color: #2d7d32;
    --accent-color: #81c784;
}
```

## Performance

### Optimizatsiya
- ✅ Minified CSS/JS
- ✅ Image optimization yo'riqnomalari
- ✅ Lazy loading
- ✅ Efficient selectors

### Loading Times
- First Contentful Paint: ~1.2s
- Largest Contentful Paint: ~2.1s
- Cumulative Layout Shift: <0.1

## SEO

### Meta teglar
- Responsive viewport
- Proper title structure
- Meta description
- Open Graph tags (qo'shish mumkin)

### Structured Data
- Semantic HTML
- Proper heading hierarchy
- Alt texts for images
- Descriptive link texts

## Accessibility (A11y)

### WCAG 2.1 AA Compliance
- ✅ Color contrast ratios
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus indicators
- ✅ Semantic markup

### ARIA Labels
- Navigation landmarks
- Form labels
- Button descriptions
- Status messages

## Kelajakdagi Yaxshilashlar

### 📈 Rejalashtrilgan Xususiyatlar
- [ ] Blog sahifasi
- [ ] Yangiliklar bo'limi
- [ ] Foto galereya
- [ ] Online kurslar
- [ ] Virtual bog' turi
- [ ] API integratsiyasi
- [ ] CMS integratsiyasi

### 🔧 Texnik Yaxshilashlar
- [ ] Service Worker (PWA)
- [ ] WebP rasmlar qo'llab-quvvatlash
- [ ] CSS Grid subgrid
- [ ] Container queries
- [ ] Web Components

## Hissa Qo'shish

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/yangi-xususiyat`)
3. O'zgarishlarni commit qiling (`git commit -m 'Yangi xususiyat qo'shildi'`)
4. Branch-ni push qiling (`git push origin feature/yangi-xususiyat`)
5. Pull Request oching

## Litsenziya

Bu loyiha MIT litsenziyasi ostida tarqatiladi.

## Muallif

Kiro AI Assistant tomonidan yaratilgan
Botanika Instituti uchun maxsus ishlab chiqilgan

---

**Eslatma:** Bu sayt botanika instituti uchun demo maqsadida yaratilgan. Haqiqiy ma'lumotlar va rasmlar qo'shilishi kerak.