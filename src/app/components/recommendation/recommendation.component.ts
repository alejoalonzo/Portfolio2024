import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss'
})
export class RecommendationComponent {
  faQuoteRight = faQuoteRight;
}
