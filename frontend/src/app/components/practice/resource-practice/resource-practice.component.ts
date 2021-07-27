import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	CdkDrag,
	CdkDragDrop,
	DragDropModule,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';

import { ResourcesService } from 'src/app/services/conversation/resources/resources.service';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-resource-practice',
	templateUrl: './resource-practice.component.html',
	styleUrls: ['./resource-practice.component.css'],
})
export class ResourcePracticeComponent implements OnInit {
	resources: any = [];
	resourceSelected: any = {};
	idresourceSelected: number;

	constructor(
		private resourcesService: ResourcesService,
		private effectiveCombinationService: CombinationsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.resourcesService.index().subscribe(
			(res) => (this.resources = res),
			(err) => console.log(err)
		);
	}

	drop(event: CdkDragDrop<any>) {
		const indexOf = event.previousIndex;
		if (event.previousContainer !== event.container) {
			if (this.idresourceSelected > -1) {
				this.resources[this.idresourceSelected] = this.resourceSelected;
			}
			this.resourceSelected = this.resources[indexOf];
			this.idresourceSelected = indexOf;
			this.resources[indexOf] = {};
		}
	}

	sendCardEmitter(cardInfo: any) {
		this.effectiveCombinationService.cards.emit(cardInfo);
		this.effectiveCombinationService.practice.emit(true);
	}

	continue() {
		sessionStorage.setItem('resource', JSON.stringify(this.resourceSelected));
		this.router.navigate(['/practice/card-combination']);
	}
}
