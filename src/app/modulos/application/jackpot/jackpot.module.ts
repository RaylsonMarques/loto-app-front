import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { jackpotRoutes } from './jackpot.routes';

@NgModule({
	declarations: [
	],
	imports: [CommonModule, CoreModule, RouterModule.forChild(jackpotRoutes), SharedModule],
})
export class JackpotModule {}