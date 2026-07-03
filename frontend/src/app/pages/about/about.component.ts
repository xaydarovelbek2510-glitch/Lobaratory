import { Component } from '@angular/core';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({ selector: 'app-about', standalone: true, imports: [SidebarComponent],
  template: `
    <div class="page-header"><div class="container"><h1>Biz haqimizda</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <span>Biz haqimizda</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'STRUKTURA'" [links]="links"></app-sidebar>
      <div class="main-content">
        <h2>O'zbekiston Botanika Instituti</h2>
        <p>O'zbekiston Fanlar Akademiyasi Botanika instituti 1938-yilda tashkil etilgan. Markaziy Osiyo mintaqasida o'simliklar dunyosini o'rganish bo'yicha yetakchi markaz.</p>
        <div class="info-box"><p><strong>Misiya:</strong> O'zbekiston o'simliklar dunyosini o'rganish, muhofaza qilish va barqaror foydalanish uchun ilmiy asos yaratish.</p></div>
        <h3>Asosiy vazifalar</h3>
        <ul><li>O'zbekiston florasini inventarizatsiya qilish</li><li>Noyob turlarni muhofaza qilish</li><li>Dorivor o'simliklarni o'rganish</li><li>Ekologik monitoring</li><li>Yosh olimlar tayyorlash</li><li>Xalqaro hamkorlik</li></ul>
        <div class="stats-mini"><div class="stat-mini"><strong>4300+</strong><span>O'simlik turi</span></div><div class="stat-mini"><strong>1.5M+</strong><span>Gerbariy</span></div><div class="stat-mini"><strong>85+</strong><span>Yillik tarix</span></div></div>
        <h3>Xalqaro hamkorlik</h3>
        <ul><li>Kew Royal Botanic Gardens (Buyuk Britaniya)</li><li>Missouri Botanical Garden (AQSh)</li><li>Martin-Lyuter universiteti (Germaniya)</li><li>Kunming Botanika instituti (Xitoy)</li></ul>
      </div>
    </div></section>
  ` })
export class AboutComponent {
  links: SidebarLink[] = [
    { label: 'Biz haqimizda', route: '/about' },
    { label: 'Institut tuzilmasi', route: '/structure' },
    { label: 'Laboratoriyalar', route: '/laboratories' },
    { label: 'Ilmiy faoliyat', route: '/research' },
    { label: 'Loyihalar', route: '/projects' }
  ];
}
