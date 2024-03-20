import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ScreenNameEnum } from '@loto/shared';
import { distinctUntilChanged, filter } from 'rxjs';

import { ISidebarItems } from './sidebar-items.models';

@Component({
	selector: 'loto-rightbar',
	templateUrl: './rightbar.component.html',
	styleUrls: ['./rightbar.component.scss'],
})
export class RightbarComponent implements OnInit {
	//- Output
	@Output() activeSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
	//- Public
	public show: boolean;
	public menuOptions: ISidebarItems[];

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
	}

	public openSidebar(): void {
		this.activeSidebar.emit(true);
	}

	public darkTheme(): void {
		document.body.classList.toggle('dark-mode-variables');

		const darkMode = document.querySelector('.dark-mode');
		darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
		darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
	}

	/**************** MÉTODOS PRIVADOS ****************/
	private verifyActiveOption(route: ActivatedRoute): void {
		let label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['showRightbar'] : '';
		route.data.subscribe((data) => {
			if (!label) label = data['showRightbar'];
		});
		this.buildSidebarOptions(label);
	}

	private init(): void {}

	private initializeVariables(): void {}

	private buildSidebarOptions(screenName: string): void {
		this.menuOptions = [];
		this.menuOptions.push(
			{ title: 'Início', icon: 'dashboard', link: '', active: screenName == ScreenNameEnum.DASHBOARD_ADMIN },
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
