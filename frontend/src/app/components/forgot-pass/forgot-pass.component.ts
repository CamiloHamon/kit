import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPassService } from 'src/app/services/forgot-pass/forgot-pass.service';
import { FormsService } from 'src/app/services/forms/forms.service';

@Component({
	selector: 'app-forgot-pass',
	templateUrl: './forgot-pass.component.html',
	styleUrls: ['./forgot-pass.component.css'],
})
export class ForgotPassComponent implements OnInit {
	form: FormGroup;
	alert: any = {};

	constructor(
		private formBuilder: FormBuilder,
		private forgotPassService: ForgotPassService,
		private formsService: FormsService,
		private router: Router
	) {
		this.buildForm();
	}

	ngOnInit(): void {
		this.formsService.removeSpacesEmail(this.form);
	}

	private buildForm() {
		const pattern = /\S+@\S+\.\S+/;
		this.form = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern(pattern)]],
		});
	}

	sendEmail(event: Event) {
		event.preventDefault();
		if (this.form.valid) {
			const email = this.form.value;
			email.email = email.email.toLowerCase().trim();
			this.forgotPassService.sendEmail(email).subscribe(
				(res) => {
					this.alert = {
						class: 'success',
						message: email.email,
						status: true,
					};
					this.form.reset();
				},
				(err) =>
					(this.alert = {
						class: 'danger',
						message: `Tu búsqueda no arrojó ningún resultado.`,
						status: false,
					})
			);
		} else {
			this.form.markAllAsTouched();
		}
	}
}
