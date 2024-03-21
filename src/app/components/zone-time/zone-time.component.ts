import { Component } from '@angular/core';
import moment from 'moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-zone-time',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './zone-time.component.html',
  styleUrl: './zone-time.component.scss'
})
export class ZoneTimeComponent {

  faLocationDot=faLocationDot;
  currentTime: string = moment().format('hh:mm a');
}
