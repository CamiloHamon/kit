import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class SituationsService {
	private URL = 'http://localhost:8000/api';

	constructor(private http: HttpClient, private router: Router) {}

	index(idEnvironment: number) {
		return this.http.get<any>(`${this.URL}/situations/${idEnvironment}`);
	}

	show(idSituation: number) {
		return this.http.get<any>(`${this.URL}/situation/${idSituation}`);
	}

	getSituation() {
		let infoSituation: any = sessionStorage.getItem('situation');
		infoSituation = JSON.parse(infoSituation);
		return infoSituation;
	}

	existSituation(): boolean {
		return !!sessionStorage.getItem('situation');
	}

	removeSituation(): void {
		sessionStorage.removeItem('situation');
	}
}
