import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
        <p>Flora laboratoriyasi — institutning eng qadimgi bo'linmasi. 1938-yildan beri fundamental tadqiqotlar olib boradi.</p>
        <div class="info-box"><p><strong>Mudir:</strong> b.f.d., professor Tojibaev K.Sh. | <strong>Xodimlar:</strong> 12</p></div>
        <h3>Tadqiqot yo'nalishlari</h3>
        <ul><li>O'zbekiston florasining inventarizatsiyasi</li><li>Yangi turlarni aniqlash va tavsiflash</li><li>Gerbariy fondini digitalizatsiya qilish</li><li>Regional floralar tuzish</li></ul>
        <div class="stats-mini"><div class="stat-mini"><strong>4300+</strong><span>Turlar</span></div><div class="stat-mini"><strong>105</strong><span>Oilalar</span></div><div class="stat-mini"><strong>613</strong><span>Turkumlar</span></div></div>
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
