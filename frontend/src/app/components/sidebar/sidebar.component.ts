import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface SidebarLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <div class="sidebar-title">{{ title }}</div>
      <ul class="sidebar-menu">
        <li *ngFor="let link of links">
          <a [routerLink]="link.route" routerLinkActive="active">› {{ link.label }}</a>
        </li>
      </ul>
    </aside>
  `,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() title = '';
  @Input() links: SidebarLink[] = [];
}
