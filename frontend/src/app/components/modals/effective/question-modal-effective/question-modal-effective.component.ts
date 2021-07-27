import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-question-modal-effective',
	templateUrl: './question-modal-effective.component.html',
	styleUrls: ['./question-modal-effective.component.css'],
})
export class QuestionModalEffectiveComponent implements OnInit {
	question: any = {};
	practice: boolean;

	constructor(
		private effectiveCombinationService: CombinationsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.effectiveCombinationService.cards.subscribe(
			(cardInformation: any) => (this.question = cardInformation)
		);
		this.effectiveCombinationService.practice.subscribe(
			(practice: boolean) => (this.practice = practice)
		);
	}

	continue() {
		sessionStorage.setItem('question', JSON.stringify(this.question));
		this.router.navigate(['/practice/card-combination']);
	}
}
