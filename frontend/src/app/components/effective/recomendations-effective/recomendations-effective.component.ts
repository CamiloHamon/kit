import { Component, OnInit } from '@angular/core';
import { RecomendationsService } from 'src/app/services/recomendations/recomendations.service';

@Component({
	selector: 'app-recomendations-effective',
	templateUrl: './recomendations-effective.component.html',
	styleUrls: ['./recomendations-effective.component.css'],
})
export class RecomendationsEffectiveComponent implements OnInit {
	connectors: any;

	constructor(private recomendatiosService: RecomendationsService) {}

	ngOnInit(): void {
		if (!sessionStorage.getItem('recomendations')) {
			this.recomendatiosService.getRecomendatios().subscribe(
				(res) => {
					this.connectors = '';
					res = res.splice(1, res.length - 1);
					res.forEach((el: any) => {
						let infoCard: any = sessionStorage.getItem(el.card);
						infoCard = JSON.parse(infoCard).default_text;
						this.connectors += `${el.text} ${infoCard}`.trim();
					});
					this.connectors.trim();
					this.connectors = this.connectors.slice(2, this.connectors.length);
					sessionStorage.setItem('recomendations', this.connectors);
				},
				(err) => {}
			);
		} else {
			this.connectors = sessionStorage.getItem('recomendations');
		}
	}
}
