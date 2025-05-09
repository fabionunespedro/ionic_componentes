import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'botoes',
    loadComponent: () => import('./pages/botoes/botoes.page').then( m => m.BotoesPage)
  },
  {
    path: 'alertas',
    loadComponent: () => import('./pages/alertas/alertas.page').then( m => m.AlertaPage)
  },
  {
    path: 'badges',
    loadComponent: () => import('./pages/badges/badges.page').then( m => m.BadgesPage)
  },
  {
    path: 'cartao',
    loadComponent: () => import('./pages/cartao/cartao.page').then( m => m.CartaoPage)
  },

];
