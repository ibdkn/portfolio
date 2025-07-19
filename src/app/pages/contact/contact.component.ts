import { Component } from '@angular/core';
import {ButtonComponent} from '../../shared/button/button.component';
import {SocialItemComponent} from '../../shared/components/social-item/social-item.component';

@Component({
  selector: 'app-contact',
  imports: [
    ButtonComponent,
    SocialItemComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
