import { Component, OnInit } from '@angular/core';

import { Announcement } from '../model/announcement';
import { AnnouncementsService } from '../services/announcements.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[] = [];
  displayedColumns: string[] = ['id', 'title', 'text'];

  constructor(private announcementService: AnnouncementsService) { }

  ngOnInit() {
    this.getAnnouncements();
  }

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
