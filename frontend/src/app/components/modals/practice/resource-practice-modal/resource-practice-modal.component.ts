import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-resource-practice-modal',
	templateUrl: './resource-practice-modal.component.html',
	styleUrls: ['./resource-practice-modal.component.css'],
})
export class ResourcePracticeModalComponent implements OnInit {
	resource: any = [];
	constructor() {}

	ngOnInit(): void {
		this.resource = JSON.parse(sessionStorage.getItem('resource')!);
	}
}
