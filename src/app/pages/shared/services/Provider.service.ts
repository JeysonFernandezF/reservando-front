import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { catchError, tap, throwError } from 'rxjs';
import { Provider,ResponseProvider,ResponseRequest } from '../../providers/interfaces/Provider';


const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private http = inject(HttpClient);

  public providers= signal<Provider[]>([]);
  public providerSelected = signal<Provider>({} as Provider);




  getAllProviders(){
    this.http.get<ResponseRequest>(`${API_URL}/providers/all`).pipe(
      tap((data) => {
        console.log(data)
        this.providers.set(data.data)
      }),
      catchError((error) => {
        console.log("Error", error);
        return throwError(
          () => new Error(`Ha surgido un error inesperado: ${error}`)
        );
      })
    ).subscribe()
  }

  getProviderById(id: number){
    this.http.get<ResponseProvider>(`${API_URL}/providers/${id}`).pipe(
      tap((data) => {
        console.log(data)
        this.providerSelected.set(data.data);
      })
    ).subscribe()
  }



}
