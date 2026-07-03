import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-lab-phytochemistry',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Fitokimyo laboratoriyasi</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <a routerLink="/laboratories">Laboratoriyalar</a> › <span>Fitokimyo</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'LABORATORIYALAR'" [links]="labLinks"></app-sidebar>
      <div class="main-content">
        <h2>Fitokimyo laboratoriyasi</h2>
        <p>Dorivor o'simliklardan biologik faol moddalar ajratish va farmakologik xususiyatlarini baholash.</p>
        <div class="info-box"><p><strong>Mudir:</strong> DSc Mamadalieva N.Z. | <strong>Xodimlar:</strong> 10</p></div>
        <h3>Jihozlar</h3>
        <ul><li>Agilent 1260 HPLC</li><li>Shimadzu UV-1900i spektrofotometr</li><li>GC-MS (Agilent)</li></ul>
        <div class="stats-mini"><div class="stat-mini"><strong>600+</strong><span>Dorivor turlar</span></div><div class="stat-mini"><strong>150+</strong><span>Ajratilgan moddalar</span></div><div class="stat-mini"><strong>5</strong><span>Patentlar</span></div></div>
      </div>
    </div></section>
  `
})
export class LabPhytochemistryComponent {
  labLinks: SidebarLink[] = [
    { label: 'Flora laboratoriyasi', route: '/lab-flora' },
    { label: 'Geobotanika laboratoriyasi', route: '/lab-geobotany' },
    { label: 'Molekulyar biologiya', route: '/lab-molecular' },
    { label: 'Fitokimyo laboratoriyasi', route: '/lab-phytochemistry' },
    { label: 'Ekologiya laboratoriyasi', route: '/lab-ecology' },
    { label: 'Tabiiy resurslar lab.', route: '/lab-resources' }
  ];
}
