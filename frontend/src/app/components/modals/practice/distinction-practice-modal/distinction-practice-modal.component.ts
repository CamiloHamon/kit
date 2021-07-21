import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-distinction-practice-modal',
	templateUrl: './distinction-practice-modal.component.html',
	styleUrls: ['./distinction-practice-modal.component.css'],
})
export class DistinctionPracticeModalComponent implements OnInit {
	distinction: any = {};
	constructor() {}

	ngOnInit(): void {
		this.distinction = JSON.parse(sessionStorage.getItem('distinction')!);
	}
}
