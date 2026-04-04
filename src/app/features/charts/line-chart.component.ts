import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import { SerieHistorica } from '../../core/models';

const MESES = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  template: `<div echarts [options]="options" [theme]="'dark'" class="chart-container"></div>`
})
export class LineChartComponent implements OnChanges {
  @Input() dados: SerieHistorica[] = [];
  options: EChartsOption = {};

  ngOnChanges(c: SimpleChanges) { if (c['dados']) this.build(); }

  private build() {
    if (!this.dados.length) { this.options = {}; return; }

    const porAno = new Map<number, (number|null)[]>();
    for (const d of this.dados) {
      if (!porAno.has(d.ano)) porAno.set(d.ano, new Array(12).fill(null));
      porAno.get(d.ano)![d.mes - 1] = d.total;
    }

    const anos = [...porAno.keys()].sort();
    const cores = ['#c41c1c','#e05c5c','#a51717','#7a1010','#f09595'];

    this.options = {
      backgroundColor: '#111111',
      tooltip: {
        trigger: 'axis', backgroundColor: '#1a1a1a',
        borderColor: '#2a2a2a', textStyle: { color: '#ccc', fontSize: 12 },
        valueFormatter: (v: any) => v?.toLocaleString('pt-BR') ?? '—'
      },
      legend: {
        data: anos.map(String), bottom: 0,
        textStyle: { color: '#666', fontSize: 11 },
        inactiveColor: '#333'
      },
      grid: { left: '2%', right: '2%', top: '6%', bottom: '14%', containLabel: true },
      xAxis: {
        type: 'category', data: MESES,
        axisLabel: { color: '#555', fontSize: 11 },
        axisLine: { lineStyle: { color: '#222' } },
        splitLine: { lineStyle: { color: '#1a1a1a' } }
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: '#555', fontSize: 11,
          formatter: (v: number) => v >= 1000 ? (v/1000).toFixed(1)+'k' : String(v) },
        splitLine: { lineStyle: { color: '#1a1a1a' } },
        axisLine: { lineStyle: { color: '#222' } }
      },
      series: anos.map((ano, i) => ({
        name: String(ano),
        type: 'line', smooth: true,
        data: porAno.get(ano),
        lineStyle: { color: cores[i % cores.length], width: 2.5 },
        itemStyle: { color: cores[i % cores.length] },
        areaStyle: i === 0 ? { color: 'rgba(196,28,28,0.08)' } : undefined,
        symbol: 'circle', symbolSize: 5,
        connectNulls: false
      }))
    };
  }
}