import { Component, Input, OnInit } from '@angular/core';

/**
 * Fragmento do template, abstração de um card.
 */
@Component({
	selector: 'loto-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	//- Input
	@Input() public mainTitle: any;
	@Input() public infoTitle?: string;
	@Input() public description?: any;
	@Input() public hasCustomContent?: boolean;
	@Input() public customContentGraph?: {
		show: boolean;
		graphNumberInfo?: string;
	}

	constructor() {}

	ngOnInit(): void {}
}
