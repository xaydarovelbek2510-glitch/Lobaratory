import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({ selector: 'app-structure', standalone: true, imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Institut tuzilmasi</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <span>Struktura</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'STRUKTURA'" [links]="links"></app-sidebar>
      <div class="main-content">
        <h2>Institut tuzilmasi</h2>
        <h3>Rahbariyat</h3>
        <ul><li>Direktor — b.f.d., professor Tojibaev K.Sh.</li><li>Ilmiy ishlar bo'yicha direktor o'rinbosari</li><li>Ilmiy kotib</li></ul>
        <h3>Ilmiy laboratoriyalar</h3>
        <ul><li><a routerLink="/lab-flora" style="color:#2e7d32">Flora laboratoriyasi</a></li><li><a routerLink="/lab-geobotany" style="color:#2e7d32">Geobotanika laboratoriyasi</a></li><li><a routerLink="/lab-molecular" style="color:#2e7d32">Molekulyar biologiya laboratoriyasi</a></li><li><a routerLink="/lab-phytochemistry" style="color:#2e7d32">Fitokimyo laboratoriyasi</a></li><li><a routerLink="/lab-ecology" style="color:#2e7d32">Ekologiya laboratoriyasi</a></li><li><a routerLink="/lab-resources" style="color:#2e7d32">Tabiiy resurslar laboratoriyasi</a></li></ul>
        <div class="stats-mini"><div class="stat-mini"><strong>6</strong><span>Laboratoriya</span></div><div class="stat-mini"><strong>120+</strong><span>Xodimlar</span></div><div class="stat-mini"><strong>42</strong><span>Ilmiy xodim</span></div></div>
      </div>
    </div></section>
  ` })
export class StructureComponent {
  links: SidebarLink[] = [
    { label: 'Biz haqimizda', route: '/about' },
    { label: 'Institut tuzilmasi', route: '/structure' },
    { label: 'Laboratoriyalar', route: '/laboratories' }
  ];
}
