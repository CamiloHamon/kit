import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }
  email = '';
  password = '';

  ngOnInit(): void {
  }

  signIn() {
    const user = new User(this.email, this.password);
    this.authService.signIn(user)
      .subscribe(res => { 
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
       }, err => { console.log(err) })
  }

}
