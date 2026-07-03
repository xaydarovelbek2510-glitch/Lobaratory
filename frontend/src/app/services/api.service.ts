import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface NewsItem { day: string; month: string; title: string; excerpt: string; }
export interface StatItem { icon: string; value: string; label: string; }
export interface Laboratory { id: string; name: string; head: string; staffCount: number; description: string; directions: string[]; }

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(`${this.baseUrl}/api/news`).pipe(
      catchError(() => of(this.fallbackNews()))
    );
  }

  getStats(): Observable<StatItem[]> {
    return this.http.get<StatItem[]>(`${this.baseUrl}/api/stats`).pipe(
      catchError(() => of(this.fallbackStats()))
    );
  }

  getLaboratories(): Observable<Laboratory[]> {
    return this.http.get<Laboratory[]>(`${this.baseUrl}/api/laboratories`).pipe(
      catchError(() => of([]))
    );
  }

  getLaboratory(id: string): Observable<Laboratory | null> {
    return this.http.get<Laboratory>(`${this.baseUrl}/api/laboratories/${id}`).pipe(
      catchError(() => of(null))
    );
  }

  // Fallback data when backend is not available
  private fallbackNews(): NewsItem[] {
    return [
      { day: '25', month: 'Iyun 2026', title: "Chatqol tog'larida yangi o'simlik turi aniqlandi", excerpt: "Ekspeditsiya jamoasi tomonidan Astragalus turkumiga mansub yangi tur topildi..." },
      { day: '18', month: 'Iyun 2026', title: "Xalqaro ilmiy konferensiya o'tkazildi", excerpt: "Markaziy Osiyo florasi bo'yicha xalqaro simpozium 15 davlat ishtirokida..." },
      { day: '10', month: 'Iyun 2026', title: "Yangi laboratoriya jihozlari o'rnatildi", excerpt: "Molekulyar biologiya laboratoriyasiga Illumina MiSeq sekvenator yetkazib berildi..." }
    ];
  }

  private fallbackStats(): StatItem[] {
    return [
      { icon: '🎓', value: '1', label: 'Akademik' },
      { icon: '📜', value: '6', label: 'Fan doktori' },
      { icon: '📋', value: '20', label: 'Fan nomzodi' },
      { icon: '👨‍🔬', value: '15', label: 'Ilmiy xodim' },
      { icon: '🌿', value: '4300+', label: "O'simlik turi" },
      { icon: '🏛️', value: '6', label: 'Laboratoriya' }
    ];
  }
}
