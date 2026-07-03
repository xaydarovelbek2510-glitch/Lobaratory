import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-lab-ecology',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Ekologiya laboratoriyasi</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <a routerLink="/laboratories">Laboratoriyalar</a> › <span>Ekologiya</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'LABORATORIYALAR'" [links]="labLinks"></app-sidebar>
      <div class="main-content">
        <h2>O'simliklar muhofazasi va ekologiyasi laboratoriyasi</h2>
        <p>Noyob turlarni muhofaza qilish, ekologik monitoring va reintroduksiya dasturlari.</p>
        <div class="info-box"><p><strong>Mudir:</strong> PhD Shomurodov Kh.F. | <strong>Xodimlar:</strong> 7</p></div>
        <h3>Yo'nalishlari</h3>
        <ul><li>Qizil Kitobni yangilash</li><li>IPA hududlar aniqlash</li><li>Reintroduksiya</li><li>GIS monitoring</li></ul>
        <div class="stats-mini"><div class="stat-mini"><strong>324</strong><span>Qizil Kitob turlari</span></div><div class="stat-mini"><strong>8</strong><span>Muhofaza hududlari</span></div><div class="stat-mini"><strong>15+</strong><span>Monitoring stantsiyalari</span></div></div>
      </div>
    </div></section>
  `
})
export class LabEcologyComponent {
  labLinks: SidebarLink[] = [
    { label: 'Flora laboratoriyasi', route: '/lab-flora' },
    { label: 'Geobotanika laboratoriyasi', route: '/lab-geobotany' },
    { label: 'Molekulyar biologiya', route: '/lab-molecular' },
    { label: 'Fitokimyo laboratoriyasi', route: '/lab-phytochemistry' },
    { label: 'Ekologiya laboratoriyasi', route: '/lab-ecology' },
    { label: 'Tabiiy resurslar lab.', route: '/lab-resources' }
  ];
}
