import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourcesService } from 'src/app/services/conversation/resources/resources.service';

@Component({
	selector: 'app-resources-details',
	templateUrl: './resources-details.component.html',
	styleUrls: ['./resources-details.component.css'],
})
export class ResourcesDetailsComponent implements OnInit {
	resources: any = [];
	constructor(
		private resoursesService: ResourcesService,
		private router: Router
	) {
		if (this.resoursesService.existResource()) {
			this.resources = this.resoursesService.getResource();
		} else router.navigate(['/conversation/resources']);
	}

	ngOnInit(): void {}
}
