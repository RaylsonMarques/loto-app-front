import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { RouterEnum } from 'app/shared/enums/RouterEnum';

import { IApplicationRightbarItems } from './application-rightbar-items.models';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
	selector: "loto-application-rightbar",
	templateUrl: "./application-rightbar.component.html",
	styleUrls: ["./application-rightbar.component.scss"],
})
export class ApplicationRightbarComponent implements OnInit {
	//- Output
	@Output() activeSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
	//- public
	public actionsForApps: IApplicationRightbarItems[];

	constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
		this.actionsForApps = this.verifyOptionsToCreateApplicationBar(this.activatedRoute);
	}

	/**************** MÉTODOS PÚBLICOS ****************/
	ngOnInit(): void {
		this.router.events
			.pipe(filter((value) => value instanceof NavigationEnd), distinctUntilChanged())
			.subscribe(() => this.actionsForApps = this.verifyOptionsToCreateApplicationBar(this.activatedRoute));

		this.init();
	}

	public activateSidebar(event: any): void {
		this.activeSidebar.emit(event);
	}

	public redirect(route: string): void {
		this.router.navigate([route]);
	}

	/**************** MÉTODOS PRIVADOS ****************/
	private init(): void {
		this.initializeVariables();
	}

	private initializeVariables(): void {}


	private verifyOptionsToCreateApplicationBar(route: ActivatedRoute): IApplicationRightbarItems[] {
		console.log('route: ', route);
		let label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['name'] : '';
		//- Verify label
		if (!label) {
			//- Verify if label is already filled, and verify route.routeConfig
			if (!label && route.routeConfig.children.length > 0) {
				route.routeConfig.children.forEach((child: Route) => {
					if (this.router.url.includes(child.path)) label = child.data['name']
				});
			}
		}

		return this.createActionsForApplications(label);
	}

	private createActionsForApplications(screenName: string): IApplicationRightbarItems[] {
		console.log(screenName);
		this.actionsForApps = [];
		//- Create options
		const options: any = {
			//- Jackpot
			"JACKPOT": [
				{ title: "Novo bolão", icon: "add", link: `${RouterEnum.ROOT_APP}/${RouterEnum.JACKPOT_ROOT}/${RouterEnum.CREATE}`, adminOption: true },
				{ title: "Ver todos os bolões", icon: "list", link: `${RouterEnum.ROOT_APP}/${RouterEnum.JACKPOT_ROOT}/${RouterEnum.CREATE}`, adminOption: true }
			],
			"JACKPOT_CREATE": [],
		};

		return options[screenName];
	}
}
