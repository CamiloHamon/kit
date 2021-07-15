import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-start-effective',
	templateUrl: './start-effective.component.html',
	styleUrls: ['./start-effective.component.css'],
})
export class StartEffectiveComponent implements OnInit {
	constructor() {
		sessionStorage.clear();
	}

	ngOnInit(): void {}
}
