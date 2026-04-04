import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav style="background:#111;border-bottom:1px solid #1e1e1e;padding:0 24px;
                display:flex;align-items:center;gap:24px;height:58px;position:sticky;top:0;z-index:100">

      <!-- Logo -->
      <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="width:34px;height:34px;background:#c41c1c;border-radius:7px;
                    display:flex;align-items:center;justify-content:center;
                    font-weight:800;font-size:14px;color:#fff;letter-spacing:-.5px">SP</div>
        <div>
          <div style="font-size:14px;font-weight:700;color:#fff;line-height:1.2">
            Segurança <span style="color:#c41c1c">SP</span>
          </div>
          <div style="font-size:9px;color:#444;text-transform:uppercase;letter-spacing:.8px">
            Segurança Pública de São Paulo
          </div>
        </div>
      </div>

      <!-- Links -->
      <div style="display:flex;gap:2px;margin-left:8px">
        <a *ngFor="let link of links"
           [style.color]="link.active ? '#fff' : '#666'"
           [style.borderBottom]="link.active ? '2px solid #c41c1c' : '2px solid transparent'"
           style="padding:6px 14px;font-size:13px;cursor:pointer;
                  border-radius:6px 6px 0 0;transition:color .15s;text-decoration:none">
          {{ link.label }}
        </a>
      </div>

      <!-- Direita -->
      <div style="margin-left:auto;display:flex;gap:8px;align-items:center">
        <button class="btn" (click)="onExport()">Exportar dados</button>
        <button class="btn btn-red">Entrar</button>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  links = [
    { label: 'Início',       active: false },
    { label: 'Notícias',     active: false },
    { label: 'Estatísticas', active: true  },
    { label: 'Serviços',     active: false },
    { label: 'Denúncias',    active: false },
  ];

  @Output() export = new EventEmitter<void>();
  onExport() { this.export.emit(); }
}