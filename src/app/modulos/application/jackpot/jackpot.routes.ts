import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppTemplateComponent } from "app/core/template/app/app-template.component";
import { RouterEnum } from "app/shared/enums/RouterEnum";

import { JackpotCreateComponent } from "./jackpot-create/jackpot-create.component";
import { JackpotHomeComponent } from "./jackpot-home/jackpot-home.component";
import { ScreenNameEnum } from "app/shared/enums/ScreenNameEnum";

export const jackpotRoutes: Route[] = [
	{
		path: RouterEnum.ROOT,
		component: AppTemplateComponent,
		children: [
			{
				path: RouterEnum.ROOT,
				component: JackpotHomeComponent,
				data: {
					breadcrumb: "Início",
					name: ScreenNameEnum.JACKPOT,
					showRightbar: false,
				},
			},
			{
				path: RouterEnum.CREATE,
				component: JackpotCreateComponent,
				data: {
					breadcrumb: "Criar novo bolão",
					name: ScreenNameEnum.JACKPOT_CREATE,
					showRightbar: false,
				},
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(jackpotRoutes)],
	exports: [RouterModule],
})
export class JackpotRoutingModule {}
