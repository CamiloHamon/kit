import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { User } from 'src/app/classes/user.model';

import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { FormsService } from 'src/app/services/forms/forms.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
	form: FormGroup;
	email = '';
	password = '';
	error = false;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private formsService: FormsService,
		private router: Router
	) {
		this.buildForm();
	}

	public ngOnInit() {
		this.formsService.removeSpacesEmail(this.form);
	}

	private buildForm() {
		const pattern = /\S+@\S+\.\S+/;
		this.form = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern(pattern)]],
			password: ['', [Validators.required, Validators.minLength(5)]],
		});
	}

	public getError(controlName: string): string {
		let message = '';
		const control = this.form.get(controlName);
		if (control?.dirty || control?.touched) {
			if (control?.errors?.required != null) {
				message = 'Este campo es obligatorio';
			} else if (control?.errors?.pattern != null) {
				message = 'Debe ser un correo valido';
			} else if (control?.hasError('minlength')) {
				const minLength = control?.errors?.minlength.requiredLength;
				message = `Este campo debe tener minimo ${minLength} caracteres`;
			}
		}
		return message;
	}

	public signIn(event: Event) {
		event.preventDefault();
		if (this.form.valid) {
			this.email = this.form.get('email')?.value.toLowerCase().trim();
			this.password = this.form.get('password')?.value;
			const user = new User(this.email, this.password);
			this.authService.signIn(user).subscribe(
				(res) => {
					const user = res.user;
					localStorage.setItem('user', user.email);
					localStorage.setItem('token', res.token);
					localStorage.setItem('name', user.name);

					if (user.change_pass === 1) {
						localStorage.setItem('_F_C_P', user.change_pass);
					}

					if (user.rol === 1) localStorage.setItem('_U_R_A', user.rol_encrypt);
					if (user.rol === 3) localStorage.setItem('_U_R_SA', user.rol_encrypt);

					this.router.navigate(['/home']);
				},
				(err) => (this.error = true)
			);
		} else {
			this.form.markAllAsTouched();
		}
	}
}
