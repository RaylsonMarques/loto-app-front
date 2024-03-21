import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CoreModule } from "../../core/core.module";
import { SharedModule } from "../../shared/shared.module";
import { applicationRoutes } from "./application.routes";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
	declarations: [DashboardComponent],
	imports: [CommonModule, CoreModule, RouterModule.forChild(applicationRoutes), SharedModule],
})
export class ApplicationModule {}
