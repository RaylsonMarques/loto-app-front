import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { jackpotRoutes } from './jackpot.routes';
import { JackpotCreateComponent } from './jackpot-create/jackpot-create.component';
import { JackpotHomeComponent } from './jackpot-home/jackpot-home.component';
import { MATERIAL_IMPORTS } from '../../../shared/material-imports';

@NgModule({
	declarations: [JackpotCreateComponent, JackpotHomeComponent],
	imports: [CommonModule, MATERIAL_IMPORTS, CoreModule, RouterModule.forChild(jackpotRoutes), SharedModule],
})
export class JackpotModule {}
