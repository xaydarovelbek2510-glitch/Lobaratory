import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-lab-resources',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Tabiiy resurslar laboratoriyasi</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <a routerLink="/laboratories">Laboratoriyalar</a> › <span>Tabiiy resurslar</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'LABORATORIYALAR'" [links]="labLinks"></app-sidebar>
      <div class="main-content">
        <h2>Tabiiy o'simlik resurslari laboratoriyasi</h2>
        <p>O'simlik resurslarini inventarizatsiya qilish, baholash va barqaror foydalanish.</p>
        <div class="info-box"><p><strong>Mudir:</strong> PhD Raxmatov A.B. | <strong>Xodimlar:</strong> 5</p></div>
        <h3>Yo'nalishlari</h3>
        <ul><li>Resurs zahiralarini baholash</li><li>Populyatsiya dinamikasi</li><li>Etnobotanik tadqiqotlar</li><li>Introduksiya imkoniyatlari</li></ul>
        <div class="stats-mini"><div class="stat-mini"><strong>250+</strong><span>Foydali turlar</span></div><div class="stat-mini"><strong>30+</strong><span>Ekspeditsiyalar</span></div><div class="stat-mini"><strong>Etnobotanika</strong><span>Maxsus yo'nalish</span></div></div>
      </div>
    </div></section>
  `
})
export class LabResourcesComponent {
  labLinks: SidebarLink[] = [
    { label: 'Flora laboratoriyasi', route: '/lab-flora' },
    { label: 'Geobotanika laboratoriyasi', route: '/lab-geobotany' },
    { label: 'Molekulyar biologiya', route: '/lab-molecular' },
    { label: 'Fitokimyo laboratoriyasi', route: '/lab-phytochemistry' },
    { label: 'Ekologiya laboratoriyasi', route: '/lab-ecology' },
    { label: 'Tabiiy resurslar lab.', route: '/lab-resources' }
  ];
}
