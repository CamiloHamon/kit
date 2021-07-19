import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-situation-practice',
	templateUrl: './situation-practice.component.html',
	styleUrls: ['./situation-practice.component.css'],
})
export class SituationPracticeComponent implements OnInit {
	form: FormGroup;
	constructor(private formBuilder: FormBuilder, private router: Router) {
		this.buildForm();
		sessionStorage.clear();
	}

	ngOnInit(): void {}

	private buildForm() {
		this.form = this.formBuilder.group({
			situation: new FormControl('', [
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(30),
				Validators.pattern(/^[a-zA-ZÀ-ÿ ]+$/),
			]),
		});
	}

	get length() {
		return this.form.get('situation')?.value.length;
	}

	continue() {
		const situation = this.form.get('situation')?.value;
		sessionStorage.setItem('situation', situation);
		this.router.navigate(['/practice/card-combination']);
	}
}
