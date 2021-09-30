import { Component, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kit de Conversaciones Inteligentes';
  constructor() {}

  onActivate(e: any) {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
