import { ChangeDetectionStrategy, Component, computed, Input, input, InputSignal, output, signal, Signal, WritableSignal } from '@angular/core';
import { DateTime, Info, Interval } from 'luxon';
import { Meetings } from './meetings.interface';
import { CommonModule } from '@angular/common';
import { TimeDiponibility } from '../../../appointments/interfaces/Appointment';

@Component({
  selector: 'calendar',
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl:'./calendar.component.css'
})
export class CalendarComponent {

  selectedDay = output<string>();


  @Input({required:true}) meetings!: TimeDiponibility

  today: Signal<DateTime> = signal(DateTime.local());
  firstDayOfActiveMonth: WritableSignal<DateTime> = signal(
    this.today().startOf('month'),
  );
  activeDay: WritableSignal<DateTime | null> = signal(null);
  weekDays: Signal<string[]> = signal(Info.weekdays('short'));
  daysOfMonth: Signal<DateTime[]> = computed(() => {
    return Interval.fromDateTimes(
      this.firstDayOfActiveMonth().startOf('week'),
      this.firstDayOfActiveMonth().endOf('month').endOf('week'),
    )
      .splitBy({ day: 1 })
      .map((d) => {
        if (d.start === null) {
          throw new Error('Wrong dates');
        }
        return d.start;
      });
  });
  DATE_MED = DateTime.DATE_MED;
  activeDayMeetings: Signal<string[]> = computed(() => {
    const activeDay = this.activeDay();
    if (activeDay === null) {
      return [];
    }
    const activeDayISO = activeDay.toISODate();

    if (!activeDayISO) {
      return [];
    }
    console.log(this.meetings);
    return this.meetings[activeDayISO];
  });

  goToPreviousMonth(): void {
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().minus({ month: 1 }),
    );
  }

  goToNextMonth(): void {
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().plus({ month: 1 }),
    );
  }

  goToToday(): void {
    this.firstDayOfActiveMonth.set(this.today().startOf('month'));
  }

  selectDay(dayOfMonth: DateTime<boolean>){
    if(dayOfMonth == null) return;
    this.activeDay.set(dayOfMonth);
    this.selectedDay.emit(dayOfMonth.toISODate()!);
  }
}
