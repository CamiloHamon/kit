import {
	CdkDrag,
	CdkDragDrop,
	DragDropModule,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistinctionsService } from 'src/app/services/conversation/distinctions/distinctions.service';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-distinction-practice',
	templateUrl: './distinction-practice.component.html',
	styleUrls: ['./distinction-practice.component.css'],
})
export class DistinctionPracticeComponent implements OnInit {
	distinctions: any = [];
	distinctionSelected: any = {};
	idDistinctionSelected: number;

	constructor(
		private distinctionsService: DistinctionsService,
		private effectiveCombinationService: CombinationsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.distinctionsService.index().subscribe(
			(res) => (this.distinctions = res),
			(err) => console.log(err)
		);
	}

	drop(event: CdkDragDrop<any>) {
		const indexOf = event.previousIndex;
		if (event.previousContainer !== event.container) {
			if (this.idDistinctionSelected > -1) {
				this.distinctions[this.idDistinctionSelected] =
					this.distinctionSelected;
			}
			this.distinctionSelected = this.distinctions[indexOf];
			this.idDistinctionSelected = indexOf;
			this.distinctions[indexOf] = {};
		}
	}

	sendCardEmitter(cardInfo: any) {
		this.effectiveCombinationService.cards.emit(cardInfo);
		this.effectiveCombinationService.practice.emit(true);
	}

	continue() {
		sessionStorage.setItem(
			'distinction',
			JSON.stringify(this.distinctionSelected)
		);
		this.router.navigate(['/practice/card-combination']);
	}
}
