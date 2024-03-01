import { Route } from '@angular/router';
import { LotoTemplateComponent, RouterEnum, ScreenNameEnum } from '@loto/shared';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

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
			}
		]
	},
];

export { appRoutes };
