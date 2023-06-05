import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    try {
      return this.auth.tryLogin().then((response) => {
        if (!this.router.navigated && !response) {
          this.router.navigate(['/']);
        }
        return response;
      })
    } catch (e) {
      throw e;
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> => inject(AuthGuardService).canActivate(next, state);