import { ChangeDetectorRef, Component } from "@angular/core";
import { AppNotificationService, NotificationService } from "../services/notification.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-notif',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.css'],
  })
  export class NotificationComponent {
    constructor(public toastService: AppNotificationService
      ) {
    }
    ngOnInit() {
      setTimeout(() => {this.toastService.clear();}, 3000);
    }
    show = true;
    
    ngOnDestroy(): void {
      this.toastService.clear();
    }

    close() {
      this.show = false;
      setTimeout(() => {this.show = true; this.toastService.clear();}, 3000);
    }
  }