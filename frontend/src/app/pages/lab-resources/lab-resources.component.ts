import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; from '@angular/core';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-lab-resources',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>lab resources laboratoriyasi</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <a routerLink="/laboratories">Laboratoriyalar</a> › <span>lab resources</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'LABORATORIYALAR'" [links]="labLinks"></app-sidebar>
      <div class="main-content">
        <h2>lab resources laboratoriyasi haqida batafsil</h2>
        <p>Bu sahifa lab resources laboratoriyasi haqida to'liq ma'lumot beradi. Laboratoriya zamonaviy jihozlar bilan jihozlangan va xalqaro standartlarga mos keladi.</p>
        <div class="info-box"><p><strong>Ma'lumot:</strong> Tez orada to'liq kontent qo'shiladi</p></div>
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
