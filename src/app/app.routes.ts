import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'estatistica',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  { path: '', redirectTo: 'estatistica', pathMatch: 'full' },
  { path: '**', redirectTo: 'estatistica' }
];