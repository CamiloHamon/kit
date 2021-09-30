import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-practice',
	templateUrl: './practice.component.html',
	styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	onActivate(e: any) {
		window.scroll({
		  top: 0,
		  behavior: 'smooth',
		});
	  }
}
