import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { LotoDirectiveModule } from "./directive/loto-directive.module";
import { MATERIAL_IMPORTS } from "./material-imports";
import { LotoPipeModule } from "./pipes/loto-pipe.module";

@NgModule({
	declarations: [],
	imports: [CommonModule, MATERIAL_IMPORTS, ReactiveFormsModule],
	exports: [MATERIAL_IMPORTS, LotoDirectiveModule, LotoPipeModule, ReactiveFormsModule],
})
export class SharedModule {}
