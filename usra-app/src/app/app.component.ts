import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Applicant Profile', url: '/folder/Inbox', icon: 'person-circle' },
    { title: 'Counselling Session', url: '/folder/Outbox', icon: 'chatbubbles' },
    { title: 'Documents Submission', url: '/folder/Favorites', icon: 'paper-plane' },
    { title: 'Course Selection', url: '/folder/Archived', icon: 'library' },
    { title: 'Documents Veification', url: '/folder/Trash', icon: 'checkmark-done' },
    { title: 'Application Pronouncement', url: '/folder/Spam', icon: 'school' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
