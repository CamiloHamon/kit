import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-distinction-modal-effective',
	templateUrl: './distinction-modal-effective.component.html',
	styleUrls: ['./distinction-modal-effective.component.css'],
})
export class DistinctionModalEffectiveComponent implements OnInit {
	distinction: any = {};
	practice: boolean;

	constructor(
		private effectiveCombinationService: CombinationsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.effectiveCombinationService.cards.subscribe(
			(cardInformation: any) => (this.distinction = cardInformation)
		);
		this.effectiveCombinationService.practice.subscribe(
			(practice: boolean) => (this.practice = practice)
		);
	}

	continue() {
		sessionStorage.setItem('distinction', JSON.stringify(this.distinction));
		this.router.navigate(['/practice/card-combination']);
	}
}
