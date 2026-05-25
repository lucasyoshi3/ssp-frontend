import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar.component';
import { NoticiasService, NoticiaCard } from '../../core/services/noticias.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <div style="min-height:100vh;background:#0d0d0d;color:#fff">

      <app-navbar />

      <main style="max-width:1100px;margin:0 auto;padding:40px 24px">

        <!-- Cabeçalho -->
        <div style="margin-bottom:32px">
          <div style="display:inline-block;background:#1a0a0a;border:1px solid #3a1010;
                      border-radius:20px;padding:4px 14px;margin-bottom:16px">
            <span style="font-size:11px;color:#c41c1c;text-transform:uppercase;letter-spacing:1px;font-weight:600">
              Atualizado automaticamente
            </span>
          </div>
          <h1 style="font-size:28px;font-weight:800;margin-bottom:8px">Notícias sobre Criminalidade em SP</h1>
          <p style="font-size:13px;color:#555">
            Reportagens recentes sobre segurança pública e criminalidade no estado de São Paulo.
          </p>
        </div>

        <!-- Loading -->
        @if (carregando()) {
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px">
            @for (i of [1,2,3,4,5,6]; track i) {
              <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:20px;height:180px;
                          animation:pulse 1.5s ease-in-out infinite">
              </div>
            }
          </div>
        }

        <!-- Erro -->
        @if (erro()) {
          <div style="background:#1a0a0a;border:1px solid #3a1010;border-radius:12px;padding:32px;text-align:center">
            <p style="color:#c41c1c;margin-bottom:8px;font-weight:600">Não foi possível carregar as notícias</p>
            <p style="color:#444;font-size:13px">Verifique se a API key está configurada em <code>noticias.service.ts</code></p>
          </div>
        }

        <!-- Grid de notícias -->
        @if (!carregando() && !erro()) {
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px">
            @for (n of noticias(); track n.url) {
              <a [href]="n.url" target="_blank" rel="noopener noreferrer"
                 style="display:flex;flex-direction:column;text-decoration:none;background:#111;
                        border:1px solid #1e1e1e;border-radius:12px;overflow:hidden;
                        transition:border-color .2s;cursor:pointer"
                 onmouseover="this.style.borderColor='#3a1010'"
                 onmouseout="this.style.borderColor='#1e1e1e'">

                <!-- Imagem -->
                @if (n.imagem) {
                  <img [src]="n.imagem" [alt]="n.titulo"
                       style="width:100%;height:160px;object-fit:cover;border-bottom:1px solid #1e1e1e"
                       onerror="this.style.display='none'">
                }

                <div style="padding:18px;flex:1;display:flex;flex-direction:column">
                  <!-- Fonte + data -->
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
                    <span style="font-size:10px;background:#1a0a0a;color:#c41c1c;
                                 padding:3px 10px;border-radius:12px;border:1px solid #3a1010;
                                 text-transform:uppercase;letter-spacing:.6px;font-weight:600;
                                 white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px">
                      {{ n.fonte }}
                    </span>
                    <span style="font-size:11px;color:#444;flex-shrink:0">{{ n.data }}</span>
                  </div>

                  <!-- Título -->
                  <h3 style="font-size:14px;font-weight:700;color:#fff;line-height:1.5;
                             margin-bottom:10px;flex:1">
                    {{ n.titulo }}
                  </h3>

                  <!-- Resumo -->
                  @if (n.resumo) {
                    <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:14px;
                               display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">
                      {{ n.resumo }}
                    </p>
                  }

                  <span style="font-size:11px;color:#c41c1c;margin-top:auto">Ler reportagem ↗</span>
                </div>

              </a>
            }
          </div>
        }

      </main>
    </div>
  `,
  styles: [`
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
  `]
})
export class NoticiasComponent implements OnInit {
  private svc = inject(NoticiasService);

  noticias = signal<NoticiaCard[]>([]);
  carregando = signal(true);
  erro = signal(false);

  ngOnInit() {
    this.svc.getNoticias().subscribe({
      next: data => {
        this.noticias.set(data);
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set(true);
        this.carregando.set(false);
      }
    });
  }
}
