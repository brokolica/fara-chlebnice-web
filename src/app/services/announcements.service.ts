import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Announcement } from '../model/announcement';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  private configUrl = 'https://fara-chlebnice-lc3g8.ondigitalocean.app/api/Announcements'; // 'https://localhost:7112/Announcements';

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.configUrl);
  }

  createAnnouncement(data: Announcement): Observable<Announcement> {
    return this.auth.getAccessTokenSilently({
      authorizationParams: {
        audience: "https://fara-chlebnice-lc3g8.ondigitalocean.app/api/"
      }
    }).pipe(switchMap(token => {
      return this.http.post<Announcement>(this.configUrl, data,
        {
          headers: {
            "Authorization": 'Bearer ' + token
          }
        })
        .pipe(
          catchError(this.handleError)
        );
    }));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
