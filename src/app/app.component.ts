import { Component } from '@angular/core';
import {HeaderComponent} from './pages/header/header.component';
import {MainComponent} from './pages/main/main.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
