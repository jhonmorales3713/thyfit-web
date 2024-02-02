import { Component } from "@angular/core";
import { AppNotificationService } from "../services/notification.service";

@Component({
    selector: 'app-notifs',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.css'],
  })
  export class NotificationComponent {
    constructor(public toastService: AppNotificationService) {}
    show = true;
  
    close() {
      this.show = false;
      setTimeout(() => this.show = true, 3000);
    }
  }