import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RequestAppointments, TimeDiponibility } from '../../appointments/interfaces/Appointment';
import { environment } from '../../../../environments/environment.development';
import { tap } from 'rxjs';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

   private http = inject(HttpClient);

   public dateSelected = signal<string>('');
   public appoinments = signal<TimeDiponibility>({} as TimeDiponibility);

   getProviderAppointmentDisponibility(providerId: number, date: string){
    this.http.get<RequestAppointments>(`${API_URL}/appointments/provider/${providerId}/disponibility?date=${date}`).pipe(
      tap((data) =>{
        this.appoinments.set(data.data);
      })
    ).subscribe()
  }

}
