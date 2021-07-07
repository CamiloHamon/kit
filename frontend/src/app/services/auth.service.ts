import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../classes/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient, private router:Router) { }

  signIn(user: User) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    return this.router.navigate(['/']);
  }
}