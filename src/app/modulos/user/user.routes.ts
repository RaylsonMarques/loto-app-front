import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SiteTemplateComponent } from "app/core/template/site/site-template.component";

import { RouterEnum } from "../../shared/enums/RouterEnum";
import { ScreenNameEnum } from "../../shared/enums/ScreenNameEnum";
import { ActivateComponent } from "./activate/activate.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

export const userRoutes: Route[] = [
	//- Site routes
	{
		path: RouterEnum.ROOT,
		component: SiteTemplateComponent,
		children: [
			//- Public routes
			{
				path: RouterEnum.SIGN_UP,
				component: SignUpComponent,
				data: {
					breadcrumb: "Criar usuário",
					name: ScreenNameEnum.SIGN_UP,
				},
			},

			{
				path: RouterEnum.ACTIVATE,
				component: ActivateComponent,
				data: {
					breadcrumb: "Ativar usuário",
					name: ScreenNameEnum.ACTIVATE,
				},
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(userRoutes)],
	exports: [RouterModule],
})
export class UserRoutingModule {}
