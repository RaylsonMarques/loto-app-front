import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { LotoDirectiveModule } from './directive/loto-directive.module';
import { MATERIAL_IMPORTS } from './material-imports';
import { LotoPipeModule } from './pipes/loto-pipe.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
	declarations: [],
	exports: [MATERIAL_IMPORTS, LotoDirectiveModule, LotoPipeModule, ReactiveFormsModule],
	imports: [
		CommonModule,
		MATERIAL_IMPORTS,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		TextMaskModule,
		ToastrModule.forRoot(),
	],
	providers: [],
})
export class SharedModule {}
