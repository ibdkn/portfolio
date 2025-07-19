import { Component } from '@angular/core';
import {ProjectItemComponent} from '../../shared/components/project-item/project-item.component';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectItemComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
