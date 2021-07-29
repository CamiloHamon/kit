import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
	userName: string;

	constructor(private adminService: AdminService) {}

	ngOnInit() {
		this.userName = this.adminService.getNameUser()!;
	}
}
