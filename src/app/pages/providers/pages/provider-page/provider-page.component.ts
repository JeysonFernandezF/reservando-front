import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { ProviderService } from '../../../shared/services/Provider.service';
import { ActivatedRoute } from '@angular/router';
import { CalendarComponent } from "../../../shared/components/calendar/calendar.component";
import { DateTime } from 'luxon';
import { AppointmentService } from '../../../shared/services/Appointment.service';

@Component({
  selector: 'app-provider-page',
  imports: [CalendarComponent],
  templateUrl: './provider-page.component.html',
})
export class ProviderPageComponent implements OnInit {


  meetings = {
    '2024-04-05': ['Dring Coffee', 'Learn React', 'Sleep'],
    '2024-04-06': ['Dring Coffee', 'Learn Angular', 'Sleep'],
  };

  providerService = inject(ProviderService)
  appointmentService = inject(AppointmentService)

  activatedRoute = inject(ActivatedRoute)


  providerId: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  provider = computed(()=>{
    return this.providerService.providerSelected()
  })


  ngOnInit(): void {
    if(Number.isNaN(this.providerId)) return;

    this.providerService.getProviderById(this.providerId);


  }

  selectDay(date: string){

    let isSame = false;
    if(this.appointmentService.dateSelected() != ''){
      const dateFormat = DateTime.fromFormat(date, 'yyyy-MM-dd');
      const selectedDateFormat = DateTime.fromFormat(this.appointmentService.dateSelected(), 'yyyy-MM-dd');
      if (dateFormat.hasSame(selectedDateFormat, 'month') && dateFormat.hasSame(selectedDateFormat, 'year')) {
        isSame = true;
      }
    }

    if(isSame) return;

    this.appointmentService.dateSelected.set(date);
    this.appointmentService.getProviderAppointmentDisponibility(this.providerId,date);
  }

}
