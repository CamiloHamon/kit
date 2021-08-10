import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
let auxAlerts: any;

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
	name: string;
	users: any = [];
	alerts: any = [];

	constructor(private adminService: AdminService, private router: Router) {
		this.adminService.alert.subscribe((alert) => (auxAlerts = alert));
		if (auxAlerts) this.alerts.push(auxAlerts);
	}

	ngOnInit(): void {
		this.name = this.adminService.getNameUser()!;
		this.adminService.getUsers().subscribe(
			(res) => {
				this.users = res;
				console.log(res);
			},
			(err) => {
				localStorage.removeItem('_U_R_A');
				this.router.navigate(['/home']);
			}
		);
	}

	delete(userId: number, user: string) {
		const del = confirm(`Esta seguro que quiere eliminar al usuario ${user}?`);
		if (del) {
			this.adminService.deleteUser(userId).subscribe((res) => {
				if (res.deleted) {
					this.alerts.push(this.createAlert(user, 'eliminado'));
					const index = this.users.map((e: any) => e.id).indexOf(userId);
					this.users.splice(index, 1);
				}
			});
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
