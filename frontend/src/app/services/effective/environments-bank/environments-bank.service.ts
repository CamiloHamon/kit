import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class EnvironmentsBankService {
	private URL = 'http://localhost:8000/api';

	constructor(private http: HttpClient, private router: Router) {}

	buildCombinationByEmotionId(id: number) {
		return this.http.get<any>(`${this.URL}/effectiveCombitation/${id}`);
	}
}
