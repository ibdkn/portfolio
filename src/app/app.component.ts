import { Component } from '@angular/core';
import {HeaderComponent} from './pages/header/header.component';
import {MainComponent} from './pages/main/main.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {AboutComponent} from './pages/about/about.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, SkillsComponent, ExperienceComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
