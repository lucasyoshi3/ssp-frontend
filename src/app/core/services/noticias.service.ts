import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface NoticiaCard {
  titulo: string;
  resumo: string;
  data: string;
  fonte: string;
  url: string;
  imagem: string | null;
}

interface NewsApiResponse {
  articles: {
    title: string;
    description: string;
    publishedAt: string;
    source: { name: string };
    url: string;
    urlToImage: string | null;
  }[];
}

const API_KEY = '19b5f3794f27466487d8c39cd50413f0';
const API_URL = 'https://newsapi.org/v2/everything';

@Injectable({ providedIn: 'root' })
export class NoticiasService {
  private http = inject(HttpClient);

  getNoticias(): Observable<NoticiaCard[]> {
    return this.http.get<NewsApiResponse>(API_URL, {
      params: {
        q: 'criminalidade São Paulo',
        language: 'pt',
        sortBy: 'publishedAt',
        pageSize: '12',
        apiKey: API_KEY,
      }
    }).pipe(
      map(res => res.articles.map(a => ({
        titulo: a.title,
        resumo: a.description ?? '',
        data: new Date(a.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
        fonte: a.source.name,
        url: a.url,
        imagem: a.urlToImage,
      })))
    );
  }
}
