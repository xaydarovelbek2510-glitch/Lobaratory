import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-lab-geobotany',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Geobotanika laboratoriyasi</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <a routerLink="/laboratories">Laboratoriyalar</a> › <span>Geobotanika</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'LABORATORIYALAR'" [links]="labLinks"></app-sidebar>
      <div class="main-content">
        <h2>Geobotanika laboratoriyasi</h2>
        <p>O'simlik jamoalarini o'rganish, fitogeografik xaritalash va dinamikani kuzatish.</p>
        <div class="info-box"><p><strong>Mudir:</strong> PhD, Beshko N.Yu. | <strong>Xodimlar:</strong> 6</p></div>
        <h3>Yo'nalishlari</h3>
        <ul><li>Braun-Blanquet tizimi bo'yicha tasniflash</li><li>Geobotanik xaritalash</li><li>Fitogeografik rayonlanish</li><li>GIS va masofaviy zondlash</li></ul>
        <div class="stats-mini"><div class="stat-mini"><strong>14</strong><span>Floristik hudud</span></div><div class="stat-mini"><strong>200+</strong><span>Transektlar</span></div><div class="stat-mini"><strong>GIS</strong><span>Xaritalash</span></div></div>
      </div>
    </div></section>
  `
})
export class LabGeobotanyComponent {
  labLinks: SidebarLink[] = [
    { label: 'Flora laboratoriyasi', route: '/lab-flora' },
    { label: 'Geobotanika laboratoriyasi', route: '/lab-geobotany' },
    { label: 'Molekulyar biologiya', route: '/lab-molecular' },
    { label: 'Fitokimyo laboratoriyasi', route: '/lab-phytochemistry' },
    { label: 'Ekologiya laboratoriyasi', route: '/lab-ecology' },
    { label: 'Tabiiy resurslar lab.', route: '/lab-resources' }
  ];
}
