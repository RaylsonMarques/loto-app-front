import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { RouterEnum } from './shared/enums/RouterEnum';

const rotas: Routes = [
	{
		path: RouterEnum.ROOT,
		loadChildren: () => import("./modulos/modulos.module").then(value => value.ModulosModule),
	}
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(rotas, {
			useHash: false,
		}),
	],
	exports: [],
})
export class AppRoutingModule {}
