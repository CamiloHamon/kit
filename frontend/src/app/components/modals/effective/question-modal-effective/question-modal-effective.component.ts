import { Component, OnInit } from '@angular/core';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-question-modal-effective',
	templateUrl: './question-modal-effective.component.html',
	styleUrls: ['./question-modal-effective.component.css'],
})
export class QuestionModalEffectiveComponent implements OnInit {
	question: any = {};
	constructor(private effectiveCombinationService: CombinationsService) {}

	ngOnInit(): void {
		this.effectiveCombinationService.cards.subscribe(
			(cardInformation: any) => (this.question = cardInformation)
		);
	}
}
