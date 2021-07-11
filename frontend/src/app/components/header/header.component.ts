import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  changeBg = false;
  show = false;

  constructor(private router: Router, public authService: AuthService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url !== '/') this.changeBg = true;
        else this.changeBg = false;
      }
    })
  }

  openMenu(){
    this.show = true;
  }

  closeMenu(){
    this.show = false;
  }

  ngOnInit() { }
}
