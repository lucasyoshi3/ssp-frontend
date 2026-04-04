import { Component, Input, OnChanges, SimpleChanges, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RankingDelegacia } from '../../core/models';

@Component({
  selector: 'app-ranking-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <!-- Busca -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
        <input
          type="text" placeholder="Buscar delegacia ou região..."
          class="input-dark" style="flex:1"
          [(ngModel)]="busca" (ngModelChange)="paginaAtual=0"
        />
        <span style="font-size:11px;color:#444;white-space:nowrap">
          {{ filtrados().length }} delegacias
        </span>
      </div>

      <!-- Tabela -->
      <table style="width:100%;border-collapse:collapse">
        <thead>
          <tr style="border-bottom:1px solid #1e1e1e">
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#444;font-weight:600;text-transform:uppercase;letter-spacing:.5px;width:32px">#</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#444;font-weight:600;text-transform:uppercase;letter-spacing:.5px">Delegacia</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#444;font-weight:600;text-transform:uppercase;letter-spacing:.5px">Região</th>
            <th style="padding:8px 10px;text-align:right;font-size:10px;color:#444;font-weight:600;text-transform:uppercase;letter-spacing:.5px">Total</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#444;font-weight:600;text-transform:uppercase;letter-spacing:.5px;width:100px">%</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of paginados(); let i = index"
              class="ranking-tr"
              [style.background]="hoveredIndex === i ? '#161616' : 'transparent'"
              (mouseenter)="hoveredIndex = i"
              (mouseleave)="hoveredIndex = -1">
            <td style="padding:9px 10px;color:#333;font-size:11px;font-weight:700">
              {{ (paginaAtual * pp) + i + 1 }}
            </td>
            <td style="padding:9px 10px;font-size:12px;color:#ddd;font-weight:500">
              {{ item.delegacia }}
            </td>
            <td style="padding:9px 10px">
              <span style="font-size:10px;background:#1a1a1a;color:#666;
                           padding:2px 8px;border-radius:10px;border:1px solid #222">
                {{ item.regiao || '—' }}
              </span>
            </td>
            <td style="padding:9px 10px;text-align:right;font-size:13px;
                       font-weight:700;color:#fff;font-variant-numeric:tabular-nums">
              {{ item.total | number }}
            </td>
            <td style="padding:9px 10px">
              <div style="display:flex;align-items:center;gap:6px">
                <div style="flex:1;background:#1a1a1a;border-radius:3px;height:4px">
                  <div style="height:4px;border-radius:3px;background:#c41c1c;transition:width .4s"
                       [style.width.%]="pct(item.total)"></div>
                </div>
                <span style="font-size:10px;color:#444;width:32px;text-align:right">
                  {{ pct(item.total) | number:'1.0-0' }}%
                </span>
              </div>
            </td>
          </tr>
          <tr *ngIf="!filtrados().length">
            <td colspan="5" style="padding:32px;text-align:center;color:#444;font-size:12px">
              Nenhuma delegacia encontrada.
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Paginação -->
      <div *ngIf="totalPags() > 1"
           style="display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:12px;border-top:1px solid #1a1a1a">
        <button class="btn" [disabled]="paginaAtual === 0" (click)="paginaAtual = paginaAtual - 1">
          ← Anterior
        </button>
        <span style="font-size:11px;color:#444">
          Página {{ paginaAtual + 1 }} de {{ totalPags() }}
        </span>
        <button class="btn" [disabled]="paginaAtual >= totalPags() - 1" (click)="paginaAtual = paginaAtual + 1">
          Próxima →
        </button>
      </div>
    </div>
  `
})
export class RankingTableComponent implements OnChanges {
  @Input() dados: RankingDelegacia[] = [];

  busca = '';
  paginaAtual = 0;
  hoveredIndex = -1;
  pp = 10;

  filtrados = computed(() => {
    const q = this.busca.toLowerCase();
    return this.dados.filter(d =>
      d.delegacia.toLowerCase().includes(q) ||
      (d.regiao ?? '').toLowerCase().includes(q)
    );
  });

  paginados = computed(() => {
    const s = this.paginaAtual * this.pp;
    return this.filtrados().slice(s, s + this.pp);
  });

  totalPags = computed(() => Math.ceil(this.filtrados().length / this.pp));

  ngOnChanges(c: SimpleChanges) { if (c['dados']) this.paginaAtual = 0; }

  pct(total: number): number {
    return this.dados.length ? (total / this.dados[0].total) * 100 : 0;
  }
}