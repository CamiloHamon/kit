import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-emotion-modal-effective',
	templateUrl: './emotion-modal-effective.component.html',
	styleUrls: ['./emotion-modal-effective.component.css'],
})
export class EmotionModalEffectiveComponent implements OnInit {
	emotion: any = {};
	practice: boolean;

	constructor(
		private effectiveCombinationService: CombinationsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.effectiveCombinationService.cards.subscribe(
			(cardInformation: any) => (this.emotion = cardInformation)
		);
		this.effectiveCombinationService.practice.subscribe(
			(practice: boolean) => (this.practice = practice)
		);
	}

	continue() {
		sessionStorage.setItem('emotion', JSON.stringify(this.emotion));
		this.router.navigate(['/practice/card-combination']);
	}
}
