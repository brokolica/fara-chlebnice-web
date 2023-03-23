import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styles: [],
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  // public loginWithRedirect() {
  //   this.auth.loginWithPopup({
  //     authorizationParams: {
  //       audience: "https://fara-chlebnice-lc3g8.ondigitalocean.app/api/",
  //       ui_locales: 'sk',
  //       redirect_uri: window.location.origin + '/administration'
  //     }
  //   });
  // }
}