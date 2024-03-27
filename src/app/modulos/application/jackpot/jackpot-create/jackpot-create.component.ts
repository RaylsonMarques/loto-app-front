import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import ICreateJackpotDTO from "app/shared/model/interface/ICreateJackpotDTO";
import * as moment from "moment";

@Component({
	selector: "app-create",
	templateUrl: "./jackpot-create.component.html",
	styleUrls: ["./jackpot-create.component.scss"],
})
export class JackpotCreateComponent implements OnInit {
	public form: FormGroup;
	public minDate: Date;

	constructor(
		//- Utils
		private readonly formBuilder: FormBuilder,
		private readonly router: Router
	) {}

	ngOnInit(): void {
		this.init();
	}

	/********** MÉTODOS PÚBLICOS **********/
	public submit(isDraft: boolean): void {
		//- Treat data to create jackpot
		const jackpot: ICreateJackpotDTO = this.treatData(isDraft);
	}

	public formatMoney(event: any): void {
		let updatedValue = event.target.value;
		updatedValue = updatedValue.replace(/\D/g, ""); // Remove todos os não dígitos
		updatedValue = updatedValue.replace(/(\d+)(\d{2})$/, "$1,$2"); // Adiciona a parte de centavos
		updatedValue = updatedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // Adiciona pontos a cada três dígitos
		updatedValue = `R$ ${updatedValue}`;

		event.target.value = updatedValue;
	}

	/********** MÉTODOS PRIVADOS **********/
	private init(): void {
		this.initializeVariables();
		this.createForm();
	}

	private initializeVariables(): void {
		this.minDate = new Date();
	}

	private createForm(): void {
		this.form = this.formBuilder.group({
			name: [null, Validators.required],
			//game: [null, Validators.required],
			amountGames: [null, Validators.required],
			amountDozens: [null, Validators.required],
			contest: [null, Validators.required],
			price: [null, Validators.required],
			quotas: [null, Validators.required],
			dateGame: [null, Validators.required],
		});
	}

	private treatData(isDraft: boolean): ICreateJackpotDTO {
		const { name, amountGames, amountDozens, contest, price, quotas, dateGame } = this.form.controls;
		const jackpot: ICreateJackpotDTO = {
			name: name.value,
			//gameId
			amountGames: amountGames.value,
			amountDozens: amountDozens.value,
			contest: contest.value,
			price: price.value,
			quotas: quotas.value,
			date: dateGame.value,
			isDraft
		};

		return jackpot;
	}
}
