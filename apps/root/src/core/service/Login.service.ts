import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseHttpDTO } from '@loto/shared';
import { Observable } from 'rxjs';

import { IDoLoginDTO } from '../model/interface/IDoLoginDTO';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LoginService {
	constructor(private readonly http: HttpClient) {}

	public login(body: IDoLoginDTO): Observable<IResponseHttpDTO> {
		return this.http.post<IResponseHttpDTO>(`${environment.API_HOST}/login`, body);
	}
}
