import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseInput } from '../base/base-input';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Utils } from 'app/shared/util/utils';

@Component({
	selector: 'loto-input-money',
	templateUrl: './input-money.component.html',
	styleUrls: ['./input-money.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputMoneyComponent),
			multi: true,
		},
	],
})
export class InputMoneyComponent extends BaseInput implements OnInit {
	//- Inputs
	@Input() public controlName: any;
	@Input() public value: string = '';
	@Input() public label = '';
	@Input() public form: FormGroup;
	@Input() public disabled = false;
	@Input() public readonly = false;
	//- Public
	public content = true;
	public other_content = false;
	public moneyMask = Utils.MASK_MONEY

	constructor() {
		super();
	}

	ngOnInit(): void {}
}
