import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NotificationService } from '../service/notification.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private autenticado: boolean = true;
  constructor(
    protected readonly router: Router,
    protected readonly http: HttpClient,
    private readonly notificationService: NotificationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return true;
  }
}
