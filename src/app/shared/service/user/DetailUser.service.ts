import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseHttpDTO } from '../../model/IResponseHttpDTO';
import { environment } from "../../../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DetailUserService {
	constructor(private readonly http: HttpClient) {}

	public isUserActive(cpf: string): Observable<IResponseHttpDTO> {
		return this.http.post<IResponseHttpDTO>(`${environment.API_HOST}/user/user-active`, { cpf });
	}
}
