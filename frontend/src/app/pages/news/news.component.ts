import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidebarComponent, SidebarLink } from '../../components/sidebar/sidebar.component';
import { ApiService, NewsItem } from '../../services/api.service';

@Component({ selector: 'app-news', standalone: true, imports: [CommonModule, SidebarComponent, RouterLink],
  template: `
    <div class="page-header"><div class="container"><h1>Yangiliklar</h1><div class="breadcrumb"><a routerLink="/">Bosh sahifa</a> › <span>Yangiliklar</span></div></div></div>
    <section class="page-content"><div class="container page-grid">
      <app-sidebar [title]="'YANGILIKLAR'" [links]="links"></app-sidebar>
      <div class="main-content">
        <h2>So'nggi yangiliklar</h2>
        <div *ngFor="let item of news">
          <h3>{{ item.day }} {{ item.month }} — {{ item.title }}</h3>
          <p>{{ item.excerpt }}</p>
        </div>
      </div>
    </div></section>
  ` })
export class NewsComponent implements OnInit {
  links: SidebarLink[] = [{ label: 'Barcha yangiliklar', route: '/news' }];
  news: NewsItem[] = [];
  constructor(private api: ApiService) {}
  ngOnInit() { this.api.getNews().subscribe(data => this.news = data); }
}
