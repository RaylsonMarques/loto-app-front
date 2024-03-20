import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppTemplateComponent } from '@loto/components';
import { RouterEnum, ScreenNameEnum } from '@loto/shared';

import { AdminHomeComponent } from './admin-home/admin-home.component';

export const adminRoutes: Route[] = [
	{
		path: RouterEnum.ROOT,
		component: AppTemplateComponent,
		children: [
			//- Public routes
			{
				path: RouterEnum.ROOT,
				component: AdminHomeComponent,
				data: {
					breadcrumb: 'Início',
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
