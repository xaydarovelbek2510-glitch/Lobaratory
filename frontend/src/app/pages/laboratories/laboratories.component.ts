import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({ selector: 'app-laboratories', standalone: true, imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Laboratoriyalar</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <span>Laboratoriyalar</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'LABORATORIYALAR'" [links]="labLinks"></app-sidebar>
      <div class="main-content">
        <h2>Institutning ilmiy laboratoriyalari</h2>
        <p>Botanika institutida 6 ta ilmiy laboratoriya faoliyat yuritadi.</p>
        <h3>1. <a routerLink="/lab-flora" style="color:#2e7d32">Flora laboratoriyasi</a></h3><p>Florani inventarizatsiya qilish va yangi turlarni aniqlash.</p>
        <h3>2. <a routerLink="/lab-geobotany" style="color:#2e7d32">Geobotanika laboratoriyasi</a></h3><p>O'simlik jamoalarini xaritalash.</p>
        <h3>3. <a routerLink="/lab-molecular" style="color:#2e7d32">Molekulyar biologiya laboratoriyasi</a></h3><p>DNK tahlili va filogenetika.</p>
        <h3>4. <a routerLink="/lab-phytochemistry" style="color:#2e7d32">Fitokimyo laboratoriyasi</a></h3><p>Dorivor moddalar ajratish.</p>
        <h3>5. <a routerLink="/lab-ecology" style="color:#2e7d32">Ekologiya laboratoriyasi</a></h3><p>Noyob turlarni muhofaza qilish.</p>
        <h3>6. <a routerLink="/lab-resources" style="color:#2e7d32">Tabiiy resurslar laboratoriyasi</a></h3><p>Resurslarni baholash.</p>
      </div>
    </div></section>
  ` })
export class LaboratoriesComponent {
  labLinks: SidebarLink[] = [
    { label: 'Flora laboratoriyasi', route: '/lab-flora' },
    { label: 'Geobotanika laboratoriyasi', route: '/lab-geobotany' },
    { label: 'Molekulyar biologiya', route: '/lab-molecular' },
    { label: 'Fitokimyo laboratoriyasi', route: '/lab-phytochemistry' },
    { label: 'Ekologiya laboratoriyasi', route: '/lab-ecology' },
    { label: 'Tabiiy resurslar lab.', route: '/lab-resources' }
  ];
}
