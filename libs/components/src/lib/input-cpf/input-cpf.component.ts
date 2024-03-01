import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utils } from '@loto/shared';

import { BaseInput } from '../base/base-input';

/**
 * Input text com mascara de CPF
 */
@Component({
	selector: 'loto-input-cpf',
	templateUrl: './input-cpf.component.html',
	styleUrls: ['./input-cpf.component.scss'],
})
export class InputCpfComponent extends BaseInput implements OnInit {
	enabledInput = true;
	disabledInput = false;

	@Input()
	controlName: any;

	@Input()
	label = '';

	@Input()
	form: FormGroup;

	@Input()
	value = '';

	@Input()
	disabled = false;

	@Input()
	readonly = false;

	cpfMask = Utils.MASK_CPF;

	constructor() {
		super();
	}

	ngOnInit(): void {}
}
