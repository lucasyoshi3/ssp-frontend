import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  template: `
    <div style="min-height:100vh;background:#0d0d0d;color:#fff">

      <app-navbar />

      <!-- Hero -->
      <section style="max-width:900px;margin:0 auto;padding:80px 24px 60px">
        <div style="display:inline-block;background:#1a0a0a;border:1px solid #3a1010;
                    border-radius:20px;padding:4px 14px;margin-bottom:24px">
          <span style="font-size:11px;color:#c41c1c;text-transform:uppercase;letter-spacing:1px;font-weight:600">
            Segurança Pública de São Paulo
          </span>
        </div>

        <h1 style="font-size:42px;font-weight:800;line-height:1.15;margin-bottom:16px;color:#fff">
          Democratizando o acesso<br>
          aos <span style="color:#c41c1c">dados de segurança</span><br>
          pública em São Paulo
        </h1>

        <p style="font-size:15px;color:#888;max-width:600px;line-height:1.7;margin-bottom:36px">
          Uma plataforma aberta que transforma dados oficiais da SSP-SP em informações
          acessíveis para todos os cidadãos. Consulte estatísticas, acompanhe tendências
          e entenda a segurança pública da sua cidade.
        </p>

        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <a routerLink="/estatistica"
             style="background:#c41c1c;color:#fff;padding:12px 28px;border-radius:8px;
                    font-size:14px;font-weight:600;text-decoration:none;cursor:pointer">
            Ver estatísticas
          </a>
          <a href="#sobre"
             style="background:transparent;color:#888;padding:12px 28px;border-radius:8px;
                    font-size:14px;border:1px solid #222;text-decoration:none;cursor:pointer">
            Saiba mais
          </a>
        </div>
      </section>

      <!-- Cards de funcionalidades -->
      <section id="sobre" style="max-width:900px;margin:0 auto;padding:0 24px 80px">

        <p style="font-size:11px;color:#444;text-transform:uppercase;letter-spacing:1px;margin-bottom:32px">
          O que você encontra aqui
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px">

          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:24px">
            <div style="width:36px;height:36px;background:#1a0a0a;border-radius:8px;
                        display:flex;align-items:center;justify-content:center;margin-bottom:16px;
                        border:1px solid #3a1010">
              <span style="color:#c41c1c;font-size:18px">📊</span>
            </div>
            <h3 style="font-size:15px;font-weight:700;margin-bottom:8px;color:#fff">Estatísticas</h3>
            <p style="font-size:13px;color:#666;line-height:1.6">
              Dados históricos de ocorrências por tipo de crime, delegacia e período.
              Gráficos interativos e rankings atualizados mensalmente com dados oficiais da SSP-SP.
            </p>
          </div>

          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:24px">
            <div style="width:36px;height:36px;background:#1a0a0a;border-radius:8px;
                        display:flex;align-items:center;justify-content:center;margin-bottom:16px;
                        border:1px solid #3a1010">
              <span style="color:#c41c1c;font-size:18px">📰</span>
            </div>
            <h3 style="font-size:15px;font-weight:700;margin-bottom:8px;color:#fff">Notícias</h3>
            <p style="font-size:13px;color:#666;line-height:1.6">
              Acompanhe as principais notícias relacionadas à segurança pública no estado de
              São Paulo, reunidas em um só lugar.
            </p>
          </div>

          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:24px">
            <div style="width:36px;height:36px;background:#1a0a0a;border-radius:8px;
                        display:flex;align-items:center;justify-content:center;margin-bottom:16px;
                        border:1px solid #3a1010">
              <span style="color:#c41c1c;font-size:18px">🛡️</span>
            </div>
            <h3 style="font-size:15px;font-weight:700;margin-bottom:8px;color:#fff">Serviços</h3>
            <p style="font-size:13px;color:#666;line-height:1.6">
              Acesso rápido aos serviços da Secretaria de Segurança Pública: boletim de
              ocorrência online, delegacias digitais e outros canais oficiais.
            </p>
          </div>

          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:24px">
            <div style="width:36px;height:36px;background:#1a0a0a;border-radius:8px;
                        display:flex;align-items:center;justify-content:center;margin-bottom:16px;
                        border:1px solid #3a1010">
              <span style="color:#c41c1c;font-size:18px">📢</span>
            </div>
            <h3 style="font-size:15px;font-weight:700;margin-bottom:8px;color:#fff">Denúncias</h3>
            <p style="font-size:13px;color:#666;line-height:1.6">
              Canais oficiais para realizar denúncias de forma anônima e segura,
              contribuindo diretamente com a segurança da sua comunidade.
            </p>
          </div>

        </div>
      </section>

      <!-- Fonte dos dados -->
      <section style="border-top:1px solid #1a1a1a;padding:32px 24px;text-align:center">
        <p style="font-size:12px;color:#333">
          Dados provenientes da
          <span style="color:#555">Secretaria da Segurança Pública do Estado de São Paulo (SSP-SP)</span>
          · Atualizados mensalmente · Plataforma independente sem vínculo oficial com o governo
        </p>
      </section>

    </div>
  `
})
export class HomeComponent {}
