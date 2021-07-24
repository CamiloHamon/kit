import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class HeaderService {
	routes = ['/', '/login'];
	showHeaderMovil = true;
	constructor(private router: Router) {
		this.showHeaderMovil = this.showHeaderMovilFunction();
	}

	showHeaderMovilFunction(): boolean {
		let result = true;
		this.router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				if (this.routes.includes(val.url)) result = false;
			}
		});
		return result;
	}
}
