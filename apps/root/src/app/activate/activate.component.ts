import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IActivateUserDTO } from '../../core/model/interface/IActivateUserDTO';
import { IResponseHttpDTO, NotificationService } from '@loto/shared';
import { CreateUserService } from '../../core/service/CreateUser.service';

@Component({
	selector: 'loto-activate',
	templateUrl: './activate.component.html',
	styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
	public form: FormGroup;

	constructor(
		//- Services
		private readonly notificationService: NotificationService,
		private readonly createUserService: CreateUserService,
		//- Util
		private readonly formBuilder:FormBuilder,
		private readonly router: Router) {}

	ngOnInit(): void {
		this.init();
	}

	public submit(): void {
		const { new_password, new_password_confirmation } = this.form.controls;

		if (new_password.value !== new_password_confirmation.value ) {
			this.notificationService.error("As senhas não coicidem");
			return;
		}

		const payload: IActivateUserDTO = this.treatData();
		this.createUserService.activate(payload).subscribe({
			next: (response: IResponseHttpDTO) => {
				console.log(response);
				this.notificationService.success(response.message);
			},
			error: (error) => {
				console.error(error);
				this.notificationService.error(error.message);
			}
		});
	}

	public back(): void {}

	public buttonDisabled(): boolean {
		return false;
	}

	private init(): void {
		this.createForm();
		this.initializeVariables();
	}

	private createForm(): void {
		this.form = this.formBuilder.group({
			cpf: [null, Validators.required],
			actual_password: [null, Validators.required],
			new_password: [null, Validators.required],
			new_password_confirmation: [null, Validators.required]
		});
	}

	private initializeVariables(): void {
		const cpfValue: string = sessionStorage.getItem('cpf');
		sessionStorage.removeItem('cpf');
		this.form.controls.cpf.setValue(cpfValue);
	}

	private treatData(): IActivateUserDTO {
		const { cpf, actual_password, new_password } = this.form.controls;
		const payload: IActivateUserDTO = {
			cpf: cpf.value,
			temporaryPassword: actual_password.value,
			password: new_password.value
		};
		return payload;
	}
}
