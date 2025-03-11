import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'provider',
    loadChildren: () => import('./pages/providers/provider.routes')
  },
  {

    path:'**',
    redirectTo:"provider"
  }

];
