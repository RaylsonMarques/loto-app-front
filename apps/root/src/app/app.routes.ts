import { Route } from '@angular/router';
import { SiteTemplateComponent } from '@loto/components';
import { AuthGuard, RouterEnum, ScreenNameEnum } from '@loto/shared';

import { ActivateComponent } from './activate/activate.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Route[] = [
	//- Site routes
	{
		path: RouterEnum.ROOT,
		component: SiteTemplateComponent,
		children: [
			//- Public routes
			{
				path: RouterEnum.HOME,
				component: HomeComponent,
				data: {
					breadcrumb: 'Página inicial',
					name: ScreenNameEnum.INICIO,
				},
			},
			{
				path: RouterEnum.SIGN_UP,
				component: SignUpComponent,
				data: {
					breadcrumb: 'Criar usuário',
					name: ScreenNameEnum.SIGN_UP,
				},
			},
			{
				path: RouterEnum.SIGN_IN,
				component: SignInComponent,
				data: {
					breadcrumb: 'Acessar conta',
					name: ScreenNameEnum.SIGN_IN,
				},
			},
			{
				path: RouterEnum.ACTIVATE,
				component: ActivateComponent,
				data: {
					breadcrumb: 'Ativar usuário',
					name: ScreenNameEnum.ACTIVATE,
				},
			},
		],
	},
	//- Logged area
	{
		path: RouterEnum.DASHBOARD_ADMIN,
		loadChildren: () => import('./admin/admin.module').then((value) => value.AdminModule),
		canActivate: [AuthGuard],
		data: {
			breadcrumb: 'Dashboard administrador',
			name: ScreenNameEnum.DASHBOARD_ADMIN,
		},
	},
	{
		path: RouterEnum.DASHBOARD_DEFAULT,
		loadChildren: () => import('./default/default.module').then((value) => value.DefaultModule),
		canActivate: [AuthGuard],
		data: {
			breadcrumb: 'Dashboard',
			name: ScreenNameEnum.DASHBOARD_DEFAULT,
		},
	},
];

export { appRoutes };
