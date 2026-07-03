import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- TOP BAR -->
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-langs">
          <a href="#" class="active">O'ZBEKCHA</a>
          <a href="#">РУССКИЙ</a>
          <a href="#">ENGLISH</a>
        </div>
        <div class="topbar-address">
          <span>📍 100125, Toshkent sh., Durmon yo'li ko'ch., 32-uy</span>
        </div>
      </div>
    </div>

    <!-- HEADER -->
    <header class="header">
      <div class="container header-inner">
        <a routerLink="/" class="logo">
          <div class="logo-icon">🌿</div>
          <div class="logo-text">
            <strong>BOTANIKA INSTITUTI</strong>
            <span>O'ZBEKISTON FANLAR AKADEMIYASI</span>
          </div>
        </a>
        <div class="header-contacts">
          <div class="header-contact-item">
            <span class="hc-icon">📞</span>
            <div>
              <small>BOG'LANISH</small>
              <strong>(+998 71) 262-37-95</strong>
            </div>
          </div>
          <div class="header-contact-item">
            <span class="hc-icon">🕐</span>
            <div>
              <small>ISH VAQTI</small>
              <strong>Du – Ju: 09:00 – 18:00</strong>
            </div>
          </div>
          <a routerLink="/contacts" class="header-cta">BOG'LANISH</a>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
