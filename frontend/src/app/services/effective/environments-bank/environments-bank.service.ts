import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class EnvironmentsBankService {
	private URL = environment.URL;

	constructor(private http: HttpClient, private router: Router) {}

	buildCombinationByEmotionId(id: number) {
		return this.http.get<any>(`${this.URL}/effectiveCombitation/${id}`);
	}
}
