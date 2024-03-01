import { HttpClient } from '@angular/common/http';
import { IResponseHttpDTO } from '@loto/shared';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ICreateUserDTO } from '../model/interface/ICreateUserDTO';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class CreateUserService {
	constructor(private readonly http: HttpClient) {}

	public create(user: ICreateUserDTO): Observable<IResponseHttpDTO> {
		return this.http.post<IResponseHttpDTO>(`${environment.API_HOST}/user/create`, user);
	}
}
