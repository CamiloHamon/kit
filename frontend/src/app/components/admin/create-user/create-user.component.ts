import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FormsService } from 'src/app/services/forms/forms.service';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.component.html',
	styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
	form: FormGroup;
	exist: string;
	isSuperAdmin: boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private adminService: AdminService,
		private formsService: FormsService,
		private router: Router
	) {
		this.buildForm();
	}

	ngOnInit(): void {
		this.isSuperAdmin = this.adminService.isSuperAdmin();
		this.formsService.removeSpaces('name', this.form);
		this.formsService.removeSpaces('last_name', this.form);
		this.formsService.removeSpacesEmail(this.form);
	}

	private buildForm() {
		const patternEmail = /\S+@\S+\.\S+/;
		const patterNames = /^[a-zA-ZÀ-ÿ ]+$/;
		this.form = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern(patternEmail)]],
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
			rol_id: ['', [Validators.required]],
		});
	}

	create(event: Event) {
		event.preventDefault();
		if (this.form.valid) {
			const user = this.form.value;
			user.name = user.name.toLowerCase().trim();
			user.last_name = user.last_name.toLowerCase().trim();
			user.email = user.email.toLowerCase().trim();

			user.rol_id !== '1' && user.rol_id !== '2'
				? (user.rol_id = '2')
				: (user.rol_id = user.rol_id);

			this.adminService.saveUser(user).subscribe(
				(res) => {
					if (res.success) {
						this.adminService.alert.emit(
							this.createAlert(user.email, 'creado')
						);
						this.router.navigate(['/admin']);
					} else this.exist = user.email;
				},
				(err) => {
					this.adminService.alertError.emit(this.createAlert('', ''));
					this.router.navigate(['/admin']);
				}
			);
		} else {
			this.form.markAllAsTouched();
		}
	}

	createAlert(user: string, message: string) {
		const alert = {
			user,
			message,
			show: true,
			display: true,
		};
		setTimeout(() => {
			alert.show = false;
		}, 5000);
		setTimeout(() => {
			alert.display = false;
		}, 5500);
		return alert;
	}
}
