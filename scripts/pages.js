// Page content definitions for SPA
const pageContent = {
    home: `
        <div class="page-container">
            <div class="hero-simple">
                <div class="hero-content">
                    <h1 class="hero-title" data-key="hero-title">O'zbekiston Respublikasi Botanika Instituti</h1>
                    <p class="hero-subtitle" data-key="hero-subtitle">O'simliklar dunyosini tadqiq qilamiz, tabiiy resurslarni saqlashga hissa qo'shamiz</p>
                    <div class="hero-stats">
                        <div class="stat-card">
                            <div class="stat-number">150+</div>
                            <div class="stat-label" data-key="stat-researchers">Tadqiqotchilar</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">4,500+</div>
                            <div class="stat-label" data-key="stat-species">O'simlik turlari</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">500+</div>
                            <div class="stat-label" data-key="stat-publications">Ilmiy maqolalar</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">70+</div>
                            <div class="stat-label" data-key="stat-years">Yillik tajriba</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    about: `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title" data-key="about-title">Institut Haqida</h1>
                <p class="page-subtitle" data-key="about-subtitle">O'zbekiston flora va fauna dunyosini o'rganuvchi yetakchi ilmiy muassasa</p>
            </div>
            
            <div class="content-grid">
                <div class="content-main">
                    <div class="text-content">
                        <h3 data-key="about-history">Tariximiz</h3>
                        <p data-key="about-text1">Botanika Instituti O'zbekiston Respublikasi Fanlar akademiyasining tarkibiy qismi bo'lib, o'simliklar dunyosini chuqur o'rganish, tabiiy resurslarni saqlash va racional foydalanish yo'llarini ishlab chiqish bilan shug'ullanadi.</p>
                        
                        <p data-key="about-text2">Institut 1950-yilda tashkil etilgan bo'lib, 70 yildan ortiq vaqt davomida O'zbekiston florasi, o'simliklar sistematikasi, ekologiyasi va amaliy botanika sohasida muhim tadqiqotlar olib bormoqda.</p>
                        
                        <h3 data-key="about-mission">Missiyamiz</h3>
                        <p data-key="about-mission-text">O'zbekiston o'simliklarini o'rganish, saqlash va kelajak avlodlar uchun muhofaza qilish orqali ilm-fan rivojiga hissa qo'shish.</p>
                    </div>
                </div>
                
                <div class="content-sidebar">
                    <div class="info-card">
                        <h4 data-key="about-info">Asosiy Ma'lumotlar</h4>
                        <ul class="info-list">
                            <li><strong data-key="about-founded">Tashkil etilgan:</strong> 1950-yil</li>
                            <li><strong data-key="about-staff">Xodimlar:</strong> 150+ kishi</li>
                            <li><strong data-key="about-location">Joylashuv:</strong> Toshkent shahri</li>
                            <li><strong data-key="about-area">Maydon:</strong> 65 gektar</li>
                        </ul>
                    </div>
                    
                    <div class="info-card">
                        <h4 data-key="about-achievements">Yutuqlarimiz</h4>
                        <ul class="achievement-list">
                            <li data-key="achievement1">500+ ilmiy maqola</li>
                            <li data-key="achievement2">25+ davlat loyihalari</li>
                            <li data-key="achievement3">IUCN bilan hamkorlik</li>
                            <li data-key="achievement4">Xalqaro tan olish</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,

    research: `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title" data-key="research-title">Tadqiqot Yo'nalishlari</h1>
                <p class="page-subtitle" data-key="research-subtitle">Zamonaviy usullar yordamida o'simliklar dunyosini o'rganamiz</p>
            </div>
            
            <div class="research-grid-simple">
                <div class="research-item">
                    <div class="research-icon">
                        <i class="fas fa-microscope"></i>
                    </div>
                    <h3 data-key="research-taxonomy">O'simliklar Sistematikasi</h3>
                    <p data-key="research-taxonomy-desc">O'zbekiston flora turlarini tasniflash va ularning evolyutsion rivojlanishini o'rganish</p>
                    <ul class="research-details">
                        <li>Taksonomilik tahlil</li>
                        <li>Filogenetik tadqiqotlar</li>
                        <li>Morfologik o'rganish</li>
                        <li>Molekulyar genetika</li>
                    </ul>
                </div>
                
                <div class="research-item">
                    <div class="research-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <h3 data-key="research-ecology">O'simliklar Ekologiyasi</h3>
                    <p data-key="research-ecology-desc">Atrof-muhit o'zgarishlari ta'sirini o'rganish va moslashish mexanizmlarini aniqlash</p>
                    <ul class="research-details">
                        <li>Iqlim o'zgarishi ta'siri</li>
                        <li>Ekotizimlar dinamikasi</li>
                        <li>Biotop o'rganish</li>
                        <li>Populyatsiya ekologiyasi</li>
                    </ul>
                </div>
                
                <div class="research-item">
                    <div class="research-icon">
                        <i class="fas fa-flask"></i>
                    </div>
                    <h3 data-key="research-biotech">Biotexnologiya</h3>
                    <p data-key="research-biotech-desc">O'simliklardan foydali moddalar ajratib olish va in vitro ko'paytirish usullari</p>
                    <ul class="research-details">
                        <li>Hujayra kultura</li>
                        <li>Bioaktiv moddalar</li>
                        <li>Genetik muhandislik</li>
                        <li>Mikropropagatsiya</li>
                    </ul>
                </div>
                
                <div class="research-item">
                    <div class="research-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 data-key="research-conservation">Tabiatni Muhofaza Qilish</h3>
                    <p data-key="research-conservation-desc">Kam uchraydigan va yo'qolib ketish xavfi ostidagi turlarni saqlash dasturlari</p>
                    <ul class="research-details">
                        <li>Qizil kitob turlari</li>
                        <li>Ex-situ saqlash</li>
                        <li>Habitat rekonstruksiyasi</li>
                        <li>Xalqaro hamkorlik</li>
                    </ul>
                </div>
            </div>
        </div>
    `,

    garden: `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title" data-key="garden-title">Toshkent Botanika Bog'i</h1>
                <p class="page-subtitle" data-key="garden-subtitle">Akademik F.N. Rusanov nomidagi botanika bog'i</p>
            </div>
            
            <div class="garden-overview">
                <div class="garden-stats-simple">
                    <div class="garden-stat">
                        <i class="fas fa-tree"></i>
                        <div>
                            <span class="number">4,500+</span>
                            <span class="label" data-key="garden-species">O'simlik turlari</span>
                        </div>
                    </div>
                    <div class="garden-stat">
                        <i class="fas fa-globe"></i>
                        <div>
                            <span class="number">85</span>
                            <span class="label" data-key="garden-countries">Mamlakatdan</span>
                        </div>
                    </div>
                    <div class="garden-stat">
                        <i class="fas fa-leaf"></i>
                        <div>
                            <span class="number">65</span>
                            <span class="label" data-key="garden-hectares">Gektar maydon</span>
                        </div>
                    </div>
                    <div class="garden-stat">
                        <i class="fas fa-calendar"></i>
                        <div>
                            <span class="number">1943</span>
                            <span class="label" data-key="garden-founded">Tashkil etilgan</span>
                        </div>
                    </div>
                </div>
                
                <div class="collections-overview">
                    <h3 data-key="garden-collections-title">Asosiy Kolleksiyalar</h3>
                    <div class="collections-simple">
                        <div class="collection-item">
                            <i class="fas fa-seedling"></i>
                            <div>
                                <h4 data-key="collection-endemic">Endemik O'simliklar</h4>
                                <span class="count">850+ tur</span>
                            </div>
                        </div>
                        <div class="collection-item">
                            <i class="fas fa-spa"></i>
                            <div>
                                <h4 data-key="collection-medicinal">Dorivor O'simliklar</h4>
                                <span class="count">650+ tur</span>
                            </div>
                        </div>
                        <div class="collection-item">
                            <i class="fas fa-mountain"></i>
                            <div>
                                <h4 data-key="collection-alpine">Tog' O'simliklari</h4>
                                <span class="count">720+ tur</span>
                            </div>
                        </div>
                        <div class="collection-item">
                            <i class="fas fa-cactus"></i>
                            <div>
                                <h4 data-key="collection-desert">Cho'l O'simliklari</h4>
                                <span class="count">480+ tur</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="services-overview">
                    <h3 data-key="garden-services-title">Xizmatlar</h3>
                    <div class="services-simple">
                        <div class="service-simple">
                            <i class="fas fa-microscope"></i>
                            <span data-key="service-research">Ilmiy Tadqiqotlar</span>
                        </div>
                        <div class="service-simple">
                            <i class="fas fa-graduation-cap"></i>
                            <span data-key="service-education">Ta'lim Dasturlari</span>
                        </div>
                        <div class="service-simple">
                            <i class="fas fa-seedling"></i>
                            <span data-key="service-conservation">Muhofaza Dasturlari</span>
                        </div>
                        <div class="service-simple">
                            <i class="fas fa-users"></i>
                            <span data-key="service-tours">Jamoat Turlari</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    council: `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title" data-key="council-title">Ilmiy Kengash</h1>
                <p class="page-subtitle" data-key="council-subtitle">Institut faoliyatini koordinatsiya qiluvchi ilmiy organi</p>
            </div>
            
            <div class="council-overview">
                <div class="council-info">
                    <h3 data-key="council-about">Kengash Haqida</h3>
                    <p data-key="council-desc">Ilmiy Kengash institutning ilmiy faoliyatini rejalashtirish, koordinatsiya qilish va baholash bilan shug'ullanadi. Kengash tarkibiga taniqli olimlar va mutaxassislar kiradi.</p>
                    
                    <div class="council-functions-simple">
                        <h4 data-key="council-functions">Asosiy Vazifalar:</h4>
                        <div class="functions-grid">
                            <div class="function-item">
                                <i class="fas fa-search"></i>
                                <span data-key="council-task1">Tadqiqot yo'nalishlarini belgilash</span>
                            </div>
                            <div class="function-item">
                                <i class="fas fa-check-circle"></i>
                                <span data-key="council-task2">Loyihalarni baholash</span>
                            </div>
                            <div class="function-item">
                                <i class="fas fa-graduation-cap"></i>
                                <span data-key="council-task3">Dissertatsiya himoyasi</span>
                            </div>
                            <div class="function-item">
                                <i class="fas fa-globe"></i>
                                <span data-key="council-task4">Xalqaro hamkorlik</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="council-members-simple">
                    <h3 data-key="council-members">Kengash A'zolari</h3>
                    <div class="members-list">
                        <div class="member-simple">
                            <div class="member-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="member-info">
                                <h4>Prof. A. Karimov</h4>
                                <p data-key="member1-position">Kengash raisi</p>
                            </div>
                        </div>
                        
                        <div class="member-simple">
                            <div class="member-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="member-info">
                                <h4>Prof. M. Nazarova</h4>
                                <p data-key="member2-position">Kengash o'rinbosari</p>
                            </div>
                        </div>
                        
                        <div class="member-simple">
                            <div class="member-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="member-info">
                                <h4>Dr. S. Umarov</h4>
                                <p data-key="member3-position">Kotib</p>
                            </div>
                        </div>
                        
                        <div class="member-simple">
                            <div class="member-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="member-info">
                                <h4>Dr. N. Abdullayeva</h4>
                                <p>Ekologiya mutaxassisi</p>
                            </div>
                        </div>
                        
                        <div class="member-simple">
                            <div class="member-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="member-info">
                                <h4>Prof. R. Yusupov</h4>
                                <p>Sistematika bo'limi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    publications: `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title" data-key="pub-title">Nashrlar</h1>
                <p class="page-subtitle" data-key="pub-subtitle">Ilmiy tadqiqotlarimiz natijalari</p>
            </div>
            
            <div class="publications-overview">
                <div class="publications-grid-simple">
                    <div class="publication-item">
                        <div class="pub-icon">
                            <i class="fas fa-book"></i>
                        </div>
                        <div class="pub-content">
                            <h3 data-key="pub-journal">Ilmiy Jurnal</h3>
                            <p data-key="pub-journal-desc">"O'zbekiston botanikasi" jurnali yilda 4 marta chop etiladi</p>
                            <div class="pub-meta">
                                <span class="pub-count">Jami: 120+ son</span>
                                <a href="#" class="pub-link" data-key="pub-read">O'qish</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="publication-item">
                        <div class="pub-icon">
                            <i class="fas fa-file-alt"></i>
                        </div>
                        <div class="pub-content">
                            <h3 data-key="pub-articles">Ilmiy Maqolalar</h3>
                            <p data-key="pub-articles-desc">Xalqaro jurnallarda chop etilgan maqolalar to'plami</p>
                            <div class="pub-meta">
                                <span class="pub-count">Jami: 500+ maqola</span>
                                <a href="#" class="pub-link" data-key="pub-read">O'qish</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="publication-item">
                        <div class="pub-icon">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div class="pub-content">
                            <h3 data-key="pub-dissertations">Dissertatsiyalar</h3>
                            <p data-key="pub-dissertations-desc">Himoya qilingan doktorlik va magistrlik dissertatsiyalari</p>
                            <div class="pub-meta">
                                <span class="pub-count">Jami: 150+ ish</span>
                                <a href="#" class="pub-link" data-key="pub-read">O'qish</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="publication-item">
                        <div class="pub-icon">
                            <i class="fas fa-book-open"></i>
                        </div>
                        <div class="pub-content">
                            <h3>Monografiyalar</h3>
                            <p>O'zbekiston florasi bo'yicha fundamental asarlar</p>
                            <div class="pub-meta">
                                <span class="pub-count">Jami: 25+ kitob</span>
                                <a href="#" class="pub-link" data-key="pub-read">O'qish</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="recent-publications">
                    <h3>So'nggi Nashrlar</h3>
                    <div class="recent-list">
                        <div class="recent-item">
                            <span class="recent-date">2024</span>
                            <div class="recent-content">
                                <h4>"O'zbekiston Endemik O'simliklari" monografiyasi</h4>
                                <p>Prof. A. Karimov va hammuallifi</p>
                            </div>
                        </div>
                        <div class="recent-item">
                            <span class="recent-date">2024</span>
                            <div class="recent-content">
                                <h4>"Qizilqum Cho'li Flora Xilma-xilligi"</h4>
                                <p>Dr. M. Nazarova</p>
                            </div>
                        </div>
                        <div class="recent-item">
                            <span class="recent-date">2023</span>
                            <div class="recent-content">
                                <h4>"Biotexnologiya va O'simliklar"</h4>
                                <p>Dr. S. Umarov</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    contact: `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title" data-key="contact-title">Aloqa</h1>
                <p class="page-subtitle" data-key="contact-subtitle">Biz bilan bog'laning</p>
            </div>
            
            <div class="contact-overview">
                <div class="contact-info-simple">
                    <div class="contact-card">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4 data-key="contact-address">Manzil</h4>
                            <p>Toshkent sh., Durmon Yuli ko'chasi, 32-uy<br>100125, O'zbekiston</p>
                        </div>
                    </div>
                    
                    <div class="contact-card">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h4 data-key="contact-phone">Telefon</h4>
                            <p>+998 71 262-39-53<br>+998 71 262-49-85</p>
                        </div>
                    </div>
                    
                    <div class="contact-card">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4 data-key="contact-email">Email</h4>
                            <p>info@botany.uz<br>science@botany.uz</p>
                        </div>
                    </div>
                    
                    <div class="contact-card">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h4>Ish Vaqti</h4>
                            <p>Dush-Juma: 9:00 - 18:00<br>Shanba: 9:00 - 14:00</p>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form-simple">
                    <h3>Bizga Xabar Yuboring</h3>
                    <form id="contactForm" class="simple-form">
                        <div class="form-row">
                            <input type="text" id="name" name="name" placeholder="Ismingiz" required>
                            <input type="email" id="email" name="email" placeholder="Email manzilingiz" required>
                        </div>
                        <input type="text" id="subject" name="subject" placeholder="Mavzu" required>
                        <textarea id="message" name="message" placeholder="Xabaringiz" required></textarea>
                        <button type="submit" class="submit-btn">
                            <i class="fas fa-paper-plane"></i>
                            <span data-key="form-submit">Yuborish</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `
};

// Export for use in main.js
window.pageContent = pageContent;