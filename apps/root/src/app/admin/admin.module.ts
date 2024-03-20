import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
	CardComponent,
	ComponentsModule,
	InputDateComponent,
	InputNumberComponent,
	InputPasswordComponent,
	InputTextComponent,
	InputTimeComponent,
	ListComponent,
	NavbarComponent,
	PaginationComponent,
	SidebarComponent,
	SimpleDialogComponent,
	TableComponent,
	VersionComponent,
} from '@loto/components';
import { SharedModule } from '@loto/shared';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { adminRoutes } from './admin.routes';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
	declarations: [AdminHomeComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(adminRoutes),
		SharedModule,
		ComponentsModule,
	],
	providers: [
		CardComponent,
		SimpleDialogComponent,
		InputDateComponent,
		InputNumberComponent,
		InputPasswordComponent,
		InputTextComponent,
		InputTimeComponent,
		ListComponent,
		NavbarComponent,
		PaginationComponent,
		SidebarComponent,
		TableComponent,
		VersionComponent,
	],
})
export class AdminModule {}
