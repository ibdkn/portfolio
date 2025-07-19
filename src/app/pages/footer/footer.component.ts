import { Component } from '@angular/core';
import {SvgIconComponent} from "../../shared/components/svg-icon/svg-icon.component";

@Component({
  selector: 'app-footer',
    imports: [
        SvgIconComponent
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
