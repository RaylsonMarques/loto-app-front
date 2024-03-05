import { Route } from '@angular/router';
import { RouterEnum, ScreenNameEnum } from '@loto/shared';

import { HomeComponent } from './home/home.component';
import { LotoTemplateComponent } from '@loto/components';

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
