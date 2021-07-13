import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { HelperService } from 'src/app/services/conversation/helpers/helper.service';

@Injectable({
	providedIn: 'root',
})
export class FeedbackGuard implements CanActivate {
	constructor(
		private helperConversation: HelperService,
		private router: Router
	) {}

	canActivate(): boolean {
		if (this.helperConversation.validateEnvSitSenEmoQuesDistResource())
			return true;

		this.router.navigate(['/conversation/resources']);
		return false;
	}
}
