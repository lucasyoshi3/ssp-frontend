import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav style="background:#111;border-bottom:1px solid #1e1e1e;padding:0 24px;
                display:flex;align-items:center;gap:24px;height:58px;position:sticky;top:0;z-index:100">

      <!-- Logo -->
      <a routerLink="/" style="display:flex;align-items:center;gap:10px;flex-shrink:0;text-decoration:none">
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
      </a>

      <!-- Links -->
      <div style="display:flex;gap:2px;margin-left:8px">
        @for (link of links; track link.rota) {
          <a [routerLink]="link.rota"
             routerLinkActive="nav-link-active"
             [routerLinkActiveOptions]="{ exact: link.exact }"
             class="nav-link">
            {{ link.label }}
          </a>
        }
      </div>

    </nav>
  `,
  styles: [`
    .nav-link {
      padding: 6px 14px;
      font-size: 13px;
      cursor: pointer;
      border-radius: 6px 6px 0 0;
      transition: color .15s;
      text-decoration: none;
      color: #666;
      border-bottom: 2px solid transparent;
    }
    .nav-link:hover { color: #aaa; }
    .nav-link-active { color: #fff !important; border-bottom: 2px solid #c41c1c !important; }
  `]
})
export class NavbarComponent {
  links = [
    { label: 'Início',       rota: '/',            exact: true  },
    { label: 'Notícias',     rota: '/noticias',    exact: false },
    { label: 'Estatísticas', rota: '/estatistica', exact: false },
    { label: 'Serviços',     rota: '/servicos',    exact: false },
    { label: 'Denúncias',    rota: '/denuncias',   exact: false },
  ];
}
