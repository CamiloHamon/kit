import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
	constructor(public authService: AuthService) {}

	ngOnInit(): void {}
}
