import "moment/locale/pt-br";

import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { Utils } from "app/shared/util/utils";
import * as moment from "moment";

import { BaseInput } from "../base/base-input";
import { DATE_FORMAT } from "./date-format";

/**
 * Componente Date
 */
@Component({
	selector: "loto-input-date",
	templateUrl: "./input-date.component.html",
	styleUrls: ["./input-date.component.scss"],
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: "pt-BR" },
		{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
		{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
	],
})
export class InputDateComponent extends BaseInput implements OnInit {
	@Input() public label = "";
	@Input() public controlName: any;
	@Input() public form: FormGroup;
	@Input() public disabled = false;
	@Input() public dataMaxima?: Date;
	@Input() public dataMinima?: Date;
	@Input() public readonly = false;

	mask = Utils.MASK_DATA;

	constructor(private _adapter: DateAdapter<any>) {
		super();
	}

	ptBr() {
		this._adapter.setLocale("pt-br");
	}

	formatDate(event: MatDatepickerInputEvent<Date>): string {
		return moment(event.value).format("DD/MM/YYYY");
	}

	ngOnInit() {}
}
