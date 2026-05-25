import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar.component';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <div style="min-height:100vh;background:#0d0d0d;color:#fff">

      <app-navbar />

      <main style="max-width:960px;margin:0 auto;padding:40px 24px">

        <!-- Cabeçalho -->
        <div style="margin-bottom:40px">
          <div style="display:inline-block;background:#1a0a0a;border:1px solid #3a1010;
                      border-radius:20px;padding:4px 14px;margin-bottom:16px">
            <span style="font-size:11px;color:#c41c1c;text-transform:uppercase;letter-spacing:1px;font-weight:600">
              Desenvolvedor
            </span>
          </div>
          <h1 style="font-size:28px;font-weight:800;margin-bottom:8px">Serviços &amp; API</h1>
          <p style="font-size:14px;color:#555;max-width:560px;line-height:1.7">
            Acesse a documentação interativa da API do projeto e explore todos os endpoints disponíveis.
          </p>
        </div>

        <!-- Card Swagger -->
        <a href="http://localhost:8080/api/swagger-ui.html" target="_blank" rel="noopener noreferrer"
           style="display:flex;align-items:center;gap:24px;background:#111;border:1px solid #1e1e1e;
                  border-radius:14px;padding:28px 32px;text-decoration:none;
                  transition:border-color .2s,background .2s"
           onmouseover="this.style.borderColor='#c41c1c';this.style.background='#140808'"
           onmouseout="this.style.borderColor='#1e1e1e';this.style.background='#111'">

          <div style="width:52px;height:52px;background:#1a0a0a;border:1px solid #3a1010;
                      border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <span style="font-size:24px">📄</span>
          </div>

          <div style="flex:1">
            <h2 style="font-size:17px;font-weight:700;color:#fff;margin-bottom:4px">Swagger UI — Documentação da API</h2>
            <p style="font-size:13px;color:#555;line-height:1.6;margin-bottom:8px">
              Interface interativa para explorar, testar e entender todos os endpoints REST da plataforma SSP-SP.
              Acesse ocorrências, estatísticas, naturezas e previsões diretamente pelo navegador.
            </p>
            <span style="font-size:12px;color:#444;font-family:monospace">
              http://localhost:8080/api/swagger-ui.html
            </span>
          </div>

          <span style="font-size:20px;color:#c41c1c;flex-shrink:0">↗</span>
        </a>

        <!-- Cards informativos -->
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;margin-top:24px">

          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:22px">
            <div style="font-size:20px;margin-bottom:10px">🔍</div>
            <h3 style="font-size:14px;font-weight:700;margin-bottom:6px">Endpoints disponíveis</h3>
            <p style="font-size:12px;color:#555;line-height:1.6">
              Ocorrências, estatísticas por delegacia, ranking, série histórica, naturezas de crime e previsões.
            </p>
          </div>

          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:22px">
            <div style="font-size:20px;margin-bottom:10px">⚙️</div>
            <h3 style="font-size:14px;font-weight:700;margin-bottom:6px">Filtros e paginação</h3>
            <p style="font-size:12px;color:#555;line-height:1.6">
              Todos os endpoints suportam filtros por período, natureza, delegacia e município com paginação.
            </p>
          </div>

          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:22px">
            <div style="font-size:20px;margin-bottom:10px">📦</div>
            <h3 style="font-size:14px;font-weight:700;margin-bottom:6px">Exportação de dados</h3>
            <p style="font-size:12px;color:#555;line-height:1.6">
              Exporte os dados filtrados em formato Excel (.xlsx) diretamente pelos endpoints de exportação.
            </p>
          </div>

        </div>

      </main>
    </div>
  `
})
export class ServicosComponent {}
