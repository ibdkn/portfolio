import {Component, Input} from '@angular/core';
import {SvgIconComponent} from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-skill-item',
  imports: [
    SvgIconComponent
  ],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss'
})
export class SkillItemComponent {
  @Input() svgName!: string;
  @Input() title!: string;
}
