import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class ChangePassGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate(): boolean {
		const changePass = !!localStorage.getItem('_F_C_P');
		if (!changePass) return true;

		this.router.navigate(['/change-pass']);
		return false;
	}
}
