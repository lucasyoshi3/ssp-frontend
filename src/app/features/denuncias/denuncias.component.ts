import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar.component';

interface Canal {
  icon: string;
  titulo: string;
  descricao: string;
  contato?: string;
  link?: string;
}

interface Delegacia {
  icon: string;
  nome: string;
  detalhe: string;
  endereco?: string;
  extra?: string[];
}

@Component({
  selector: 'app-denuncias',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <div style="min-height:100vh;background:#0d0d0d;color:#fff">

      <app-navbar />

      <main style="max-width:1000px;margin:0 auto;padding:40px 24px">

        <!-- Cabeçalho -->
        <div style="margin-bottom:40px">
          <div style="display:inline-block;background:#1a0a0a;border:1px solid #3a1010;
                      border-radius:20px;padding:4px 14px;margin-bottom:16px">
            <span style="font-size:11px;color:#c41c1c;text-transform:uppercase;letter-spacing:1px;font-weight:600">
              Segurança Pública
            </span>
          </div>
          <h1 style="font-size:28px;font-weight:800;margin-bottom:8px">Canais de Denúncia</h1>
          <p style="font-size:14px;color:#555;max-width:600px;line-height:1.7">
            Conheça os canais oficiais para registrar ocorrências, denunciar crimes e acessar
            atendimento especializado em São Paulo.
          </p>
        </div>

        <!-- ─── Canais Gerais e Emergências ─── -->
        <section style="margin-bottom:40px">
          <h2 style="font-size:16px;font-weight:700;color:#fff;margin-bottom:4px;
                     display:flex;align-items:center;gap:8px">
            💻 Canais Gerais e Emergências
          </h2>
          <p style="font-size:12px;color:#444;margin-bottom:20px">Digitais e Telefônicos</p>

          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px">

            <a href="https://www.delegaciaeletronica.policiacivil.sp.gov.br" target="_blank" rel="noopener noreferrer"
               style="display:block;background:#111;border:1px solid #1e1e1e;border-radius:12px;
                      padding:20px;text-decoration:none;transition:border-color .2s"
               onmouseover="this.style.borderColor='#c41c1c'"
               onmouseout="this.style.borderColor='#1e1e1e'">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
                <span style="font-size:22px">🖥️</span>
                <span style="font-size:13px;font-weight:700;color:#fff">Delegacia Eletrônica</span>
              </div>
              <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:10px">
                Canal online para registrar B.O. de furtos, roubos, estelionatos, perda de documentos,
                injúria, calúnia, difamação e acidentes sem vítimas.
              </p>
              <span style="font-size:11px;color:#c41c1c">Acessar portal ↗</span>
            </a>

            <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:20px">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
                <span style="font-size:22px">🚔</span>
                <span style="font-size:13px;font-weight:700;color:#fff">Polícia Militar — Ligue 190</span>
              </div>
              <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:10px">
                Central telefônica para crimes acontecendo em tempo real ou flagrantes.
              </p>
              <span style="font-size:22px;font-weight:800;color:#c41c1c;letter-spacing:2px">190</span>
            </div>

            <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:20px">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
                <span style="font-size:22px">📞</span>
                <span style="font-size:13px;font-weight:700;color:#fff">Disque Denúncia — Ligue 181</span>
              </div>
              <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:10px">
                Canal telefônico nacional, gratuito e 100% anônimo. Reporte atividades suspeitas,
                tráfico de drogas ou paradeiro de criminosos.
              </p>
              <span style="font-size:22px;font-weight:800;color:#c41c1c;letter-spacing:2px">181</span>
            </div>

            <a href="https://www.disquedenuncia.org.br" target="_blank" rel="noopener noreferrer"
               style="display:block;background:#111;border:1px solid #1e1e1e;border-radius:12px;
                      padding:20px;text-decoration:none;transition:border-color .2s"
               onmouseover="this.style.borderColor='#c41c1c'"
               onmouseout="this.style.borderColor='#1e1e1e'">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
                <span style="font-size:22px">🌐</span>
                <span style="font-size:13px;font-weight:700;color:#fff">Web Denúncia</span>
              </div>
              <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:10px">
                Versão online do Disque Denúncia. Relate crimes anonimamente pela internet
                com sigilo absoluto garantido.
              </p>
              <span style="font-size:11px;color:#c41c1c">Acessar portal ↗</span>
            </a>

          </div>
        </section>

        <!-- ─── Delegacias Especializadas ─── -->
        <section style="margin-bottom:40px">
          <h2 style="font-size:16px;font-weight:700;color:#fff;margin-bottom:4px;
                     display:flex;align-items:center;gap:8px">
            🚨 Delegacias Especializadas
          </h2>
          <p style="font-size:12px;color:#444;margin-bottom:20px">Atendimento presencial em São Paulo</p>

          <!-- DDM -->
          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:24px;margin-bottom:14px">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
              <span style="font-size:22px">👩</span>
              <div>
                <h3 style="font-size:14px;font-weight:700;color:#fff;margin-bottom:2px">
                  Defesa da Mulher (DDM)
                </h3>
                <p style="font-size:11px;color:#555">
                  Atendimento especializado em violência doméstica, assédio e agressões de gênero
                </p>
              </div>
            </div>
            <p style="font-size:12px;color:#666;margin-bottom:14px">
              Unidades com atendimento <strong style="color:#c41c1c">24 horas</strong> na capital:
            </p>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px">
              @for (u of ddmUnidades; track u.nome) {
                <div style="background:#0d0d0d;border:1px solid #1a1a1a;border-radius:8px;padding:12px">
                  <p style="font-size:12px;font-weight:600;color:#ddd;margin-bottom:4px">{{ u.nome }}</p>
                  <p style="font-size:11px;color:#555;line-height:1.5">{{ u.endereco }}</p>
                </div>
              }
            </div>
          </div>

          <!-- Crimes Cibernéticos -->
          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:24px;margin-bottom:14px">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span style="font-size:22px;flex-shrink:0">🌐</span>
              <div>
                <h3 style="font-size:14px;font-weight:700;color:#fff;margin-bottom:4px">
                  Crimes Cibernéticos e Fraudes Digitais
                </h3>
                <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:8px">
                  <strong style="color:#ddd">4ª Delegacia da DIG/DEIC</strong> — Especializada exclusivamente em
                  fraudes financeiras e golpes por meios eletrônicos.
                </p>
                <p style="font-size:12px;color:#444">
                  📍 Rua Brigadeiro Tobias, 527 (16º andar) — Luz
                </p>
              </div>
            </div>
          </div>

          <!-- DECRAI -->
          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:24px;margin-bottom:14px">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span style="font-size:22px;flex-shrink:0">⚖️</span>
              <div>
                <h3 style="font-size:14px;font-weight:700;color:#fff;margin-bottom:4px">
                  Crimes de Intolerância e Racismo
                </h3>
                <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:8px">
                  <strong style="color:#ddd">DECRAI</strong> — Delegacia de Crimes Raciais e Delitos de Intolerância.
                  Investiga homofobia, racismo, injúria racial e intolerância religiosa.
                </p>
                <p style="font-size:12px;color:#444">
                  📍 Rua Brigadeiro Tobias, 527 (3º andar) — Luz
                </p>
              </div>
            </div>
          </div>

          <!-- Idoso -->
          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:24px;margin-bottom:14px">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span style="font-size:22px;flex-shrink:0">🧓</span>
              <div>
                <h3 style="font-size:14px;font-weight:700;color:#fff;margin-bottom:4px">
                  Proteção ao Idoso
                </h3>
                <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:8px">
                  <strong style="color:#ddd">1ª Delegacia de Proteção ao Idoso</strong> — Crimes contra
                  a dignidade e patrimônio de pessoas idosas.
                </p>
                <p style="font-size:12px;color:#444">
                  📍 Rua da Consolação, 247 (7º andar) — Consolação
                </p>
              </div>
            </div>
          </div>

          <!-- DEATUR -->
          <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:24px">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span style="font-size:22px;flex-shrink:0">🧳</span>
              <div>
                <h3 style="font-size:14px;font-weight:700;color:#fff;margin-bottom:4px">
                  Atendimento ao Turista (DEATUR)
                </h3>
                <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:8px">
                  Ocorrências envolvendo turistas estrangeiros ou nacionais em trânsito.
                </p>
                <p style="font-size:12px;color:#444;margin-bottom:6px">
                  📍 Rua São Bento, 380 (5º andar) — Centro
                </p>
                <p style="font-size:12px;color:#444">
                  Postos avançados nos aeroportos de Congonhas e Guarulhos, e no Terminal Rodoviário do Tietê.
                </p>
              </div>
            </div>
          </div>

        </section>

        <!-- ─── Outros Órgãos ─── -->
        <section style="margin-bottom:40px">
          <h2 style="font-size:16px;font-weight:700;color:#fff;margin-bottom:4px;
                     display:flex;align-items:center;gap:8px">
            🛡️ Outros Órgãos de Proteção e Fiscalização
          </h2>
          <p style="font-size:12px;color:#444;margin-bottom:20px">Canais complementares</p>

          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px">

            <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:20px">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
                <span style="font-size:22px">☎️</span>
                <span style="font-size:13px;font-weight:700;color:#fff">Disque 100</span>
              </div>
              <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:10px">
                Disque Direitos Humanos — gratuito para denunciar violações contra crianças,
                adolescentes, pessoas com deficiência e idosos.
              </p>
              <span style="font-size:22px;font-weight:800;color:#c41c1c;letter-spacing:2px">100</span>
            </div>

            <a href="https://www.mpsp.mp.br/portal/page/portal/ouvidoria" target="_blank" rel="noopener noreferrer"
               style="display:block;background:#111;border:1px solid #1e1e1e;border-radius:12px;
                      padding:20px;text-decoration:none;transition:border-color .2s"
               onmouseover="this.style.borderColor='#c41c1c'"
               onmouseout="this.style.borderColor='#1e1e1e'">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
                <span style="font-size:22px">⚖️</span>
                <span style="font-size:13px;font-weight:700;color:#fff">Ouvidoria do MPSP</span>
              </div>
              <p style="font-size:12px;color:#555;line-height:1.6;margin-bottom:10px">
                Ideal para crimes ambientais, corrupção de agentes públicos e organizações criminosas
                — encaminhado diretamente ao GAECO.
              </p>
              <span style="font-size:11px;color:#c41c1c">Acessar portal ↗</span>
            </a>

            <div style="background:#111;border:1px solid #1e1e1e;border-radius:12px;padding:20px">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
                <span style="font-size:22px">🏛️</span>
                <span style="font-size:13px;font-weight:700;color:#fff">Distrito Policial (DP)</span>
              </div>
              <p style="font-size:12px;color:#555;line-height:1.6">
                Para crimes que não se enquadrem nas especialidades acima, dirija-se ao
                Distrito Policial mais próximo do local do fato.
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  `
})
export class DenunciasComponent {
  ddmUnidades = [
    { nome: '1ª DDM Centro', endereco: 'Rua Dr. Bittencourt Rodrigues, 200 – Centro' },
    { nome: '2ª DDM Sul (Saúde)', endereco: 'Av. Onze de Junho, 439 – Vila Clementino' },
    { nome: '4ª DDM Norte (Freguesia do Ó)', endereco: 'Av. Itaberaba, 731 – Freguesia do Ó' },
    { nome: '5ª DDM Leste (Tatuapé)', endereco: 'Rua Dr. Corinto Baldoíno Costa, 400 – Tatuapé' },
  ];
}
