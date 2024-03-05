import { Route } from '@angular/router';
import { AuthGuard, LotoTemplateComponent, RouterEnum, ScreenNameEnum } from '@loto/shared';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ActivateComponent } from './activate/activate.component';

const appRoutes: Route[] = [
	{
		path: RouterEnum.ROOT,
		component: LotoTemplateComponent,
		children: [
			//- Public routes
			{
				path: RouterEnum.HOME,
				component: HomeComponent,
				data: {
					name: ScreenNameEnum.INICIO
				}
			},
			{
				path: RouterEnum.SIGN_UP,
				component: SignUpComponent,
				data: {
					name: ScreenNameEnum.SIGN_UP
				}
			},
			{
				path: RouterEnum.SIGN_IN,
				component: SignInComponent,
				data: {
					name: ScreenNameEnum.SIGN_IN
				}
			},
			{
				path: RouterEnum.ACTIVATE,
				component: ActivateComponent,
				data: {
					name: ScreenNameEnum.ACTIVATE
				}
			}
		]
	},
	//- Logged area
	{
		path: RouterEnum.DASHBOARD_ADMIN,
		loadChildren: () => import("./admin/admin.module").then(value => value.AdminModule),
		canActivate: [AuthGuard],
		data: {
			name: ScreenNameEnum.DASHBOARD_ADMIN
		},
	},
	{
		path: RouterEnum.DASHBOARD_DEFAULT,
		loadChildren: () => import("./default/default.module").then(value => value.DefaultModule),
		canActivate: [AuthGuard],
		data: {
			name: ScreenNameEnum.DASHBOARD_DEFAULT
		},
	},
];

export { appRoutes };
