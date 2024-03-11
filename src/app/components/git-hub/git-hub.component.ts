import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-git-hub',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './git-hub.component.html',
  styleUrl: './git-hub.component.scss'
})
export class GitHubComponent {
  faGithub = faGithub;
}
