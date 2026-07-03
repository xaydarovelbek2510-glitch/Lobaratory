# 🌿 Botanika Instituti — Veb-sayt

O'zbekiston Fanlar Akademiyasi Botanika instituti veb-sayti. **Angular 17** (frontend) + **Java Spring Boot 3** (backend) texnologiyalari asosida yaratilgan.

## 📁 Loyiha tuzilmasi

```
Lobaratory/
├── frontend/              # Angular 17 SPA
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/    # Shared components (header, navbar, sidebar, footer)
│   │   │   ├── pages/         # Page components (home, about, lab-flora, ...)
│   │   │   ├── services/      # API service
│   │   │   ├── app.component.ts
│   │   │   └── app.routes.ts  # Routing configuration
│   │   ├── environments/
│   │   ├── styles.css         # Global styles
│   │   ├── index.html
│   │   └── main.ts
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── backend/               # Java Spring Boot 3
│   ├── src/main/java/uz/botany/api/
│   │   ├── controller/    # REST Controllers
│   │   ├── model/         # Data models (records)
│   │   ├── service/       # Business logic
│   │   └── BotanyApiApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
└── README.md
```

## 🚀 Ishga tushirish

### Backend (Java Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

Server `http://localhost:8080` da ishga tushadi.

**API Endpoints:**
- `GET /api/news` — Yangiliklar ro'yxati
- `GET /api/stats` — Statistika
- `GET /api/laboratories` — Barcha laboratoriyalar
- `GET /api/laboratories/{id}` — Bitta laboratoriya
- `GET /api/health` — Health check

### Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

Sayt `http://localhost:4200` da ochiladi.

## 🏗️ Texnologiyalar

| Layer | Texnologiya | Versiya |
|-------|-------------|---------|
| Frontend | Angular | 17.x |
| Backend | Spring Boot | 3.2.5 |
| Java | JDK | 17+ |
| Build (Frontend) | Angular CLI | 17.x |
| Build (Backend) | Maven | 3.9+ |

## 📋 Sayt sahifalari

| Sahifa | Route | Tavsif |
|--------|-------|--------|
| Bosh sahifa | `/` | Slayder, statistika, yangiliklar |
| Biz haqimizda | `/about` | Institut tarixi va vazifalari |
| Struktura | `/structure` | Tashkiliy tuzilma |
| Laboratoriyalar | `/laboratories` | 6 ta lab ro'yxati |
| Flora lab. | `/lab-flora` | Flora laboratoriyasi |
| Geobotanika | `/lab-geobotany` | Geobotanika lab. |
| Molekulyar bio. | `/lab-molecular` | Molekulyar biologiya |
| Fitokimyo | `/lab-phytochemistry` | Fitokimyo lab. |
| Ekologiya | `/lab-ecology` | Ekologiya lab. |
| Tabiiy resurslar | `/lab-resources` | Tabiiy resurslar |
| Ilmiy faoliyat | `/research` | Tadqiqot yo'nalishlari |
| Loyihalar | `/projects` | Joriy loyihalar |
| Kontaktlar | `/contacts` | Manzil, telefon |
| Yangiliklar | `/news` | So'nggi yangiliklar |

## 🐳 Docker orqali ishga tushirish

Eng oson usul — **Docker Compose** bilan bitta komandada:

```bash
# Loyihani clone qiling
git clone https://github.com/xaydarovelbek2510-glitch/Lobaratory.git
cd Lobaratory

# Docker orqali ishga tushirish (bitta komanda!)
docker-compose up --build
```

Tayyor! Brauzerda oching:
- 🌐 **Sayt:** http://localhost
- 🔌 **API:** http://localhost:8080/api/health

### Docker buyruqlari:

```bash
# Background'da ishga tushirish
docker-compose up --build -d

# Loglarni ko'rish
docker-compose logs -f

# To'xtatish
docker-compose down

# Qayta build qilish (kod o'zgarganida)
docker-compose up --build

# Barcha konteynerlar va image'larni tozalash
docker-compose down --rmi all
```

### Docker tuzilmasi:

| Konteyner | Texnologiya | Port | Vazifa |
|-----------|-------------|------|--------|
| `botany-frontend` | Nginx + Angular build | **:80** | Saytni ko'rsatish + API proxy |
| `botany-backend` | JRE 17 + Spring Boot | **:8080** | REST API |

### Qanday ishlaydi:

```
Brauzer → :80 (Nginx)
              ├── /            → Angular SPA (static fayllar)
              └── /api/*       → proxy → :8080 (Spring Boot)
```

---

## 🎨 Dizayn xususiyatlari

- ✅ botany.uz saytidan ilhomlangan professional dizayn
- ✅ Dropdown menyular (2 darajali)
- ✅ Har sahifada chap sidebar navigatsiya
- ✅ Breadcrumb yo'naltkichlar
- ✅ Responsive dizayn (mobil/tablet/desktop)
- ✅ Lazy loading (sahifalar kerak bo'lganda yuklanadi)
- ✅ Standalone components (Angular 17)
