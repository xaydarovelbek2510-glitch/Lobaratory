import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="container nav-container">
        <ul class="nav-menu" [class.open]="mobileMenuOpen">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">BOSH SAHIFA</a></li>
          <li class="has-dropdown">
            <a routerLink="/structure" routerLinkActive="active">STRUKTURA</a>
            <ul class="dropdown">
              <li><a routerLink="/about">Biz haqimizda</a></li>
              <li><a routerLink="/structure">Institut tuzilmasi</a></li>
              <li class="has-subdropdown">
                <a routerLink="/laboratories">Laboratoriyalar ›</a>
                <ul class="subdropdown">
                  <li><a routerLink="/lab-flora">Flora laboratoriyasi</a></li>
                  <li><a routerLink="/lab-geobotany">Geobotanika laboratoriyasi</a></li>
                  <li><a routerLink="/lab-molecular">Molekulyar biologiya lab.</a></li>
                  <li><a routerLink="/lab-phytochemistry">Fitokimyo laboratoriyasi</a></li>
                  <li><a routerLink="/lab-ecology">Ekologiya laboratoriyasi</a></li>
                  <li><a routerLink="/lab-resources">Tabiiy resurslar lab.</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-dropdown">
            <a routerLink="/research" routerLinkActive="active">ILMIY FAOLIYAT</a>
            <ul class="dropdown">
              <li><a routerLink="/research">Ilmiy yo'nalishlar</a></li>
              <li><a routerLink="/projects">Loyihalar</a></li>
            </ul>
          </li>
          <li><a routerLink="/projects" routerLinkActive="active">LOYIHALAR</a></li>
          <li><a routerLink="/contacts" routerLinkActive="active">KONTAKTLAR</a></li>
          <li><a routerLink="/news" routerLinkActive="active">YANGILIKLAR</a></li>
        </ul>
        <button class="nav-toggle" (click)="toggleMenu()">☰</button>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileMenuOpen = false;

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
