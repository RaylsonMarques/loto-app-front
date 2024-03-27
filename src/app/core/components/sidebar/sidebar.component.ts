import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ISidebarItems } from "./sidebar-items.models";

@Component({
	selector: "loto-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
	//- Input
	@Input() public menuOptions: ISidebarItems[];
	//- Public
	public activeSidebar: boolean;
	//- Private
	private widthScreenAlwaysActiveSidebar: number;

	constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

	/**************** MÉTODOS PÚBLICOS ****************/
	ngOnInit(): void {
		this.init();
	}

	public closeSidebar(): void {
		this.activeSidebar = false;
	}

	public onResize() {
		const actualWidht: number = document.documentElement.clientWidth;
		if (actualWidht > this.widthScreenAlwaysActiveSidebar) {
			this.activeSidebar = true;
		}
	}

	/**************** MÉTODOS PRIVADOS ****************/

	private init(): void {
		this.initializeVariables();
		this.onResize();
	}

	private initializeVariables(): void {
		this.widthScreenAlwaysActiveSidebar = 768;
		this.activeSidebar = false;
	}
}
