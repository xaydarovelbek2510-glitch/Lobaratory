import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; from '@angular/core';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';
@Component({ selector: 'app-contacts', standalone: true, imports: [SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Kontaktlar</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <span>Kontaktlar</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'ALOQA'" [links]="links"></app-sidebar>
      <div class="main-content">
        <h2>Biz bilan bog'laning</h2>
        <h3>Manzil</h3><p><strong>100125, Toshkent shahri, Durmon yo'li ko'chasi, 32-uy</strong></p>
        <h3>Telefon</h3><ul><li>Qabul: (+998 71) 262-37-95</li><li>Direktor: (+998 71) 262-79-10</li></ul>
        <h3>Email</h3><ul><li>info&#64;botany.uz</li><li>science&#64;botany.uz</li></ul>
        <h3>Ish vaqti</h3><p>Dushanba – Juma: 09:00 – 18:00</p>
      </div>
    </div></section>
  ` })
export class ContactsComponent {
  links: SidebarLink[] = [{ label: 'Manzil va telefon', route: '/contacts' }];
}
