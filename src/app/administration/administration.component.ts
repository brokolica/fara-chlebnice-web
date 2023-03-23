import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Announcement } from '../model/announcement';
import { AnnouncementsService } from '../services/announcements.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {

  constructor(
    private announcementService: AnnouncementsService,
    private formBuilder: FormBuilder) { }
  
  checkoutForm = this.formBuilder.group({
    title: '',
    text: ''
  });

  onSubmit(): void {
    let announcement: Announcement = {
      id: null,
      title: this.checkoutForm.value.title!,
      text: this.checkoutForm.value.text!
    };

    this.announcementService.createAnnouncement(announcement).subscribe({
      next: (data) => {
        console.info('Successfuly created announcement: ', data);
        this.checkoutForm.reset();
      },
      error: (msg) => {
        console.log('Error creating announcement: ', msg);
      }
    });
  }
}
