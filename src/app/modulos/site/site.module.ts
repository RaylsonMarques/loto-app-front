import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CoreModule } from "../../core/core.module";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { siteRoutes } from "./site.routes";

@NgModule({
	declarations: [HomeComponent, SignInComponent],
	imports: [CommonModule, CoreModule, RouterModule.forChild(siteRoutes), SharedModule],
})
export class SiteModule {}
