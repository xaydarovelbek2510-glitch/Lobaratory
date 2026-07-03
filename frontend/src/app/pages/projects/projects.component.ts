import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; from '@angular/core';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';
@Component({ selector: 'app-projects', standalone: true, imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Loyihalar</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <span>Loyihalar</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'LOYIHALAR'" [links]="links"></app-sidebar>
      <div class="main-content">
        <h2>Joriy ilmiy loyihalar</h2>
        <h3>1. Endemik o'simliklar genofondini saqlash</h3><p>Grant: FA-2024-15 | 2024–2027 | 12 olim</p>
        <h3>2. Dorivor o'simliklardan antimikrob moddalar</h3><p>Xalqaro grant | 2023–2026 | 8 olim</p>
        <h3>3. Orolbo'yi monitoring</h3><p>UNESCO | 2022–2026 | 15 olim</p>
        <h3>4. In vitro ko'paytirish</h3><p>BT-2025-03 | 2025–2028 | 6 olim</p>
        <div class="info-box"><p><strong>Jami:</strong> 15+ faol loyiha, 5 ta xalqaro grant.</p></div>
      </div>
    </div></section>
  ` })
export class ProjectsComponent {
  links: SidebarLink[] = [{ label: 'Joriy loyihalar', route: '/projects' }, { label: 'Ilmiy faoliyat', route: '/research' }];
}
