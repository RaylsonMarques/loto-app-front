import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { ISidebarItems } from 'app/core/components/sidebar/sidebar-items.models';
import { SidebarComponent } from 'app/core/components/sidebar/sidebar.component';
import { RouterEnum } from 'app/shared/enums/RouterEnum';
import { ScreenNameEnum } from 'app/shared/enums/ScreenNameEnum';
import { distinctUntilChanged, filter } from 'rxjs/operators';

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
	//- public
	public menuOptions: ISidebarItems[]; //- to sidebar
	public showRightbar: boolean; //- to rightbar
	public applicationNameSelected: string;

	constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
		this.verifyDataToActiveOptionInSidebar(this.activatedRoute); //- Sidebar
		this.verifyDataToActiveOptionInRightbar(this.activatedRoute); //- Rightbar
	}

	ngOnInit() {
		this.init();
		this.router.events
			.pipe(
				filter((value) => value instanceof NavigationEnd),
				distinctUntilChanged()
			)
			.subscribe(() => {
				this.verifyDataToActiveOptionInSidebar(this.activatedRoute); //- Sidebar
				this.verifyDataToActiveOptionInRightbar(this.activatedRoute); //- Rightbar
			});

	}

	public activateSidebar(event: boolean): void {
		this.sidebarComponent.activeSidebar = event;
	}

  /********** MÉTODOS PRIVADOS **********/
	private init(): void {
		this.initializeVariables();
	}

	private initializeVariables(): void {
		this.applicationNameSelected = "";
	}
	/******** SIDEBAR ********/
	private verifyDataToActiveOptionInSidebar(route: ActivatedRoute): void {
		let label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['name'] : '';
		//- Verify label
		if (!label) {
			//- Label not found
			if (route.data) {
				route.data.subscribe((data) => {
					if (!label) label = data['name'];
				});
			}
			//- Verify if label is already filled, and verify route.routeConfig
			if (!label && route.routeConfig.children.length > 0) {
				route.routeConfig.children.forEach((child: Route) => {
					if (this.router.url.includes(child.path)) label = child.data['name']
				});
			}
		}

		this.buildSidebarOptions(label);
	}

	private buildSidebarOptions(screenName: string): void {
		this.applicationNameSelected = screenName;
		this.menuOptions = [];
		this.menuOptions.push(
			{ title: 'Início', icon: 'dashboard', link: `/${RouterEnum.ROOT_APP}/${RouterEnum.DASHBOARD_ADMIN}`, active: screenName == ScreenNameEnum.DASHBOARD },
			{ title: 'Jogos', icon: 'sports_esports', link: '', active: false },
			{ title: 'Bolões', icon: 'casino', link: `/${RouterEnum.ROOT_APP}/${RouterEnum.JACKPOT_ROOT}`, active: screenName === ScreenNameEnum.JACKPOT },
			{ title: 'Grupo de Bolões', icon: 'group_work', link: '', active: false },
			{ title: 'Clientes', icon: 'groups', link: '', active: false },
			{ title: 'Resultados', icon: 'casino', link: '', active: false },
			{ title: 'Financeiro', icon: 'monetization_on', link: '', active: false },
			//- Always inactive
			{ title: 'Sair', icon: 'logout', link: '', active: false }
		);
	}

	/******** RIGHTBAR ********/
	private verifyDataToActiveOptionInRightbar(route: ActivatedRoute): void {
		let label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['showRightbar'] : '';

		if (!label) {
			//- Label not found
			route.routeConfig.children.forEach((child: Route) => {
				if (this.router.url.includes(child.path)) label = child.data['showRightbar']
			});
		}

		this.showRightbar = Boolean(label);
	}
}
