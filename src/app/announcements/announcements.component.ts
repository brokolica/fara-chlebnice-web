import { Component } from '@angular/core';

import { Announcement } from '../model/announcement';
import { AnnouncementsService } from '../services/announcements.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent {

  announcements: Announcement[] = [];

  constructor(private announcementService: AnnouncementsService) { }

  getAnnouncements() {
    this.announcementService.getAnnouncements().subscribe({
      next: (data) => {
        this.announcements = data;
      },
      error: (msg) => {
        console.log('Error Getting Location: ', msg);
      }
    });
  }
}
