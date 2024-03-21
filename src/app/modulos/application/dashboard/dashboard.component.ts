import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'loto-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

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
