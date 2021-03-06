import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class DistinctionsService {
	private URL = environment.URL;

	constructor(private http: HttpClient) {}

	index() {
		return this.http.get<any>(`${this.URL}/distinctions`);
	}

	show(id: number) {
		return this.http.get<any>(`${this.URL}/distinction/${id}`);
	}

	getDistinctionsByESSEQ(idESSEQ: number) {
		return this.http.get<any>(`${this.URL}/distinctions/${idESSEQ}`);
	}

	validateDistinction(idESSEQ: number, idDistinction: number) {
		return this.http.get<any>(
			`${this.URL}/isCorrectDistinction/${idESSEQ}/${idDistinction}`
		);
	}

	getDistinction() {
		let infoDistinction: any = sessionStorage.getItem('distinction');
		infoDistinction = JSON.parse(infoDistinction);
		return infoDistinction;
	}

	existDistinction(): boolean {
		return !!sessionStorage.getItem('distinction');
	}

	removeDistinction(): void {
		sessionStorage.removeItem('distinction');
	}
}
