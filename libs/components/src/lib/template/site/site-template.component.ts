import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Componente de template para dashboard.
 */
@Component({
	selector: "site-template",
	templateUrl: "./site-template.component.html",
	styleUrls: ["./site-template.component.scss"],
})
export class SiteTemplateComponent implements OnInit {

	constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

	ngOnInit() {}

  /********** MÉTODOS PRIVADOS **********/

}
