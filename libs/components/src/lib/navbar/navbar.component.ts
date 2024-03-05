import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterEnum, ScreenNameEnum } from '@loto/shared';

/**
 * Barra lateral superior, fragmento do template, guarda as informações do usuário logado.
 */
@Component({
	selector: 'loto-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	public menuItems: any[];
	public activeScreen: string;
	public menuActive: boolean;

	constructor(private readonly router: Router) {}

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
		this.menuItems = [
			{ title: 'Início', url: `/${this.routerEnum.HOME}`, name: ScreenNameEnum.ROOT, enabled: true, active: false },
			// { title: 'Dúvidas', url: `/${this.routerEnum.ROOT}`, name: null, enabled: false, active: false },
			// { title: 'Resultados', url: `/${this.routerEnum.ROOT}`, name: null, enabled: false, active: false },
			{ title: 'Cadastro', url: `/${this.routerEnum.SIGN_UP}`, name: ScreenNameEnum.SIGN_UP, enabled: true, active: false },
			{ title: 'Entrar', url: `/${this.routerEnum.SIGN_IN}`, name: ScreenNameEnum.SIGN_IN, enabled: true, active: false }
		];
		this.menuActive = false;
	}
}
