import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IActivateUserDTO } from "app/shared/model/interface/IActivateUserDTO";
import { ICreateUserDTO } from "app/shared/model/interface/ICreateUserDTO";
import { IResponseHttpDTO } from '../../model/IResponseHttpDTO';
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class CreateUserService {
	constructor(private readonly http: HttpClient) {}

	public create(user: ICreateUserDTO): Observable<IResponseHttpDTO> {
		return this.http.post<IResponseHttpDTO>(`${environment.hostApiUrl}/user/create`, user);
	}

	public activate(payload: IActivateUserDTO): Observable<IResponseHttpDTO> {
		return this.http.post<IResponseHttpDTO>(`${environment.hostApiUrl}/user/activate`, payload);
	}
}
