import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SvgIconComponent} from '../../shared/components/svg-icon/svg-icon.component';
import {ButtonComponent} from '../../shared/button/button.component';

@Component({
  selector: 'app-header',
  imports: [
    SvgIconComponent,
    ButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  menuItems = [
    {
      id: 1,
      link: '#',
      title: 'About Me'
    },
    {
      id: 2,
      link: '#',
      title: 'Skills'
    },
    {
      id: 3,
      link: '#',
      title: 'Project'
    },
    {
      id: 4,
      link: '#',
      title: 'Contact me'
    },
  ]
  isOpen = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
