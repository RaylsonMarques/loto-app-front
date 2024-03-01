import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponseHttpDTO, RouterEnum, Utils } from '@loto/shared';

import { IDoLoginDTO } from '../../core/model/interface/IDoLoginDTO';
import { LoginService } from '../../core/service/Login.service';

@Component({
	selector: 'loto-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
	public form: FormGroup;

	constructor(
		//- Service
		private readonly loginService: LoginService,
		//- Router
		private readonly router: Router,
		//- Util
		private readonly formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.init();
	}

	public submit(): void {
		if (!this.cpfIsValid()) {
			this.form.controls.cpf.setValue(null);
			this.form.controls.cpf.markAsDirty();
			return;
		}

		const login: IDoLoginDTO = this.treatData();
		this.loginService.login(login).subscribe({
			next: (response: IResponseHttpDTO) => {
				console.log('response: ', response);
			},
			error: (error) => {
				console.error("error: ", error);
			}
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
			password: [null, Validators.required]
		})
	}

	private treatData(): IDoLoginDTO {
		const { cpf, password } = this.form.controls;

		const loginBody: IDoLoginDTO = {
			cpf: cpf.value,
			password: password.value
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
