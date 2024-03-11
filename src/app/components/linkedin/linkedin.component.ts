import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-linkedin',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './linkedin.component.html',
  styleUrl: './linkedin.component.scss'
})
export class LinkedinComponent {
  faLinkedin = faLinkedin
}
