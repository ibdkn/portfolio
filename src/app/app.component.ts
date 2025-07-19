import { Component } from '@angular/core';
import {HeaderComponent} from './pages/header/header.component';
import {MainComponent} from './pages/main/main.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {AboutComponent} from './pages/about/about.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ContactComponent} from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, SkillsComponent, ExperienceComponent, AboutComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
