import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ResourcesService } from 'src/app/services/conversation/resources/resources.service';
import { ModalsService } from 'src/app/services/modals/modals.service';

import { ModalErrorComponent } from '../../modals/modal-error/modal-error.component';

@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {
	@ViewChild('content') content: ElementRef | undefined;
	@ViewChild(ModalErrorComponent) modalError: ModalErrorComponent;
	back: string = 'conversation/distinctions';
	resources: any = [];
	resourceContent: string = '';
	idESSEQD: number = -1;
	form = new FormGroup({
		cards: new FormControl('', [Validators.required]),
	});

	constructor(
		private resourcesService: ResourcesService,
		private modalsServices: ModalsService,
		private router: Router
	) {
		this.resourcesService.removeResource();
		this.idESSEQD = Number(sessionStorage.getItem('esseeqd'));
		this.resourcesService.getResourcesByESSEQD(this.idESSEQD).subscribe(
			(res) => {
				if (res.length > 0) this.resources = res;
				else this.modalError.showModalError(this.back, 'lg');
			},
			(err) => this.modalError.showModalError(this.back, 'lg')
		);
	}

	ngOnInit(): void {}

	async continue() {
		const contentResource = this.form.controls.cards.value.split('-');
		const idResource = Number(contentResource[0]);
		const isValid = await this.getIsValid(idResource, contentResource);
		if (isValid) {
			this.resourcesService.show(idResource).subscribe(
				(res) => {
					sessionStorage.setItem('resource', `${JSON.stringify(res)}`);
					this.router.navigate(['/conversation/resources/details']);
				},
				(err) => this.modalError.showModalError(this.back, 'lg')
			);
		} else this.modalsServices.open(this.content, 'lg');
	}

	async getIsValid(idResource: number, contentResource: any): Promise<boolean> {
		try {
			const res = await this.resourcesService
				.validateResource(this.idESSEQD, idResource)
				.toPromise();

			if (res[0].isCorrect === 1) {
				const idESSEQDR = Number(contentResource[1]);
				sessionStorage.setItem('esseeqdr', `${idESSEQDR}`);
				return true;
			}
		} catch (error) {
			console.log(error);
		}

		return false;
	}

	goBack() {
		this.resourcesService.removeResource();
		this.router.navigate(['/conversation/distinctions']);
	}
}
