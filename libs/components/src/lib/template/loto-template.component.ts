import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Componente de template para dashboard.
 */
@Component({
	selector: "loto-template",
	templateUrl: "./loto-template.component.html",
	styleUrls: ["./loto-template.component.scss"],
})
export class LotoTemplateComponent implements OnInit {

	constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

	ngOnInit() {}

  /********** MÉTODOS PRIVADOS **********/

}
