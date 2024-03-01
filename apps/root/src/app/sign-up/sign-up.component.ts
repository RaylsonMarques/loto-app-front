import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateUserDTO } from '../../core/model/interface/ICreateUserDTO';
import { IResponseHttpDTO, RouterEnum, Utils } from '@loto/shared';
import { CreateUserService } from '../../core/service/CreateUser.service';
import { Router } from '@angular/router';

@Component({
	selector: 'loto-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
	public form: FormGroup;

	public dataMaxima = new Date();
	constructor(
		//- Service
		private readonly createUserService: CreateUserService,
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

		if (!this.cpfIsValid()) {
			this.form.controls.cpf.setValue(null);
			this.form.controls.cpf.markAsDirty();
			return;
		}

		const user: ICreateUserDTO = this.treatData();
		this.createUserService.create(user).subscribe({
			next: (response: IResponseHttpDTO) => {
				console.log(response);
			},
			error: (error) => {
				console.error(error);
			}
		});
	}

	public buttonDisabled(): boolean {
		return !this.form.valid;
	}

	public back(): void {
		this.router.navigate([RouterEnum.HOME]);
	}

	public validatePassword(event: any) {}

	private init(): void {
		this.createForm();
	}

	private createForm(): void {
		this.form = this.formBuilder.group({
			complete_name: [null, Validators.required],
			cpf: [null, Validators.required],
			birthdate: [null, Validators.required],
			whatsapp: [null, Validators.required],
			password: [null, Validators.required]
		});
	}

	private treatData(): ICreateUserDTO {
		const { complete_name, cpf, birthdate, whatsapp, password } = this.form.controls;

		const user: ICreateUserDTO = {
			name: complete_name.value,
			cpf: cpf.value,
			birthdate: birthdate.value,
			whatsApp: whatsapp.value,
			password: password.value
		}

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
