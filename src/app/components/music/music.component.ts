import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {

  faCompactDisc = faCompactDisc;
}
