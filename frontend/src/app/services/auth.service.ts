import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user.model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private URL = 'http://localhost:8000/api';

	constructor(private http: HttpClient, private router: Router) {
		this.checkToken();
	}

	signIn(user: User) {
		return this.http.post<any>(this.URL + '/auth/login', user);
	}

	loggedIn(): boolean {
		return !!localStorage.getItem('token');
	}

	getToken() {
		return localStorage.getItem('token');
	}

	refreshToken() {
		return this.http.get<any>(this.URL + '/refresh');
	}

	checkToken() {
		const isExpired = helper.isTokenExpired(this.getToken()!);
		if (isExpired) this.logout();
	}

	logout() {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		return this.router.navigate(['/']);
	}
}
