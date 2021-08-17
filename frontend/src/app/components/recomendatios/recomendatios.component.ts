import { Component, OnInit } from '@angular/core';
import { RecomendationsService } from 'src/app/services/recomendations/recomendations.service';

@Component({
	selector: 'app-recomendatios',
	templateUrl: './recomendatios.component.html',
	styleUrls: ['./recomendatios.component.css'],
})
export class RecomendatiosComponent implements OnInit {
	connectors: any;

	constructor(private recomendatiosService: RecomendationsService) {}

	ngOnInit(): void {
		if (!sessionStorage.getItem('recomendations')) {
			this.recomendatiosService.getRecomendatios().subscribe(
				(res) => {
					this.connectors = '';
					res.forEach((el: any) => {
						let infoCard: any = sessionStorage.getItem(el.card);
						infoCard = JSON.parse(infoCard).default_text;
						this.connectors += `${el.text} ${infoCard}`;
					});
					sessionStorage.setItem('recomendations', this.connectors);
				},
				(err) => {}
			);
		} else {
			this.connectors = sessionStorage.getItem('recomendations');
		}
	}
}
