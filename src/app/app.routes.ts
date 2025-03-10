import { Routes } from '@angular/router';
import { AllProviderPageComponent } from './pages/providers/pages/all-provider-page/all-provider-page.component';

export const routes: Routes = [

  {
    path:'',
    component: AllProviderPageComponent
  },
  {

    path:'**',
    redirectTo:""
  }

];
