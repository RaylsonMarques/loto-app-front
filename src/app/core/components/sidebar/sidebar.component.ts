import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs/operators';

import { ISidebarItems } from './sidebar-items.models';
import { ScreenNameEnum } from 'app/shared/enums/ScreenNameEnum';

@Component({
	selector: 'loto-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	//- Public
	public activeSidebar: boolean;
	public menuOptions: ISidebarItems[];
	//- Private
	private widthScreenAlwaysActiveSidebar: number;

	constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
		this.verifyActiveOption(this.activatedRoute);
	}

	/**************** MÉTODOS PÚBLICOS ****************/
	ngOnInit(): void {
		this.router.events
			.pipe(
				filter((value) => value instanceof NavigationEnd),
				distinctUntilChanged()
			)
			.subscribe(() => this.verifyActiveOption(this.activatedRoute.root));

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
	private verifyActiveOption(route: ActivatedRoute): void {
		console.log(route);
		let label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['name'] : '';
		route.data.subscribe((data) => {
			if (!label) label = data['name'];
		});
		this.buildSidebarOptions(label);
	}

	private init(): void {
		this.initializeVariables();
		this.onResize();
	}

	private initializeVariables(): void {
		this.widthScreenAlwaysActiveSidebar = 768;
		this.activeSidebar = false;
	}

	private buildSidebarOptions(screenName: string): void {
		this.menuOptions = [];
		this.menuOptions.push(
			{ title: 'Início', icon: 'dashboard', link: '', active: screenName == ScreenNameEnum.DASHBOARD },
			{ title: 'Bolões', icon: 'casino', link: '', active: false },
			{ title: 'Grupo de Bolões', icon: 'group_work', link: '', active: false },
			{ title: 'Clientes', icon: 'groups', link: '', active: false },
			{ title: 'Resultados', icon: 'casino', link: '', active: false },
			{ title: 'Financeiro', icon: 'monetization_on', link: '', active: false },
			//- Always inactive
			{ title: 'Sair', icon: 'logout', link: '', active: false }
		);
	}
}
