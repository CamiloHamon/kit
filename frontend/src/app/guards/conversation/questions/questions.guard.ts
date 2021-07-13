import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HelperService } from 'src/app/services/conversation/helpers/helper.service';

@Injectable({
	providedIn: 'root',
})
export class QuestionsGuard implements CanActivate {
	constructor(
		private helperConversation: HelperService,
		private router: Router
	) {}

	canActivate(): boolean {
		if (this.helperConversation.validateEnvSitSenEmo()) return true;

		this.router.navigate(['/conversation/emotions']);
		return false;
	}
}
