import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { AppTemplateComponent } from "../../core/template/app/app-template.component";
import { RouterEnum } from "../../shared/enums/RouterEnum";
import { ScreenNameEnum } from "../../shared/enums/ScreenNameEnum";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const applicationRoutes: Route[] = [
	{
		path: RouterEnum.ROOT,
		component: AppTemplateComponent,
		children: [
			{
				path: RouterEnum.DASHBOARD_ADMIN,
				component: DashboardComponent,
				data: {
					breadcrumb: "Dashboard",
					name: ScreenNameEnum.DASHBOARD,
				},
			},
			{
				path: RouterEnum.DASHBOARD_DEFAULT,
				component: DashboardComponent,
				data: {
					breadcrumb: "Dashboard",
					name: ScreenNameEnum.DASHBOARD,
				},
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(applicationRoutes)],
	exports: [RouterModule],
})
export class ApplicationRoutingModule {}
