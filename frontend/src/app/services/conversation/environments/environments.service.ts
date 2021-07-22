import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class EnvironmentsService {
	private URL = environment.URL;

	idSelected = new EventEmitter<number>();

	constructor(private http: HttpClient) {}

	index() {
		return this.http.get<any>(`${this.URL}/environments`);
	}

	show(id: number) {
		return this.http.get<any>(`${this.URL}/environment/${id}`);
	}

	getEnvironment() {
		let infoEnvironment: any = sessionStorage.getItem('environment');
		infoEnvironment = JSON.parse(infoEnvironment);
		return infoEnvironment;
	}

	existEnvironment(): boolean {
		return !!sessionStorage.getItem('environment');
	}

	removeEnvironment(): void {
		sessionStorage.removeItem('environment');
	}
}
