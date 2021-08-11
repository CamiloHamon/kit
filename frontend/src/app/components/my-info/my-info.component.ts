import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidations } from 'src/app/classes/my-validations';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChangePassService } from 'src/app/services/change-pass/change-pass.service';
import { FormsService } from 'src/app/services/forms/forms.service';
import { ModalsService } from 'src/app/services/modals/modals.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
	selector: 'app-my-info',
	templateUrl: './my-info.component.html',
	styleUrls: ['./my-info.component.css'],
})
export class MyInfoComponent implements OnInit {
	form: FormGroup;
	formPassword: FormGroup;
	formConfirmUser: FormGroup;
	formEmail: FormGroup;
	user: any;
	updateInfo: boolean = false;
	password: boolean = false;
	confirmUser: boolean = false;
	changeEmail: any = {};
	alertUserConfirm: boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private userServices: UserService,
		private changePassService: ChangePassService,
		public modalsService: ModalsService,
		public authService: AuthService,
		private formsService: FormsService,
		private router: Router
	) {
		this.buildForm();
		this.buildFormPassword();
		this.buildFormConfirmUser();
		this.buildFormEmail();
	}

	ngOnInit(): void {
		this.userServices.getInfoUser().subscribe(
			(res) => {
				this.user = res;
				this.form.get('name')?.setValue(this.user.name);
				this.form.get('last_name')?.setValue(this.user.last_name);
			},
			(err) => {
				this.router.navigate(['/']);
			}
		);
		this.formsService.removeSpaces('name', this.form);
		this.formsService.removeSpaces('last_name', this.form);
		this.formsService.removeSpacesEmail(this.formEmail);
	}

	private buildForm() {
		const patterNames = /^[a-zA-ZÀ-ÿ ]+$/;
		this.form = this.formBuilder.group({
			name: [
				'',
				[
					Validators.required,
					Validators.pattern(patterNames),
					Validators.minLength(3),
				],
			],
			last_name: [
				'',
				[
					Validators.required,
					Validators.pattern(patterNames),
					Validators.minLength(3),
				],
			],
		});
	}

	private buildFormPassword() {
		const patter =
			/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])?(?=.*[A-Z])(?=.*[a-z])\S{5,16}$/;
		this.formPassword = this.formBuilder.group(
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

	private buildFormConfirmUser() {
		this.formConfirmUser = this.formBuilder.group({
			pass: ['', [Validators.required]],
		});
	}

	private buildFormEmail() {
		const patternEmail = /\S+@\S+\.\S+/;
		this.formEmail = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern(patternEmail)]],
		});
	}

	confirm(event: Event) {
		event.preventDefault();
		if (this.formConfirmUser.valid) {
			const pass = { password: this.formConfirmUser.get('pass')?.value };
			this.userServices.confirmUser(pass).subscribe(
				(res) => {
					if (res) {
						this.confirmUser = true;
						this.modalsService.close();
					} else this.alertUserConfirm = true;
				},
				(err) => {
					console.log(err);
				}
			);
		} else {
			this.formPassword.markAllAsTouched();
		}
	}

	change(event: Event) {
		event.preventDefault();
		if (this.formPassword.valid && this.confirmUser) {
			const pass = { password: this.formPassword.get('pass')?.value };
			this.changePassService.changePassword(pass).subscribe((res) => {
				if (!res.update) this.router.navigate(['/account']);
				else {
					this.password = true;
					this.modalsService.close();
					this.formPassword.reset();
					this.formPassword.markAsUntouched();
				}
			});
		} else {
			this.formPassword.markAllAsTouched();
		}
	}

	emailChange(event: Event) {
		event.preventDefault();
		if (this.formEmail.valid && this.confirmUser) {
			const email = { email: this.formEmail.get('email')?.value };
			email.email = email.email.replace(/\s+/g, '');
			this.formEmail.get('email')?.setValue(email.email, { emitEvent: false });
			this.userServices.changeEmail(email).subscribe((res) => {
				if (res.update) {
					this.changeEmail = {};
					this.changeEmail.status = true;
					setTimeout(() => {
						this.login();
					}, 10000);
				} else {
					this.changeEmail = res;
					this.formEmail.reset();
				}
			});
		} else this.formEmail.markAllAsTouched();
	}

	login() {
		this.modalsService.close();
		this.authService.logout();
	}

	update(event: Event) {
		event.preventDefault();
		if (this.form.valid && this.confirmUser) {
			const user = this.form.value;
			user.name = user.name.toLowerCase();
			user.last_name = user.last_name.toLowerCase();
			user.email = this.user.email.toLowerCase();
			user.user_id = this.user.id;

			this.userServices.updateInfo(user).subscribe((res) => {
				if (res.update) {
					this.updateInfo = true;
					localStorage.setItem('name', user.name);
					this.formPassword.markAsUntouched();
				}
			});
		} else this.form.markAllAsTouched();
	}
}
