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

	constructor(private readonly activatedRoute: ActivatedRoute, private readonly router: Router) {}

	ngOnInit() {
		this.init();
	}

	public get routerEnum() {
		return RouterEnum;
	}

	public logout(): void {
		// this.keycloack.logout("");
	}

	public classVerify(item: any): string {
		if (item.active) {
			return 'active';
		}

		if (!item.enabled) {
			return 'disabled'
		}

		return "";
	}

	public redirect(router: RouterEnum): void {
		this.router.navigate([router]);
	}

	private init(): void {
		this.initializeVariables();
		this.verifyActiveItem();
	}

	private initializeVariables(): void {
		this.menuItems = [
			{ title: 'Início', url: `/${this.routerEnum.ROOT}`, name: ScreenNameEnum.ROOT, enabled: true, active: false },
			{ title: 'Dúvidas', url: `/${this.routerEnum.ROOT}`, name: null, enabled: false, active: false },
			{ title: 'Resultados', url: `/${this.routerEnum.ROOT}`, name: null, enabled: false, active: false },
			{ title: 'Cadastro', url: `/${this.routerEnum.SIGN_UP}`, name: ScreenNameEnum.SIGN_UP, enabled: true, active: false },
			{ title: 'Entrar', url: `/${this.routerEnum.ROOT}`, name: null, enabled: true, active: false }
		];
	}

	private verifyActiveItem(): void {
		this.activatedRoute.data.subscribe((data) => {
			const screenName: string = data["name"];
			this.menuItems.forEach(item => {
				if (item.name == screenName) item.active = true;
			});
		});
	}
}
