import { Component, inject, input, output } from '@angular/core';
import { Provider } from '../../interfaces/Provider';
import { Router } from '@angular/router';

@Component({
  selector: 'box-provider',
  imports: [],
  templateUrl: `./box-provider.component.html`,
})
export class BoxProviderComponent {

  router = inject(Router);

  provider = input<Provider>()


  goToProviderDetails() {
    this.router.navigate(['/provider',this.provider()!.id])
  }

}
