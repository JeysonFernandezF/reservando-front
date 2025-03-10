import { Component, inject, OnInit } from '@angular/core';
import { BoxProviderComponent } from "../../components/box-provider/box-provider.component";
import { ProviderService } from '../../services/Provider.service';

@Component({
  selector: 'app-all-provider-page',
  imports: [BoxProviderComponent],
  templateUrl: `./all-provider-page.component.html`,
})
export class AllProviderPageComponent implements OnInit{

  providerService = inject(ProviderService)



  ngOnInit(): void {
    this.providerService.getAllProviders();
    console.log(this.providerService.providers())
  }
}
