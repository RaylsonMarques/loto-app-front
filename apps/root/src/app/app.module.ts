import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { BlockUIModule } from 'ng-block-ui';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		ToastrModule.forRoot(),
		RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
		BlockUIModule.forRoot({ message: 'Carregando...' }),
		SharedModule,
		ComponentsModule,
	],
	exports: [],
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
	bootstrap: [AppComponent],
})
export class AppModule {}
