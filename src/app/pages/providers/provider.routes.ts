import { Routes } from '@angular/router';
import { AllProviderPageComponent } from './pages/all-provider-page/all-provider-page.component';
import { ProviderPageComponent } from './pages/provider-page/provider-page.component';

export const providerRoutes: Routes = [

  {
    path:'',
    component: AllProviderPageComponent
  },
  {
    path:':id',
    component: ProviderPageComponent
  },
  {

    path:'**',
    redirectTo:""
  }

];

export default providerRoutes;
