import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { NameComponent } from '../../components/name/name.component';
import { WorkComponent } from '../../components/work/work.component';
import { TextThreeComponent } from '../../components/text-three/text-three.component';
import { PortraitComponent } from '../../components/portrait/portrait.component';
import { GitHubComponent } from '../../components/git-hub/git-hub.component';
import { MusicComponent } from '../../components/music/music.component';
import { RecommendationComponent } from '../../components/recommendation/recommendation.component';
import { LinkedinComponent } from '../../components/linkedin/linkedin.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';
import { SetSkillsComponent } from '../../components/set-skills/set-skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TitleComponent, 
    NameComponent, 
    WorkComponent, 
    TextThreeComponent, 
    PortraitComponent,
    GitHubComponent,
    MusicComponent,
    RecommendationComponent,
    LinkedinComponent,
    WhatsappComponent,
    SetSkillsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
