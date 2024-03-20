import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'loto-admin-home',
	templateUrl: './admin-home.component.html',
	styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {

	public sideoptions: any[];

	constructor() {}

	ngOnInit(): void {}

	private init(): void {}

	private initVariables(): void {
		this.sideoptions = [];
	}
}


// @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;

// ngAfterViewInit() {
// 	this.sidenavContainer.scrollable.elementScrolled().subscribe(() => /* react to scrolling */);
// }
