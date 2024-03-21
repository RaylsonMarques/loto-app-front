import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Utils } from "app/shared/util/utils";

import { BaseInput } from "../base/base-input";

/**
 * Input text com mascara de TELEFONE
 */
@Component({
	selector: "loto-input-telephone",
	templateUrl: "./input-telephone.component.html",
	styleUrls: ["./input-telephone.component.scss"],
})
export class InputTelephoneComponent extends BaseInput implements OnInit {
	enabledInput = true;
	disabledInput = false;

	@Input()
	controlName: any;

	@Input()
	label = "";

	@Input()
	cellPhone = true;

	@Input()
	form: FormGroup;

	@Input()
	value: any;

	@Input()
	disabled = false;

	@Input()
	readonly = false;

	telefoneMask: any;

	constructor() {
		super();
	}

	ngOnInit(): void {
		this.telefoneMask = this.cellPhone ? Utils.MASK_TELEFONE_CELULAR : Utils.MASK_TELEFONE_FIXO;
	}
}
