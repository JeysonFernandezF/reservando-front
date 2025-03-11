import { Component, inject, OnInit, signal } from '@angular/core';
import { BoxProviderComponent } from "../../components/box-provider/box-provider.component";
import { ProviderService } from '../../../shared/services/Provider.service';
import { Provider } from '../../interfaces/Provider';

@Component({
  selector: 'app-all-provider-page',
  imports: [BoxProviderComponent],
  templateUrl: `./all-provider-page.component.html`,
})
export class AllProviderPageComponent implements OnInit{

  providerService = inject(ProviderService)

  ngOnInit(): void {
    this.providerService.getAllProviders();
  }
}
