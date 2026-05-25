import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'estatistica',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'noticias',
    loadComponent: () =>
      import('./features/noticias/noticias.component').then(m => m.NoticiasComponent)
  },
  {
    path: 'servicos',
    loadComponent: () =>
      import('./features/servicos/servicos.component').then(m => m.ServicosComponent)
  },
  {
    path: 'denuncias',
    loadComponent: () =>
      import('./features/denuncias/denuncias.component').then(m => m.DenunciasComponent)
  },
  { path: '**', redirectTo: '' }
];