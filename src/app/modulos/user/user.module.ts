import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { userRoutes } from './user.routes';
import { ActivateComponent } from './activate/activate.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
	declarations: [
    ActivateComponent,
    SignUpComponent
	],
	imports: [CommonModule, CoreModule, RouterModule.forChild(userRoutes), SharedModule],
})
export class UserModule {}