import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              '../assets/css-styles/main_styles.css',
              '../assets/css-styles/elements_responsive.css',
              '../assets/css-styles/elements_styles.css',
              '../assets/css-styles/responsive.css'
            ]
})
export class AppComponent {
  title = 'angular-front-end';
}
