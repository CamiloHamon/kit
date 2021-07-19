import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cards-practice',
	templateUrl: './cards-practice.component.html',
	styleUrls: ['./cards-practice.component.css'],
})
export class CardsPracticeComponent implements OnInit {
	form: FormGroup;
	constructor(private formBuilder: FormBuilder, private router: Router) {
		this.buildForm();
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			cards: new FormControl('', [Validators.required]),
		});
	}

	ngOnInit(): void {}

	continue(event: Event) {
		event.preventDefault();
		const selected = this.form.value.cards;
		const possibleSelected = ['emotion', 'question', 'distinction', 'resource'];
		if (possibleSelected.indexOf(selected) != -1) {
			this.router.navigate([`/practice/${selected}`]);
		}
	}
}
