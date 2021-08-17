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
	isLarge: boolean = false;

	constructor(
		private resoursesService: ResourcesService,
		private router: Router
	) {
		if (this.resoursesService.existResource()) {
			this.resources = this.resoursesService.getResource();
			if (this.resources.argument.length > 600) {
				this.isLarge = true;
				const split = this.resources.argument.lastIndexOf(
					' ',
					this.resources.argument.length / 2
				);

				this.resources.first = this.resources.argument.slice(0, split);
				this.resources.last = this.resources.argument.slice(
					split,
					this.resources.argument.length
				);
			}
		} else router.navigate(['/conversation/resources']);
	}

	ngOnInit(): void {}
}
