import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CombinationsService {
	changeOpt = new EventEmitter<number>();

	constructor() {}
}