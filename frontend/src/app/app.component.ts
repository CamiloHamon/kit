import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  changeBg = false;

  constructor(private router: Router, public authService: AuthService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if(val.url === '/login') this.changeBg = true;
        else this.changeBg = false;
      }
    })

  }
}
