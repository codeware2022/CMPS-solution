import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent {
  date: string;
  time: string;
  selectedDatetime: string;
  submitted = false;
  @Input() isTimeNeed = false;
  @Input() label = "";
  selected: { startDate: moment.Moment; endDate: moment.Moment };

  constructor() {
    const now = new Date();
    this.date = now.toISOString().substring(0, 10); // Default to current date
    this.time = now.toTimeString().substring(0, 5); // Default to current time
  }

  submit() {
    this.selectedDatetime = `${this.date}T${this.time}`;
    this.submitted = true;
  }
}
