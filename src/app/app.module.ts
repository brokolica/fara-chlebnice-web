import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './authorization/auth-button/auth-button.component';
import { UserProfileComponent } from './authorization/user-profile/user-profile.component';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    AboutComponent,
    AuthButtonComponent,
    UserProfileComponent,
    AdministrationComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: 'dev-zalw8nvhpspma6p2.us.auth0.com',
      clientId: 'bTpYzxfV0Uz4EM16Bwm8spzseIStJeSQ',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
