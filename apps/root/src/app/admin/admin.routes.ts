import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LotoTemplateComponent, RouterEnum, ScreenNameEnum } from '@loto/shared';

import { HomeComponent } from './home/home.component';

export const adminRoutes: Route[] = [
	{
		path: RouterEnum.ROOT,
		component: LotoTemplateComponent,
		children: [
			//- Public routes
			{
				path: RouterEnum.HOME,
				component: HomeComponent,
				data: {
					name: ScreenNameEnum.DASHBOARD_ADMIN,
				},
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(adminRoutes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
