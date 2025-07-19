import { Component } from '@angular/core';
import {SvgIconComponent} from "../svg-icon/svg-icon.component";

@Component({
  selector: 'app-project-item',
    imports: [
        SvgIconComponent
    ],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {

}
