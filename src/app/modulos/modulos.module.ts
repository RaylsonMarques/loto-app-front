import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCommonModule } from "@angular/material/core";

import { CoreModule } from "../core/core.module";
import { MATERIAL_IMPORTS } from "../shared/material-imports";
import { SharedModule } from "../shared/shared.module";
import { ModulosRoutingModule } from "./modulos-routing.module";

@NgModule({
	declarations: [],
	imports: [CommonModule, CoreModule, SharedModule, ModulosRoutingModule, MATERIAL_IMPORTS, MatCommonModule],
})
export class ModulosModule {}
