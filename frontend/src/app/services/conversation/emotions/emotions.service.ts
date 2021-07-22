import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class EmotionsService {
	private URL = environment.URL;

	constructor(private http: HttpClient, private router: Router) {}

	index() {
		return this.http.get<any>(`${this.URL}/emotions`);
	}

	show(idEmotion: number) {
		return this.http.get<any>(`${this.URL}/emotion/${idEmotion}`);
	}

	getEmotionsByESAndSensation(idES: number, idSensation: number) {
		return this.http.get<any>(`${this.URL}/emotions/${idES}/${idSensation}`);
	}

	getEmotion() {
		let infoEmotion: any = sessionStorage.getItem('emotion');
		infoEmotion = JSON.parse(infoEmotion);
		return infoEmotion;
	}

	existEmotion(): boolean {
		return !!sessionStorage.getItem('emotion');
	}

	removeEmotion(): void {
		sessionStorage.removeItem('emotion');
	}
}
