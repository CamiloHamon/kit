import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FormsService } from 'src/app/services/forms/forms.service';

@Component({
	selector: 'app-edit-user',
	templateUrl: './edit-user.component.html',
	styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
	form: FormGroup;
	user: any;
	idUser: number;
	isSuperAdmin: boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private adminService: AdminService,
		private activateRoute: ActivatedRoute,
		private formsService: FormsService,
		private router: Router
	) {
		this.buildForm();
	}

	ngOnInit(): void {
		this.isSuperAdmin = this.adminService.isSuperAdmin();
		this.activateRoute.params.subscribe((params) => {
			this.idUser = params['id'];
		});

		this.adminService.showUser(this.idUser).subscribe(
			(res) => {
				if (Object.keys(res).length !== 0) {
					this.user = res;
					this.form.get('name')?.setValue(this.user.name);
					this.form.get('last_name')?.setValue(this.user.last_name);
					this.form.get('rol_id')?.setValue(this.user.rol_id);
				} else this.router.navigate(['/admin']);
			},
			(err) => this.router.navigate(['/admin'])
		);
		this.formsService.removeSpaces('name', this.form);
		this.formsService.removeSpaces('last_name', this.form);
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
			rol_id: ['', [Validators.required]],
		});
	}

	create(event: Event) {
		event.preventDefault();
		if (this.form.valid) {
			const user = this.form.value;
			user.name = user.name.toLowerCase().trim();
			user.last_name = user.last_name.toLowerCase().trim();
			user.email = this.user.email.toLowerCase().trim();
			user.user_id = this.idUser;

			this.adminService.updateUser(user).subscribe(
				(res) => {
					this.adminService.alert.emit(this.createAlert(user.email, 'editado'));
					this.router.navigate(['/admin']);
				},
				(err) => {
					this.adminService.alertError.emit(this.createAlert('', ''));
					this.router.navigate(['/admin']);
				}
			);
		}
		this.form.markAllAsTouched();
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
