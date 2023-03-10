import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Announcement } from '../model/announcement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  constructor(private http: HttpClient) { }

  private configUrl = 'https://fara-chlebnice-lc3g8.ondigitalocean.app/api/Announcements';

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.configUrl);
  }
}
