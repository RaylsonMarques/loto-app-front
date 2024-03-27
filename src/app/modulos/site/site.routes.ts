import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SiteTemplateComponent } from 'app/core/template/site/site-template.component';
import { RouterEnum } from 'app/shared/enums/RouterEnum';
import { ScreenNameEnum } from 'app/shared/enums/ScreenNameEnum';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const siteRoutes: Route[] = [
	{
		path: RouterEnum.ROOT,
		component: SiteTemplateComponent,
		children: [
			{
				path: RouterEnum.HOME,
				component: HomeComponent,
				data: {
					breadcrumb: 'Página inicial',
					name: ScreenNameEnum.INICIO,
				}
			},
			{
				path: RouterEnum.SIGN_IN,
				component: SignInComponent,
				data: {
					breadcrumb: 'Acessar conta',
					name: ScreenNameEnum.SIGN_IN,
				},
			},
		]
	},
	{
		path: RouterEnum.ROOT,
		loadChildren: () => import('../user/user.module').then((module) => module.UserModule),
		data: {
			breadcrumb: 'Página inicial',
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(siteRoutes)],
	exports: [RouterModule],
})
export class SiteRoutingModule {}
