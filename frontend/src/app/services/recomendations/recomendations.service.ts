import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class RecomendationsService {
	private URL = environment.URL;

	constructor(private http: HttpClient) {}

	getRecomendatios() {
		return this.http.get<any>(this.URL + '/recomendatios');
	}

	removeRecomendations(): void {
		sessionStorage.removeItem('recomendations');
	}
}
