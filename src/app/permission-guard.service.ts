import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuardService implements CanActivate {

  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  public isAuthenticated(): boolean {
    if (this.getToken()) {
      return !this.jwtHelper.isTokenExpired(this.getToken());
    }
    return false
  }

  private getToken(): string {
    return window.localStorage.getItem('jwt') ? window.localStorage.getItem('jwt') as any : '';
  }

  public canActivate(): boolean {
    if(!this.isAuthenticated()) {
      this.router.navigate(['/login']); 
      return false;
    }
    return true;
  }
}
