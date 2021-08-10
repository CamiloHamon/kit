import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AdminService {
	private URL = environment.URL + '/admin/';
	alert = new EventEmitter<any>();

	constructor(private http: HttpClient, private router: Router) {}

	isAdmin() {
		return !!localStorage.getItem('_U_R_A');
	}

	isSuperAdmin() {
		return !!localStorage.getItem('_U_R_SA');
	}

	getUsers() {
		return this.http.get<any>(this.URL + 'users');
	}

	getNameUser() {
		return localStorage.getItem('name');
	}

	saveUser(user: any) {
		return this.http.post<any>(this.URL + 'save-user', user);
	}

	showUser(id: number) {
		return this.http.get<any>(this.URL + `show/${id}`);
	}

	updateUser(user: any) {
		return this.http.post<any>(this.URL + 'update-user', user);
	}

	deleteUser(idUser: number) {
		return this.http.delete<any>(this.URL + `delete-user/${idUser}`);
	}
}
