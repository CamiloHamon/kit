import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FunctionsPracticeService } from 'src/app/services/practice/functions.service';

@Injectable({
	providedIn: 'root',
})
export class FeedbackPracticeGuard implements CanActivate {
	constructor(
		private router: Router,
		private functionPracticeService: FunctionsPracticeService
	) {}

	canActivate(): boolean {
		if (this.functionPracticeService.validateAllCards()) return true;
		sessionStorage.clear();
		this.router.navigate(['/practice/situation']);
		return false;
	}
}
