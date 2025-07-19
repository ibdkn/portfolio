import { Component } from '@angular/core';
import {SocialItemComponent} from '../../shared/components/social-item/social-item.component';

@Component({
  selector: 'app-main',
  imports: [
    SocialItemComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
