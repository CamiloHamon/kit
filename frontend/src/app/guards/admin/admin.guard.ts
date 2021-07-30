import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AdminGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate(): boolean {
		const changePass = !!localStorage.getItem('_U_R_A');
		if (changePass) return true;

		this.router.navigate(['/home']);
		return false;
	}
}
