import { Component, OnInit } from '@angular/core';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-resource-modal-effective',
	templateUrl: './resource-modal-effective.component.html',
	styleUrls: ['./resource-modal-effective.component.css'],
})
export class ResourceModalEffectiveComponent implements OnInit {
	resource: any = {};
	constructor(private effectiveCombinationService: CombinationsService) {}

	ngOnInit(): void {
		this.effectiveCombinationService.cards.subscribe(
			(cardInformation: any) => (this.resource = cardInformation)
		);
	}
}
