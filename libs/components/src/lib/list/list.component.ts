import { Component, Input, OnInit, Injectable } from '@angular/core';

@Component({
	selector: 'loto-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
@Injectable({
	providedIn: 'root',
})
export class ListComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
