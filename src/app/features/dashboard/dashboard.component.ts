import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OcorrenciaService } from '../../core/services/ocorrencia.service';
import { TotalNatureza, SerieHistorica, RankingDelegacia, Natureza } from '../../core/models';
import { BarChartComponent } from '../charts/bar-chart.component';
import { LineChartComponent } from '../charts/line-chart.component';
import { RankingTableComponent } from '../ranking/ranking-table.component';
import { NavbarComponent } from '../../shared/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, BarChartComponent, LineChartComponent, RankingTableComponent, NavbarComponent],
  template: `
    <div style="min-height:100vh;background:#0d0d0d">

      <app-navbar />

      <main style="max-width:1280px;margin:0 auto;padding:24px">

        <!-- Cabeçalho da página -->
        <div style="margin-bottom:20px">
          <h1 style="font-size:22px;font-weight:700;color:#fff;margin-bottom:4px">
            Analytics &amp; Estatísticas
          </h1>
          <p style="font-size:12px;color:#444">
            Dados públicos da SSP-SP · Atualizado mensalmente
          </p>
        </div>

        <!-- Filtros -->
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;flex-wrap:wrap">
          <span style="font-size:12px;color:#555;margin-right:4px">Ano:</span>

          <button
            *ngFor="let a of anosDisponiveis"
            class="btn-filter"
            [class.active]="anoSelecionado === a"
            (click)="selecionarAno(a)">
            {{ a ?? 'Todos' }}
          </button>

          <div style="margin-left:auto;display:flex;gap:8px;align-items:center">
            <span style="font-size:12px;color:#555">Natureza (linha):</span>
            <select class="input-dark" [(ngModel)]="naturezaSelecionada" (change)="carregarSerie()">
              <option *ngFor="let n of naturezas()" [value]="n.id">{{ n.natureza }}</option>
            </select>
          </div>
        </div>

        <!-- KPIs -->
        <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:20px">

          <div class="kpi-card">
            <div style="font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">
              Homicídios dolosos
            </div>
            <div style="font-size:26px;font-weight:700;color:#fff;margin-bottom:4px">
              {{ totalHomicidios() | number }}
            </div>
            <div class="delta-up">▲ dados SSP-SP</div>
          </div>

          <div class="kpi-card">
            <div style="font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">
              Tentativas homicídio
            </div>
            <div style="font-size:26px;font-weight:700;color:#fff;margin-bottom:4px">
              {{ totalTentativas() | number }}
            </div>
            <div class="delta-up">▲ dados SSP-SP</div>
          </div>

          <div class="kpi-card">
            <div style="font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">
              Lesão corporal dolosa
            </div>
            <div style="font-size:26px;font-weight:700;color:#fff;margin-bottom:4px">
              {{ totalLesoes() | number }}
            </div>
            <div class="delta-down">▼ dados SSP-SP</div>
          </div>

          <div class="kpi-card" style="border-left-color:#e05c5c">
            <div style="font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">
              Total de ocorrências
            </div>
            <div style="font-size:26px;font-weight:700;color:#fff;margin-bottom:4px">
              {{ totalGeral() | number }}
            </div>
            <div style="font-size:11px;color:#444">todos os tipos</div>
          </div>

        </div>

        <!-- Gráficos linha + distribuição -->
        <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px;margin-bottom:16px">

          <div class="card">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
              <span class="card-title" style="margin-bottom:0">Crime trends — evolução mensal</span>
              <span style="font-size:10px;background:#1a1a1a;color:#666;
                           padding:3px 10px;border-radius:12px;border:1px solid #222">
                {{ naturezaNome() }}
              </span>
            </div>
            <app-line-chart [dados]="serie()" />
          </div>

          <div class="card">
            <p class="card-title">Distribuição por tipo</p>
            <div *ngFor="let item of totais().slice(0,6)"
                 style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
              <span style="font-size:11px;color:#888;flex:1;
                           white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
                {{ abrev(item.natureza) }}
              </span>
              <span style="font-size:12px;font-weight:600;color:#fff;min-width:52px;text-align:right;
                           font-variant-numeric:tabular-nums">
                {{ item.total | number }}
              </span>
            </div>
            <div *ngIf="!totais().length"
                 style="color:#333;font-size:12px;text-align:center;padding:20px 0">
              Sem dados
            </div>
          </div>

        </div>

        <!-- Gráfico barras + Ranking -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">

          <div class="card">
            <p class="card-title">Total por tipo de crime</p>
            <app-bar-chart [dados]="totais()" />
          </div>

          <div class="card">
            <p class="card-title">Ranking de delegacias</p>
            <app-ranking-table [dados]="ranking()" />
          </div>

        </div>

      </main>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  private svc = inject(OcorrenciaService);

  anosDisponiveis: (number | null)[] = [2024, 2023, 2022, 2021, 2020, null];
  anoSelecionado: number | null = 2024;
  naturezaSelecionada: number = 1;

  naturezas  = signal<Natureza[]>([]);
  totais     = signal<TotalNatureza[]>([]);
  serie      = signal<SerieHistorica[]>([]);
  ranking    = signal<RankingDelegacia[]>([]);

  totalGeral       = computed(() => this.totais().reduce((s, t) => s + t.total, 0));
  totalHomicidios  = computed(() =>
    this.totais().find(t => t.natureza === 'HOMICÍDIO DOLOSO')?.total ?? 0);
  totalTentativas  = computed(() =>
    this.totais().find(t => t.natureza.includes('TENTATIVA'))?.total ?? 0);
  totalLesoes      = computed(() =>
    this.totais().find(t => t.natureza === 'LESÃO CORPORAL DOLOSA')?.total ?? 0);
  naturezaNome     = computed(() =>
    this.naturezas().find(n => n.id === +this.naturezaSelecionada)?.natureza ?? '');

  ngOnInit() {
    this.svc.getNaturezasAtivas().subscribe(n => {
      this.naturezas.set(n);
      if (n.length) { this.naturezaSelecionada = n[0].id; this.carregarSerie(); }
    });
    this.aplicarFiltros();
  }

  selecionarAno(ano: number | null) {
    this.anoSelecionado = ano;
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    const ano = this.anoSelecionado ?? undefined;
    this.svc.getTotais(ano).subscribe(d => this.totais.set(d));
    this.svc.getRankingDelegacias(ano).subscribe(d => this.ranking.set(d));
    this.carregarSerie();
  }

  carregarSerie() {
    if (!this.naturezaSelecionada) return;
    this.svc.getSerieHistorica(+this.naturezaSelecionada, 2024, 2024)
      .subscribe(d => this.serie.set(d));
  }

  abrev(nome: string): string {
    const m: Record<string, string> = {
      'HOMICÍDIO DOLOSO': 'Hom. doloso',
      'Nº DE VÍTIMAS EM HOMICÍDIO DOLOSO': 'Vítimas hom. doloso',
      'TENTATIVA DE HOMICÍDIO': 'Tent. homicídio',
      'LESÃO CORPORAL DOLOSA': 'Lesão corp. dolosa',
      'LESÃO CORPORAL SEGUIDA DE MORTE': 'Lesão seg. morte',
      'HOMICÍDIO CULPOSO POR ACIDENTE DE TRÂNSITO': 'Hom. culposo trâns.',
      'HOMICÍDIO DOLOSO POR ACIDENTE DE TRÂNSITO': 'Hom. doloso trâns.',
      'HOMICÍDIO CULPOSO OUTROS': 'Hom. culposo outros',
    };
    return m[nome] ?? nome.substring(0, 26);
  }
}