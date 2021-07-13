import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SituationsService } from 'src/app/services/conversation/situations/situations.service';
import { EnvironmentsService } from 'src/app/services/conversation/environments/environments.service';
import { HelperService } from 'src/app/services/conversation/helpers/helper.service';

import { ModalErrorComponent } from '../../modals/modal-error/modal-error.component';

@Component({
	selector: 'app-situations',
	templateUrl: './situations.component.html',
	styleUrls: ['./situations.component.css'],
})
export class SituationsComponent implements OnInit {
	@ViewChild(ModalErrorComponent) modalError: ModalErrorComponent;
	back: string = 'conversation/environments';
	situations: any = [];
	idSutiation: number = -1;
	form = new FormGroup({
		cards: new FormControl('', [Validators.required]),
	});

	constructor(
		private situationsService: SituationsService,
		private environmentsServices: EnvironmentsService,
		private helperConversation: HelperService,
		private router: Router
	) {
		this.helperConversation.removeAllExceptEnv();
		const environment = this.environmentsServices.getEnvironment();

		this.situationsService.index(environment.id).subscribe(
			(res) => {
				if (res.length > 0) this.situations = res;
				else this.modalError.showModalError(this.back, 'lg');
			},
			(err) => this.modalError.showModalError(this.back, 'lg')
		);
	}

	ngOnInit(): void {}

	continue() {
		this.idSutiation = this.form.controls.cards.value;
		this.situationsService.show(this.idSutiation).subscribe(
			(res) => {
				sessionStorage.setItem('situation', `${JSON.stringify(res)}`);
			},
			(err) => this.modalError.showModalError(this.back, 'lg')
		);
	}

	goBack() {
		this.helperConversation.removeAllExceptEnv();
		this.router.navigate(['/conversation/environments']);
	}
}
