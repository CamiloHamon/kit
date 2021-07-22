import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class QuestionsService {
	private URL = environment.URL;

	constructor(private http: HttpClient, private router: Router) {}

	index() {
		return this.http.get<any>(`${this.URL}/questions`);
	}

	show(idQuestion: number) {
		return this.http.get<any>(`${this.URL}/question/${idQuestion}`);
	}

	getQuestionsByESSE(idESSE: number) {
		return this.http.get<any>(`${this.URL}/questions/${idESSE}`);
	}

	validateQuestion(idESSE: number, idQuestion: number) {
		return this.http.get<any>(
			`${this.URL}/isCorrectQuestion/${idESSE}/${idQuestion}`
		);
	}

	getQuestion() {
		let infoQuestion: any = sessionStorage.getItem('question');
		infoQuestion = JSON.parse(infoQuestion);
		return infoQuestion;
	}

	existQuestion(): boolean {
		return !!sessionStorage.getItem('question');
	}

	removeQuestion(): void {
		sessionStorage.removeItem('question');
	}
}
