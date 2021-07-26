import { Component, OnInit } from '@angular/core';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-emotion-modal-effective',
	templateUrl: './emotion-modal-effective.component.html',
	styleUrls: ['./emotion-modal-effective.component.css'],
})
export class EmotionModalEffectiveComponent implements OnInit {
	emotion: any = {};
	constructor(private effectiveCombinationService: CombinationsService) {}

	ngOnInit(): void {
		this.effectiveCombinationService.cards.subscribe(
			(cardInformation: any) => (this.emotion = cardInformation)
		);
	}
}
