import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path: 'lista1',
    loadChildren: () => import('./modules/lista1/lista1-module').then(m => m.Lista1Module)
  }

];
