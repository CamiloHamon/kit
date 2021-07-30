import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ForgotPassService {
	private URL = environment.URL;

	constructor(private http: HttpClient, private router: Router) {}

	sendEmail(email: any) {
		return this.http.post<any>(this.URL + '/auth/sendPasswordResetLink', email);
	}

	validURL(data: any) {
		return this.http.post<any>(this.URL + '/auth/validURL', data);
	}

	resetPassword(data: any) {
		return this.http.post<any>(this.URL + '/auth/resetPassword', data);
	}
}
