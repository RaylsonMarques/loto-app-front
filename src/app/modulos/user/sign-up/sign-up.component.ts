import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { RouterEnum } from "../../../shared/enums/RouterEnum";
import { ICreateUserDTO } from "../../../shared/model/interface/ICreateUserDTO";
import { IResponseHttpDTO } from "../../../shared/model/IResponseHttpDTO";
import { NotificationService } from "../../../shared/service/notification.service";
import { CreateUserService } from "../../../shared/service/user/CreateUser.service";
import { Utils } from "../../../shared/util/utils";

@Component({
	selector: "loto-sign-up",
	templateUrl: "./sign-up.component.html",
	styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
	public form: FormGroup;

	public dataMaxima = new Date();
	constructor(
		//- Service
		private readonly createUserService: CreateUserService,
		private readonly notificationService: NotificationService,
		//- Util
		private readonly formBuilder: FormBuilder,
		private readonly router: Router
	) {}

	ngOnInit(): void {
		this.init();
	}

	public submit(): void {
		if (!this.telephoneIsValid()) {
			this.form.controls.whatsapp.setValue(null);
			this.form.controls.whatsapp.markAsDirty();
			return;
		}

		if (this.form.controls.whatsapp.value !== this.form.controls.whatsapp_confirmation.value) {
			this.form.controls.whatsapp_confirmation.setValue(null);
			this.form.controls.whatsapp_confirmation.markAsDirty();
			return;
		}

		if (!this.cpfIsValid()) {
			this.form.controls.cpf.setValue(null);
			this.form.controls.cpf.markAsDirty();
			return;
		}

		const user: ICreateUserDTO = this.treatData();
		this.createUserService.create(user).subscribe({
			next: ({ message }: IResponseHttpDTO) => {
				this.notificationService.success(message);
				this.router.navigate([RouterEnum.SIGN_IN]);
			},
			error: error => {
				this.notificationService.error(error.message);
			},
		});
	}

	public buttonDisabled(): boolean {
		return !this.form.valid;
	}

	public back(): void {
		this.router.navigate([RouterEnum.HOME]);
	}

	private init(): void {
		this.createForm();
	}

	private createForm(): void {
		this.form = this.formBuilder.group({
			complete_name: [null, Validators.required],
			cpf: [null, Validators.required],
			birthdate: [null, Validators.required],
			whatsapp: [null, Validators.required],
			whatsapp_confirmation: [null, Validators.required],
		});
	}

	private treatData(): ICreateUserDTO {
		const { complete_name, cpf, birthdate, whatsapp } = this.form.controls;

		const user: ICreateUserDTO = {
			name: complete_name.value,
			cpf: cpf.value,
			birthdate: birthdate.value,
			whatsApp: whatsapp.value,
		};

		return user;
	}

	private telephoneIsValid(): boolean {
		const { whatsapp } = this.form.controls;
		if (whatsapp.value.includes("_")) {
			return false;
		}

		return true;
	}

	private cpfIsValid(): boolean {
		const { cpf } = this.form.controls;
		if (!Utils.validaCpf(cpf.value)) {
			return false;
		}

		return true;
	}
}