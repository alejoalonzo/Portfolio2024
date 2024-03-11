import { Component } from '@angular/core';
import { TextThreeComponent } from '../text-three/text-three.component';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [TextThreeComponent],
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss'
})
export class NameComponent {

}
