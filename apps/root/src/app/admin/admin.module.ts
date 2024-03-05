import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@loto/shared';

import { AddBalanceComponent } from './add-balance/add-balance.component';
import { adminRoutes } from './admin.routes';
import { HomeComponent } from './home/home.component';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [HomeComponent, AddBalanceComponent, JackpotsComponent, ProfileComponent],
	imports: [CommonModule, RouterModule.forChild(adminRoutes), SharedModule],
})
export class AdminModule {}
