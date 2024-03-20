import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService, RouterEnum, ScreenNameEnum } from '@loto/shared';

import { ControlValidationService } from '../../../../../apps/root/src/core/service/control/ControlValidation.service';
import { IMenuItems } from './menu-items.model';

@Component({
	selector: 'loto-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	//- Input
	@Input() public isAppNavbar: boolean;
	//- public
	public menuItems: IMenuItems[];
	public activeScreen: string;
	public menuActive: boolean;

	constructor(
		//- Service
		private readonly controlValidationService: ControlValidationService,
		private readonly notificationService: NotificationService,
		private readonly router: Router
	) {}

	ngOnInit() {
		this.init();
	}

	public get routerEnum() {
		return RouterEnum;
	}

	public logout(): void {
		// this.keycloack.logout("");
	}

	public redirect(router: RouterEnum): void {
		this.router.navigate([router]);
	}

	public activeMenu(): void {
		this.menuActive = !this.menuActive;
	}

	private init(): void {
		this.initializeVariables();
	}

	private initializeVariables(): void {
		this.menuItems = this.buildSiteNavbar();
		this.menuActive = false;
	}

	private buildSiteNavbar(): IMenuItems[] {
		const items: IMenuItems[] = [];
		items.push(
			//- Site options
			{ title: 'Início', url: `/${this.routerEnum.HOME}`, name: ScreenNameEnum.ROOT, enabled: true, active: false, appOption: false },
			{ title: 'Dúvidas', url: `/${this.routerEnum.ROOT}`, name: null, enabled: false, active: false, appOption: false },
			{ title: 'Resultados', url: `/${this.routerEnum.ROOT}`, name: null, enabled: false, active: false, appOption: false },
			{ title: 'Cadastro', url: `/${this.routerEnum.SIGN_UP}`, name: ScreenNameEnum.SIGN_UP, enabled: true, active: false, appOption: false },
			{ title: 'Entrar', url: `/${this.routerEnum.SIGN_IN}`, name: ScreenNameEnum.SIGN_IN, enabled: true, active: false, appOption: false },
		);

		return items;
	}


}
