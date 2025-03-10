import { Component, input } from '@angular/core';
import { Provider } from '../../interfaces/Provider';

@Component({
  selector: 'box-provider',
  imports: [],
  templateUrl: `./box-provider.component.html`,
})
export class BoxProviderComponent {

  provider = input<Provider>()

}
