import { Component } from '@angular/core';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';
@Component({ selector: 'app-research', standalone: true, imports: [SidebarComponent],
  template: `
    <div class="page-header"><div class="container"><h1>Ilmiy faoliyat</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <span>Ilmiy faoliyat</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'ILMIY FAOLIYAT'" [links]="links"></app-sidebar>
      <div class="main-content">
        <h2>Ilmiy faoliyat yo'nalishlari</h2>
        <p>Institut 6 ta asosiy yo'nalishda tadqiqot olib boradi.</p>
        <h3>1. Sistematika va taksonomiya</h3><p>Flora inventarizatsiyasi, yangi turlar.</p>
        <h3>2. Molekulyar biologiya</h3><p>DNK tahlili, filogenetika.</p>
        <h3>3. Fitokimyo</h3><p>Dorivor moddalar ajratish.</p>
        <h3>4. Ekologiya</h3><p>Muhofaza va monitoring.</p>
        <h3>5. Geobotanika</h3><p>Xaritalash va rayonlanish.</p>
        <h3>6. Tabiiy resurslar</h3><p>Resurslarni baholash.</p>
        <div class="info-box"><p><strong>2020–2026:</strong> 350+ maqola, 15+ xalqaro grant, 50+ yangi tur.</p></div>
      </div>
    </div></section>
  ` })
export class ResearchComponent {
  links: SidebarLink[] = [{ label: 'Ilmiy yo\'nalishlar', route: '/research' }, { label: 'Loyihalar', route: '/projects' }];
}
