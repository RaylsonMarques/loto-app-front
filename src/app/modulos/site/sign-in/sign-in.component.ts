import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { RouterEnum } from "../../../shared/enums/RouterEnum";
import { IDoLoginDTO } from "../../../shared/model/interface/IDoLoginDTO";
import { IResponseHttpDTO } from "../../../shared/model/IResponseHttpDTO";
import { ControlValidationService } from "../../../shared/service/control/ControlValidation.service";
import { LoginService } from "../../../shared/service/Login.service";
import { NotificationService } from "../../../shared/service/notification.service";
import { DetailUserService } from "../../../shared/service/user/DetailUser.service";
import { Utils } from "../../../shared/util/utils";

@Component({
	selector: "loto-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
	public form: FormGroup;

	constructor(
		//- Service
		private readonly loginService: LoginService,
		private readonly detailUserService: DetailUserService,
		private readonly controlValidationService: ControlValidationService,
		private readonly notificationService: NotificationService,
		//- Router
		private readonly router: Router,
		//- Util
		private readonly formBuilder: FormBuilder
	) {}

	ngOnInit(): void {
		this.init();
	}

	public validateUserActive(event) {
		if (event.target.value && !event.target.value.includes("_")) {
			this.detailUserService.isUserActive(event.target.value).subscribe({
				next: ({ payload, message }: IResponseHttpDTO) => {
					if (!payload) {
						this.notificationService.alert(message);
						this.notificationService.alert("Redirecionando para ativação do usuário");
						sessionStorage.setItem("cpf", event.target.value);
						setTimeout(() => this.router.navigate([RouterEnum.ACTIVATE]), 2000);
					}
				},
				error: error => {
					this.notificationService.error(error.message);
				},
			});
		}
	}

	public submit(): void {
		if (!this.cpfIsValid()) {
			this.form.controls.cpf.setValue(null);
			this.form.controls.cpf.markAsDirty();
			return;
		}

		const login: IDoLoginDTO = this.treatData();
		this.loginService.login(login).subscribe({
			next: ({ message: messageLogin, payload: token }: IResponseHttpDTO) => {
				sessionStorage.setItem("JWT", `Bearer ${token}`);

				this.notificationService.success(messageLogin);
				this.controlValidationService.isAdmin().subscribe({
					next: ({ payload }: IResponseHttpDTO) => {
						if (payload) this.router.navigate([`${RouterEnum.DASHBOARD_ADMIN}/${RouterEnum.HOME}`]);
					},
					error: ({ error }: HttpErrorResponse) => {
						this.router.navigate([`${RouterEnum.DASHBOARD_DEFAULT}/${RouterEnum.HOME}`]);
					},
				});
			},
			error: ({ error }: HttpErrorResponse) => {
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
			cpf: [null, Validators.required],
			password: [null, Validators.required],
		});
	}

	private treatData(): IDoLoginDTO {
		const { cpf, password } = this.form.controls;

		const loginBody: IDoLoginDTO = {
			cpf: cpf.value,
			password: password.value,
		};

		return loginBody;
	}

	private cpfIsValid(): boolean {
		const { cpf } = this.form.controls;
		if (!Utils.validaCpf(cpf.value)) {
			return false;
		}

		return true;
	}
}
