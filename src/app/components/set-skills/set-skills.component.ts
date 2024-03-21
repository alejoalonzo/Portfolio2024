import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// register Swiper custom elements
register();

@Component({
  selector: 'app-set-skills',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './set-skills.component.html',
  styleUrl: './set-skills.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SetSkillsComponent {

  faAngleRight=faAngleRight;
  faAngleDown=faAngleDown;
}
