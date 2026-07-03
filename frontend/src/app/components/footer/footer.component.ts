import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h4>Botanika Instituti</h4>
          <p>O'zbekiston Fanlar Akademiyasi tarkibidagi yetakchi ilmiy-tadqiqot muassasasi. 1938-yildan buyon faoliyat yuritadi.</p>
        </div>
        <div class="footer-col">
          <h4>Tezkor havolalar</h4>
          <ul>
            <li><a routerLink="/about">Biz haqimizda</a></li>
            <li><a routerLink="/structure">Struktura</a></li>
            <li><a routerLink="/research">Ilmiy faoliyat</a></li>
            <li><a routerLink="/laboratories">Laboratoriyalar</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Laboratoriyalar</h4>
          <ul>
            <li><a routerLink="/lab-flora">Flora</a></li>
            <li><a routerLink="/lab-molecular">Molekulyar biologiya</a></li>
            <li><a routerLink="/lab-phytochemistry">Fitokimyo</a></li>
            <li><a routerLink="/lab-ecology">Ekologiya</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Aloqa</h4>
          <p>📍 100125, Toshkent sh., Durmon yo'li, 32</p>
          <p>📞 (+998 71) 262-37-95</p>
          <p>📧 info&#64;botany.uz</p>
          <p>🌐 www.botany.uz</p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>© 2026 Botanika Instituti. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {}
