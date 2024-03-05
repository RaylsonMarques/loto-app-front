import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { AddBalanceComponent } from './add-balance/add-balance.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [HomeComponent, ProfileComponent, JackpotsComponent, AddBalanceComponent],
	imports: [CommonModule],
})
export class DefaultModule {}
