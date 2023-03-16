import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  checkoutForm = this.formBuilder.group({
    title: '',
    text: ''
  });

  constructor(
    private announcementService: AnnouncementsService,
    private formBuilder: FormBuilder
  ) { }

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

  onSubmit(): void {
    let announcement: Announcement = {
      id: null,
      title: this.checkoutForm.value.title!,
      text: this.checkoutForm.value.text!
    };

    this.announcementService.createAnnouncement(announcement).subscribe(ann => this.announcements.push(ann));
    this.checkoutForm.reset();
  }
}
