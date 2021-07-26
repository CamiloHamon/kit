import { Component, OnInit } from '@angular/core';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-distinction-modal-effective',
	templateUrl: './distinction-modal-effective.component.html',
	styleUrls: ['./distinction-modal-effective.component.css'],
})
export class DistinctionModalEffectiveComponent implements OnInit {
	distinction: any = {};
	constructor(private effectiveCombinationService: CombinationsService) {}

	ngOnInit(): void {
		this.effectiveCombinationService.cards.subscribe(
			(cardInformation: any) => (this.distinction = cardInformation)
		);
	}
}
