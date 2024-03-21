import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResponseHttpDTO } from '../../model/IResponseHttpDTO';
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ControlValidationService {
	constructor(private readonly http: HttpClient) {}

	public isAuthenticated(): Observable<IResponseHttpDTO> {
		return this.http.get<IResponseHttpDTO>(`${environment.API_HOST}/control/authenticated`, { headers: { Authorization: sessionStorage.getItem("JWT") } });
	}

	public isAdmin(): Observable<IResponseHttpDTO> {
		return this.http.get<IResponseHttpDTO>(`${environment.API_HOST}/control/isAdmin`, { headers: { Authorization: sessionStorage.getItem("JWT") } });
	}
}
