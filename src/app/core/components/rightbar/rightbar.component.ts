import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "loto-rightbar",
	templateUrl: "./rightbar.component.html",
	styleUrls: ["./rightbar.component.scss"],
})
export class RightbarComponent implements OnInit {
	//- Output
	@Output() activeSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

	/**************** MÉTODOS PÚBLICOS ****************/
	ngOnInit(): void {}

	public activateSidebar(event: any): void {
		this.activeSidebar.emit(event);
	}

	/**************** MÉTODOS PRIVADOS ****************/
	private init(): void {}

	private initializeVariables(): void {}
}
