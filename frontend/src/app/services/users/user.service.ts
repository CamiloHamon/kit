import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private URL = environment.URL;

	constructor(private http: HttpClient) {}

	getInfoUser() {
		return this.http.get<any>(this.URL + '/me');
	}

	updateInfo(user: any) {
		return this.http.put<any>(this.URL + '/update-info', user);
	}

	confirmUser(pass: any) {
		return this.http.post<any>(this.URL + '/confirm-user', pass);
	}

	changeEmail(email: any) {
		return this.http.put<any>(this.URL + '/change-email', email);
	}
}
