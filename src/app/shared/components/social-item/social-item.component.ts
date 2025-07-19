import {Component, Input} from '@angular/core';
import {SvgIconComponent} from "../svg-icon/svg-icon.component";

@Component({
  selector: 'app-social-item',
    imports: [
        SvgIconComponent
    ],
  templateUrl: './social-item.component.html',
  styleUrl: './social-item.component.scss'
})
export class SocialItemComponent {
  @Input() svgName!: string;
}
