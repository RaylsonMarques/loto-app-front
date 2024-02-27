import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'loto-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'Loto App';

	constructor(private readonly router: Router) {}

	ngOnInit(): void {
		//this.router.navigate([RouterEnum.SIGN_IN], { queryParams: { lang: navigator.language } });
	}
}
