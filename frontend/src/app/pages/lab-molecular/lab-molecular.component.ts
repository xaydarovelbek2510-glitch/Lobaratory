import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-lab-molecular',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Molekulyar biologiya laboratoriyasi</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <a routerLink="/laboratories">Laboratoriyalar</a> › <span>Molekulyar biologiya</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'LABORATORIYALAR'" [links]="labLinks"></app-sidebar>
      <div class="main-content">
        <h2>Molekulyar biologiya va biogeografiya laboratoriyasi</h2>
        <p>DNK tahlili, filogenetika, genetik xilma-xillik tadqiqotlari.</p>
        <div class="info-box"><p><strong>Mudir:</strong> PhD, Sennikov A.N. | <strong>Xodimlar:</strong> 8</p></div>
        <h3>Jihozlar</h3>
        <ul><li>Illumina MiSeq — NGS sekvenator</li><li>Bio-Rad CFX96 — Real-Time PCR</li><li>ABI 3500 — kapillyar elektroforez</li><li>NanoDrop 2000</li></ul>
        <div class="stats-mini"><div class="stat-mini"><strong>500+</strong><span>DNK sekvenslar</span></div><div class="stat-mini"><strong>NGS</strong><span>Sekvenator</span></div><div class="stat-mini"><strong>28</strong><span>Filogenetik ishlar</span></div></div>
      </div>
    </div></section>
  `
})
export class LabMolecularComponent {
  labLinks: SidebarLink[] = [
    { label: 'Flora laboratoriyasi', route: '/lab-flora' },
    { label: 'Geobotanika laboratoriyasi', route: '/lab-geobotany' },
    { label: 'Molekulyar biologiya', route: '/lab-molecular' },
    { label: 'Fitokimyo laboratoriyasi', route: '/lab-phytochemistry' },
    { label: 'Ekologiya laboratoriyasi', route: '/lab-ecology' },
    { label: 'Tabiiy resurslar lab.', route: '/lab-resources' }
  ];
}
