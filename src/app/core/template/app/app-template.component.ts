import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarComponent } from 'app/core/components/sidebar/sidebar.component';

/**
 * Componente de template para dashboard.
 */
@Component({
	selector: "app-template",
	templateUrl: "./app-template.component.html",
	styleUrls: ["./app-template.component.scss"],
})
export class AppTemplateComponent implements OnInit {
	//- Children
	@ViewChild("sidebarComponent") sidebarComponent: SidebarComponent;

	constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

	ngOnInit() {}

	public activateSidebar(event: boolean): void {
		this.sidebarComponent.activeSidebar = event;
	}

  /********** MÉTODOS PRIVADOS **********/
}
