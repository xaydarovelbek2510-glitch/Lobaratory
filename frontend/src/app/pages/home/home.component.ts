import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService, NewsItem, StatItem } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  slides = [
    { image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1400&q=80', title: "O'zbekiston Botanika Instituti", desc: "O'simliklar dunyosini o'rganish, muhofaza qilish va kelajak avlodlarga yetkazish", link: '/about' },
    { image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80', title: 'Laboratoriyalar', desc: "Zamonaviy jihozlar bilan jihozlangan 6 ta ilmiy laboratoriya", link: '/laboratories' },
    { image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1400&q=80', title: 'Ilmiy tadqiqotlar', desc: "4300 dan ortiq o'simlik turi bo'yicha fundamental va amaliy tadqiqotlar", link: '/research' }
  ];
  news: NewsItem[] = [];
  stats: StatItem[] = [];
  private sliderInterval: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.sliderInterval = setInterval(() => this.nextSlide(), 5000);
    this.api.getNews().subscribe(data => this.news = data.slice(0, 3));
    this.api.getStats().subscribe(data => this.stats = data);
  }

  ngOnDestroy() {
    if (this.sliderInterval) clearInterval(this.sliderInterval);
  }

  nextSlide() { this.currentSlide = (this.currentSlide + 1) % this.slides.length; }
  prevSlide() { this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length; }
  goToSlide(i: number) { this.currentSlide = i; }
}
