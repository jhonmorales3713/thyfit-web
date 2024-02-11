import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, ViewContainerRef, ViewRef } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { NotificationComponent } from "../notification/notification.component";

export interface NotificationService {
  header: string;
  body: string;
  delay?: number;
  options: any;
}
  
@Injectable({ providedIn: 'root' })
export class AppNotificationService {  
  private rootViewContainer: ViewContainerRef;
  toasts: NotificationService[] = [];
  setRootViewContainerRef(viewContainerRef) {
      this.rootViewContainer = viewContainerRef;
  }
  success(header: string, body: string) {
    if(this.rootViewContainer) {
      this.rootViewContainer.createComponent(NotificationComponent);
    }

    var options = { className: 'bg-success text-light', delay: 5000 };
    this.toasts.push({ header, body, options });
  }
  error(header: string, body: string) {
    if(this.rootViewContainer) {
      this.rootViewContainer.createComponent(NotificationComponent);
    }
    var options = { className: 'bg-danger text-light', delay: 5000 };
    this.toasts.push({ header, body, options });
  }
  remove(toast: NotificationService) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}