import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


export const jackpotRoutes: Route[] = [];

@NgModule({
	imports: [RouterModule.forChild(jackpotRoutes)],
	exports: [RouterModule],
})
export class JackpotRoutingModule {}
