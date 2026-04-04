import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, combineLatest, map, shareReplay } from 'rxjs';
import {
  ApiResponse, PageResponse,
  OcorrenciaResponse, TotalNatureza,
  SerieHistorica, RankingDelegacia,
  Natureza, OcorrenciaFiltro
} from '../models';

const BASE = '/api/v1';

@Injectable({ providedIn: 'root' })
export class OcorrenciaService {
  private http = inject(HttpClient);

  // Lista completa de naturezas do banco
  getNaturezas(): Observable<Natureza[]> {
    return this.http
      .get<ApiResponse<Natureza[]>>(`${BASE}/naturezas`)
      .pipe(map(r => r.data));
  }

  // Apenas naturezas que têm ocorrências — cruza naturezas com totais
  getNaturezasAtivas(): Observable<Natureza[]> {
    return combineLatest([
      this.http.get<ApiResponse<Natureza[]>>(`${BASE}/naturezas`).pipe(map(r => r.data)),
      this.http.get<ApiResponse<TotalNatureza[]>>(`${BASE}/ocorrencias/totais`).pipe(map(r => r.data))
    ]).pipe(
      map(([naturezas, totais]) => {
        const nomesComDados = new Set(totais.map(t => t.natureza));
        return naturezas.filter(n => nomesComDados.has(n.natureza));
      }),
      shareReplay(1)
    );
  }

  getOcorrencias(filtro: OcorrenciaFiltro): Observable<PageResponse<OcorrenciaResponse>> {
    let params = new HttpParams();
    if (filtro.ano)         params = params.set('ano', filtro.ano);
    if (filtro.naturezaId)  params = params.set('naturezaId', filtro.naturezaId);
    if (filtro.delegaciaId) params = params.set('delegaciaId', filtro.delegaciaId);
    params = params.set('page', filtro.page ?? 0);
    params = params.set('size', filtro.size ?? 20);
    return this.http
      .get<ApiResponse<PageResponse<OcorrenciaResponse>>>(`${BASE}/ocorrencias`, { params })
      .pipe(map(r => r.data));
  }

  getTotais(ano?: number): Observable<TotalNatureza[]> {
    let params = new HttpParams();
    if (ano) params = params.set('ano', ano);
    return this.http
      .get<ApiResponse<TotalNatureza[]>>(`${BASE}/ocorrencias/totais`, { params })
      .pipe(map(r => r.data));
  }

  getSerieHistorica(naturezaId: number, anoInicio = 2024, anoFim = 2024): Observable<SerieHistorica[]> {
    const params = new HttpParams()
      .set('naturezaId', naturezaId)
      .set('anoInicio', anoInicio)
      .set('anoFim', anoFim);
    return this.http
      .get<ApiResponse<SerieHistorica[]>>(`${BASE}/ocorrencias/serie-historica`, { params })
      .pipe(map(r => r.data));
  }

  getRankingDelegacias(ano?: number): Observable<RankingDelegacia[]> {
    let params = new HttpParams();
    if (ano) params = params.set('ano', ano);
    return this.http
      .get<ApiResponse<RankingDelegacia[]>>(`${BASE}/ocorrencias/ranking-delegacias`, { params })
      .pipe(map(r => r.data));
  }
}