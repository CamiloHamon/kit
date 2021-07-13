import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { HelperService } from 'src/app/services/conversation/helpers/helper.service';

@Injectable({
	providedIn: 'root',
})
export class DistinctionsGuard implements CanActivate {
	constructor(
		private helperConversation: HelperService,
		private router: Router
	) {}

	canActivate(): boolean {
		if (this.helperConversation.validateEnvSitSenEmoQues()) return true;

		this.router.navigate(['/conversation/questions']);
		return false;
	}
}
