import { Route } from '@angular/router';
import { LotoTemplateComponent, RouterEnum, ScreenNameEnum } from '@loto/shared';

import { HomeComponent } from './home/home.component';

const defaultRoutes: Route[] = [
	{
		path: RouterEnum.ROOT,
		component: LotoTemplateComponent,
		children: [
			//- Public routes
			{
				path: RouterEnum.HOME,
				component: HomeComponent,
				data: {
					name: ScreenNameEnum.INICIO,
				},
			},
		],
	},
];

export { defaultRoutes };
