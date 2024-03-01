import { Route } from '@angular/router';
import { LotoTemplateComponent, RouterEnum, ScreenNameEnum } from '@loto/shared';

import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Route[] = [
	{
		path: RouterEnum.ROOT,
		component: LotoTemplateComponent,
		children: [
			{
				path: RouterEnum.SIGN_UP,
				component: SignUpComponent,
				data: {
					name: ScreenNameEnum.SIGN_UP
				}
			}
		]
	},
];

export { appRoutes };
