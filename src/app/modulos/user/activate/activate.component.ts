import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { RouterEnum } from "../../../shared/enums/RouterEnum";
import { IActivateUserDTO } from "../../../shared/model/interface/IActivateUserDTO";
import { IResponseHttpDTO } from "../../../shared/model/IResponseHttpDTO";
import { NotificationService } from "../../../shared/service/notification.service";
import { CreateUserService } from "../../../shared/service/user/CreateUser.service";

@Component({
	selector: "loto-activate",
	templateUrl: "./activate.component.html",
	styleUrls: ["./activate.component.scss"],
})
export class ActivateComponent implements OnInit {
	public form: FormGroup;

	constructor(
		//- Services
		private readonly notificationService: NotificationService,
		private readonly createUserService: CreateUserService,
		//- Util
		private readonly formBuilder: FormBuilder,
		private readonly router: Router
	) {}

	ngOnInit(): void {
		this.init();
	}

	public submit(): void {
		const { new_password, new_password_confirmation } = this.form.controls;

		if (new_password.value !== new_password_confirmation.value) {
			this.notificationService.error("As senhas não coicidem");
			return;
		}

		const payload: IActivateUserDTO = this.treatData();
		this.createUserService.activate(payload).subscribe({
			next: ({ message }: IResponseHttpDTO) => {
				this.notificationService.success(message);
				this.router.navigate([RouterEnum.SIGN_IN]);
			},
			error: error => {
				this.notificationService.error(error.message);
			},
		});
	}

	public back(): void {
		this.router.navigate([RouterEnum.HOME]);
	}

	public buttonDisabled(): boolean {
		return !this.form.valid;
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
			new_password_confirmation: [null, Validators.required],
		});
	}

	private initializeVariables(): void {
		const cpfValue: string = sessionStorage.getItem("cpf");
		sessionStorage.removeItem("cpf");
		this.form.controls.cpf.setValue(cpfValue);
	}

	private treatData(): IActivateUserDTO {
		const { cpf, actual_password, new_password } = this.form.controls;
		const payload: IActivateUserDTO = {
			cpf: cpf.value,
			temporaryPassword: actual_password.value,
			password: new_password.value,
		};
		return payload;
	}
}
