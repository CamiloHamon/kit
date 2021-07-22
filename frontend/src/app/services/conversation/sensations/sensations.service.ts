import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SensationService {
	private URL = environment.URL;

	constructor(private http: HttpClient, private router: Router) {}

	index() {
		return this.http.get<any>(`${this.URL}/sensations`);
	}

	show(idSensation: number) {
		return this.http.get<any>(`${this.URL}/sensation/${idSensation}`);
	}

	getSensation() {
		let infoSensation: any = sessionStorage.getItem('sensation');
		infoSensation = JSON.parse(infoSensation);
		return infoSensation;
	}

	existSensation(): boolean {
		return !!sessionStorage.getItem('sensation');
	}

	removeSensation(): void {
		sessionStorage.removeItem('sensation');
	}
}
