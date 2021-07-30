import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ChangePassService {
	private URL = environment.URL;

	constructor(private http: HttpClient, private router: Router) {}

	changePassword(password: any) {
		return this.http.put<any>(this.URL + '/change', password);
	}
}
