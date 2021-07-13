import { Injectable } from '@angular/core';
import {
	ModalDismissReasons,
	NgbModal,
	NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
	providedIn: 'root',
})
export class ModalsService {
	closeResult = '';

	constructor(private modal: NgbModal, private config: NgbModalConfig) {
		this.config.backdrop = 'static';
		this.config.keyboard = false;
	}

	open(content: any, size: string) {
		this.modal
			.open(content, {
				ariaLabelledBy: 'modal-basic-title',
				centered: true,
				size: size,
			})
			.result.then(
				(result) => {
					this.closeResult = `Closed with: ${result}`;
				},
				(reason) => {
					this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
				}
			);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
