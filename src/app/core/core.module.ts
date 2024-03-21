import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TextMaskModule } from "angular2-text-mask";
import { LotoPipeModule } from "app/shared/pipes/loto-pipe.module";
import { BlockUIModule } from "ng-block-ui";
import { CollapseModule } from "ngx-bootstrap/collapse";

import { MATERIAL_IMPORTS } from "../shared/material-imports";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { CardComponent } from "./components/card/card.component";
import { InputCpfComponent } from "./components/input-cpf/input-cpf.component";
import { InputNumberComponent } from "./components/input-number/input-number.component";
import { InputTextComponent } from "./components/input-text/input-text.component";
import { InputTimeComponent } from "./components/input-time/input-time.component";
import { ListComponent } from "./components/list/list.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RightbarComponent } from "./components/rightbar/rightbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TableComponent } from "./components/table/table.component";
import { VersionComponent } from "./components/version/version.component";
import { AppTemplateComponent } from "./template/app/app-template.component";
import { SiteTemplateComponent } from "./template/site/site-template.component";

@NgModule({
	declarations: [
		BreadcrumbComponent,
		CardComponent,
		InputTextComponent,
		InputCpfComponent,
		InputTimeComponent,
		InputNumberComponent,
		ListComponent,
		NavbarComponent,
		RightbarComponent,
		SidebarComponent,
		TableComponent,
		VersionComponent,
		//- Templates
		AppTemplateComponent,
		SiteTemplateComponent,
	],
	exports: [
		BreadcrumbComponent,
		CardComponent,
		InputTextComponent,
		InputCpfComponent,
		InputTimeComponent,
		InputNumberComponent,
		ListComponent,
		NavbarComponent,
		RightbarComponent,
		SidebarComponent,
		TableComponent,
		VersionComponent,
		//- Templates
		AppTemplateComponent,
		SiteTemplateComponent,
	],
	imports: [CommonModule, MATERIAL_IMPORTS, RouterModule, CollapseModule, ReactiveFormsModule, FormsModule, TextMaskModule, BlockUIModule, LotoPipeModule],
})
export class CoreModule {}
