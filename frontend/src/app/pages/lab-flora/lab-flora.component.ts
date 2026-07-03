import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; from '@angular/core';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-lab-flora',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Flora laboratoriyasi</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <a routerLink="/laboratories">Laboratoriyalar</a> › <span>Flora</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'LABORATORIYALAR'" [links]="labLinks"></app-sidebar>
      <div class="main-content">
        <h2>O'zbekiston florasi laboratoriyasi</h2>
        <p>Flora laboratoriyasi — institutning eng qadimgi va asosiy bo'linmasi. 1938-yildan beri O'zbekiston va Markaziy Osiyo florasini sistematik o'rganish bo'yicha fundamental tadqiqotlar olib boradi.</p>
        <div class="info-box"><p><strong>Laboratoriya mudiri:</strong> b.f.d., professor Tojibaev K.Sh.</p><p><strong>Xodimlar soni:</strong> 12 ta ilmiy xodim</p></div>
        <h3>Asosiy tadqiqot yo'nalishlari</h3>
        <ul>
          <li>O'zbekiston florasining to'liq inventarizatsiyasi</li>
          <li>Yangi turlar va podturlarni aniqlash va tavsiflash</li>
          <li>Gerbariy fondini to'ldirish va digitalizatsiya qilish</li>
          <li>Nomenklatura va tipofikatsiya masalalari</li>
          <li>Regional floralar va opredelitellar tuzish</li>
        </ul>
        <div class="stats-mini">
          <div class="stat-mini"><strong>4300+</strong><span>Aniqlangan turlar</span></div>
          <div class="stat-mini"><strong>105</strong><span>Oilalar</span></div>
          <div class="stat-mini"><strong>613</strong><span>Turkumlar</span></div>
        </div>
        <h3>Gerbariy (TASH)</h3>
        <p>TASH gerbariyi — Markaziy Osiyodagi eng yirik ilmiy gerbariy to'plami. 1,5 million dan ortiq quritilgan o'simlik namunalari saqlanadi. 30+ davlat gerbariylari bilan almashinuv.</p>
        <h3>So'nggi 5 yildagi yutuqlar</h3>
        <ul>
          <li>50 dan ortiq yangi tur O'zbekiston florasi uchun qayd etildi</li>
          <li>12 ta tur fan uchun mutlaqo yangi sifatida tavsiflandi</li>
          <li>"O'zbekiston florasi kadastri" seriyasining 5 ta jildi nashr etildi</li>
          <li>Xalqaro Q1 jurnallarida 45+ maqola chop etildi</li>
        </ul>
      </div>
    </div></section>
  `
})
export class LabFloraComponent {
  labLinks: SidebarLink[] = [
    { label: 'Flora laboratoriyasi', route: '/lab-flora' },
    { label: 'Geobotanika laboratoriyasi', route: '/lab-geobotany' },
    { label: 'Molekulyar biologiya', route: '/lab-molecular' },
    { label: 'Fitokimyo laboratoriyasi', route: '/lab-phytochemistry' },
    { label: 'Ekologiya laboratoriyasi', route: '/lab-ecology' },
    { label: 'Tabiiy resurslar lab.', route: '/lab-resources' }
  ];
}
