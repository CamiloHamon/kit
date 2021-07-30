import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidations } from 'src/app/classes/my-validations';
import { ChangePassService } from 'src/app/services/change-pass/change-pass.service';

@Component({
	selector: 'app-change-pass',
	templateUrl: './change-pass.component.html',
	styleUrls: ['./change-pass.component.css'],
})
export class ChangePassComponent implements OnInit {
	form: FormGroup;
	userName: string;

	constructor(
		private formBuilder: FormBuilder,
		private changePassService: ChangePassService,
		private router: Router
	) {
		this.buildForm();
		this.userName = localStorage.getItem('name')!;
	}

	ngOnInit(): void {}

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

	change(event: Event) {
		event.preventDefault();
		if (this.form.valid) {
			const pass = { password: this.form.get('pass')?.value };
			this.changePassService.changePassword(pass).subscribe((res) => {
				if (res.update) {
					localStorage.removeItem('_F_C_P');
					this.router.navigate(['/home']);
				} else this.router.navigate(['/change-pass']);
			});
		} else {
			this.form.markAllAsTouched();
		}
	}
}
