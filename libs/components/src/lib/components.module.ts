import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MATERIAL_IMPORTS } from '@loto/shared';
import { TextMaskModule } from 'angular2-text-mask';

import { CardComponent } from './card/card.component';
import { SimpleDialogComponent } from './dialog/simple-dialog.component';
import { IconComponent } from './icon/icon.component';
import { InputCpfComponent } from './input-cpf/input-cpf.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTimeComponent } from './input-time/input-time.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { VersionComponent } from './version/version.component';
import { InputTelephoneComponent } from './input-telephone/input-telephone.component';

@NgModule({
	declarations: [
		CardComponent,
		SimpleDialogComponent,
		InputCpfComponent,
		InputDateComponent,
		InputNumberComponent,
		InputPasswordComponent,
		InputTextComponent,
		InputTelephoneComponent,
		InputTimeComponent,
		ListComponent,
		NavbarComponent,
		PaginationComponent,
		SidebarComponent,
		TableComponent,
		VersionComponent,
		IconComponent,
	],
	exports: [
		CardComponent,
		SimpleDialogComponent,
		InputCpfComponent,
		InputDateComponent,
		InputNumberComponent,
		InputPasswordComponent,
		InputTextComponent,
		InputTelephoneComponent,
		InputTimeComponent,
		ListComponent,
		NavbarComponent,
		PaginationComponent,
		SidebarComponent,
		TableComponent,
		VersionComponent,
		IconComponent,
	],
	imports: [CommonModule, MATERIAL_IMPORTS, RouterModule, ReactiveFormsModule, FormsModule, TextMaskModule],
})
export class ComponentsModule {}
