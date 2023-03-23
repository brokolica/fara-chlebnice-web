import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private auth: AuthService) { }

  // ensureIsLoggedIn(route: ActivatedRouteSnapshot): Observable<boolean> {
  //   return this.auth.isAuthenticated$
  //     .pipe(tap(isLoggedIn => { if (!isLoggedIn) this.loginWithRedirect(); }));
  // }

  loginWithRedirect(): Observable<void> {
    return this.auth.loginWithPopup({
      authorizationParams: {
        audience: 'https://fara-chlebnice-lc3g8.ondigitalocean.app/api/',
        redirect_uri: window.location.origin + '/administration',
        ui_locales: 'sk'
      }
    });
  }

ensureIsLoggedIn(route: ActivatedRouteSnapshot): Observable<boolean> {
  return this.auth.isAuthenticated$
  .pipe(switchMap(isLoggedIn => {
     if (!isLoggedIn) {
      return this.loginWithRedirect().pipe(
        switchMap(x => of(true)),
        catchError(x => of(false)));
    } else {
      return of(true);
    }
  }));
}
}

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
  return inject(AuthorizationService).ensureIsLoggedIn(route);
};

// ensureIsLoggedIn(route: ActivatedRouteSnapshot): Observable<boolean> {
//   return this.auth.isAuthenticated$
//   .pipe(switchMap(isLoggedIn => {
//      if (!isLoggedIn) {
//       return this.loginWithRedirect().pipe(
//         switchMap(x => of(true)),
//         catchError(x => of(false)));
//     } else {
//       return of(true);
//     }
//   }));
// }
