import {Component, Input} from '@angular/core';
import {SvgIconComponent} from '../components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-button',
  imports: [
    SvgIconComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title: string = '';
  @Input() svgName: string = '';
}
