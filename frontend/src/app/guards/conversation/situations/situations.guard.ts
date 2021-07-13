import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EnvironmentsService } from 'src/app/services/conversation/environments/environments.service';

@Injectable({
	providedIn: 'root',
})
export class SituationsGuard implements CanActivate {
	constructor(
		private environmentsServices: EnvironmentsService,
		private router: Router
	) {}

	canActivate(): boolean {
		if (this.environmentsServices.existEnvironment()) return true;

		this.router.navigate(['/conversation/environments']);
		return false;
	}
}
