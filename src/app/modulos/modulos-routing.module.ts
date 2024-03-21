import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouterEnum } from "app/shared/enums/RouterEnum";

export const moduloRoutes: Routes = [
	//- Site routes
	{
		path: RouterEnum.ROOT,
		loadChildren: () => import("./site/site.module").then(module => module.SiteModule),
	},
	//- Applications routes
	{
		path: RouterEnum.ROOT_APP,
		loadChildren: () => import("./application/application.module").then(module => module.ApplicationModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(moduloRoutes)],
	exports: [RouterModule],
})
export class ModulosRoutingModule {}
