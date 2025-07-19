import { Component } from '@angular/core';
import {ExperienceItemComponent} from '../../shared/components/experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  imports: [
    ExperienceItemComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}
