import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidations } from 'src/app/classes/my-validations';
import { ForgotPassService } from 'src/app/services/forgot-pass/forgot-pass.service';

@Component({
	selector: 'app-reset-pass',
	templateUrl: './reset-pass.component.html',
	styleUrls: ['./reset-pass.component.css'],
})
export class ResetPassComponent implements OnInit {
	form: FormGroup;
	userName: string;
	token: string;
	email: string;
	resetPass: boolean = false;
	show: boolean = false;

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private forgotPassService: ForgotPassService
	) {
		const url = this.router.parseUrl(this.router.url);
		this.token = url.queryParams['token'];
		this.email = url.queryParams['email'];
		this.forgotPassService
			.validURL({ token: this.token, email: this.email })
			.subscribe(
				(res) => {
					if (res.length < 1) this.router.navigate(['/']);
					else this.show = true;
				},
				(err) => this.router.navigate(['/'])
			);
	}

	ngOnInit(): void {
		this.buildForm();
		this.userName = this.email;
	}

	private buildForm() {
		const patter = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
		this.form = this.formBuilder.group(
			{
				pass: [
					'',
					[
						Validators.required,
						Validators.pattern(patter),
						Validators.minLength(5),
						Validators.maxLength(16),
					],
				],
				confirmPassword: [
					'',
					[
						Validators.required,
						Validators.pattern(patter),
						Validators.minLength(5),
						Validators.maxLength(16),
					],
				],
			},
			{
				validator: MyValidations.equalsPassword,
			}
		);
	}

	reset(event: Event) {
		event.preventDefault();
		if (this.form.valid) {
			const password = this.form.get('pass')?.value;
			const data = {
				resetToken: this.token,
				email: this.email,
				password,
				password_confirmation: password,
			};
			this.forgotPassService.resetPassword(data).subscribe(
				(res) => {
					this.resetPass = true;
				},
				(err) => console.log(err)
			);
		} else {
			this.form.markAllAsTouched();
		}
	}
}
