import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-resource-modal-effective',
	templateUrl: './resource-modal-effective.component.html',
	styleUrls: ['./resource-modal-effective.component.css'],
})
export class ResourceModalEffectiveComponent implements OnInit {
	resource: any = {};
	practice: boolean;

	constructor(
		private effectiveCombinationService: CombinationsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.effectiveCombinationService.cards.subscribe(
			(cardInformation: any) => (this.resource = cardInformation)
		);
		this.effectiveCombinationService.practice.subscribe(
			(practice: boolean) => (this.practice = practice)
		);
	}

	continue() {
		sessionStorage.setItem('resource', JSON.stringify(this.resource));
		this.router.navigate(['/practice/card-combination']);
	}
}
