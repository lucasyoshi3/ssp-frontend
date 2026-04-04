import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import { TotalNatureza } from '../../core/models';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  template: `<div echarts [options]="options" [theme]="'dark'" class="chart-container"></div>`
})
export class BarChartComponent implements OnChanges {
  @Input() dados: TotalNatureza[] = [];
  options: EChartsOption = {};

  ngOnChanges(c: SimpleChanges) { if (c['dados']) this.build(); }

  private build() {
    const sorted = [...this.dados].sort((a, b) => b.total - a.total).slice(0, 8);
    const labels = sorted.map(d => this.abrev(d.natureza));
    const valores = sorted.map(d => d.total);

    this.options = {
      backgroundColor: '#111111',
      tooltip: {
        trigger: 'axis', backgroundColor: '#1a1a1a',
        borderColor: '#2a2a2a', textStyle: { color: '#ccc', fontSize: 12 },
        formatter: (p: any) =>
          `<b style="color:#fff">${sorted[p[0].dataIndex].natureza}</b><br/>
           Total: <b style="color:#c41c1c">${p[0].value.toLocaleString('pt-BR')}</b>`
      },
      grid: { left: '2%', right: '10%', top: '4%', bottom: '4%', containLabel: true },
      xAxis: {
        type: 'value',
        axisLabel: { color: '#555', fontSize: 11,
          formatter: (v: number) => v >= 1000 ? (v/1000).toFixed(0)+'k' : String(v) },
        splitLine: { lineStyle: { color: '#1e1e1e' } },
        axisLine: { lineStyle: { color: '#222' } }
      },
      yAxis: {
        type: 'category', data: labels,
        axisLabel: { color: '#888', fontSize: 11 },
        axisLine: { lineStyle: { color: '#222' } }
      },
      series: [{
        type: 'bar',
        data: valores.map((v, i) => ({
          value: v,
          itemStyle: {
            color: i === 0 ? '#c41c1c' : i === 1 ? '#a51717' : '#7a1010',
            borderRadius: [0, 4, 4, 0]
          }
        })),
        label: {
          show: true, position: 'right',
          color: '#888', fontSize: 11,
          formatter: (p: any) => p.value.toLocaleString('pt-BR')
        }
      }]
    };
  }

  private abrev(nome: string): string {
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
    return m[nome] ?? nome.substring(0, 24);
  }
}