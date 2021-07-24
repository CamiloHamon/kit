import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/classes/user.model';
import { environment } from 'src/environments/environment';

const helper = new JwtHelperService();

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private URL = environment.URL;

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
		localStorage.clear();
		sessionStorage.clear();
		return this.router.navigate(['/']);
	}
}
