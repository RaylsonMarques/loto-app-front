import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { BlockUIModule } from "ng-block-ui";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CoreModule } from "./core/core.module";
import { BlockUIInterceptor } from "./core/interceptor/blockui.interceptor";
import { HttpErrorInterceptor } from "./core/interceptor/http-error.interceptor";

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		CoreModule,
		RouterModule,
		AppRoutingModule,
		MatExpansionModule,
		ToastrModule.forRoot(),
		CollapseModule.forRoot(),
		BlockUIModule.forRoot({
			message: "Carregando..",
		}),
	],
	declarations: [AppComponent],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BlockUIInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
