import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'loto-activate',
	templateUrl: './activate.component.html',
	styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
	public form: FormGroup;

	constructor(
		private readonly formBuilder:FormBuilder,
		private readonly router: Router) {}

	ngOnInit(): void {
		this.init();
	}

	public submit(): void {}

	public back(): void {}

	public buttonDisabled(): boolean {
		return false;
	}

	private init(): void {
		this.createForm();
	}

	private createForm(): void {
		this.form = this.formBuilder.group({
			cpf: [null, Validators.required],
			actual_password: [null, Validators.required],
			new_password: [null, Validators.required],
			new_password_confirmation: [null, Validators.required]
		});
	}
}
