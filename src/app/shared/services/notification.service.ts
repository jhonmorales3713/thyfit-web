import { Injectable } from "@angular/core";

export interface NotificationService {
  header: string;
  body: string;
  delay?: number;
  options: any;
}
  
@Injectable({ providedIn: 'root' })
export class AppNotificationService {
  toasts: NotificationService[] = [];

  success(header: string, body: string) {
    var options = { className: 'bg-success text-light', delay: 5000 };
    this.toasts.push({ header, body, options });
  }
  error(header: string, body: string) {
    var options = { className: 'bg-danger text-light', delay: 5000 };
    this.toasts.push({ header, body, options });
  }
  remove(toast: NotificationService) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}