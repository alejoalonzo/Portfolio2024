import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-set-skills',
  standalone: true,
  imports: [],
  templateUrl: './set-skills.component.html',
  styleUrl: './set-skills.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SetSkillsComponent {

}
