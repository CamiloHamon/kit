import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class FunctionsPracticeService {
	constructor() {}

	validateAllCards(): boolean {
		const situation = sessionStorage.getItem('situation')!;
		const emotion = sessionStorage.getItem('emotion')!;
		const question = sessionStorage.getItem('question')!;
		const distinction = sessionStorage.getItem('distinction')!;
		const resource = sessionStorage.getItem('resource')!;
		if (situation && emotion && question && distinction && resource) {
			return true;
		}
		return false;
	}
}
