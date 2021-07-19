import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class CombinationsGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate(): boolean {
		const combinationOne = sessionStorage.getItem('combination-one');
		const combinationTwo = sessionStorage.getItem('combination-two');
		if (combinationOne && combinationTwo) return true;

		this.router.navigate(['/effective-combinations/emotions-bank']);
		return false;
	}
}
