import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { InquiryService } from './inquiry.service';
import { Inquiry } from './inquiry.model';
import { HttpStatusCode } from '@angular/common/http';
import { DeliveryStatus, DeliveryStatuses } from 'src/app/customer/inquiry/constant';
@Component({
  templateUrl: './inquiry-show.page.html',
})
export class InquiryShowPage extends GenericPage implements OnInit{
    T = Translations;
    isLoading = true;
    id: number;
    inquiry: Inquiry;
    DeliveryStatus= DeliveryStatuses;
    constructor(
      private route: Router,
      private activatedRoute: ActivatedRoute,
      private container: ViewContainerRef,
      private notification: AppNotificationService,
      private inquiryService: InquiryService) {
        super(route, activatedRoute, container, notification);
    }
    ngOnInit() {
      this.notification.setRootViewContainerRef(this.container);
      // show error
      this.id = this.activatedRoute.snapshot.params["id"];
      this.inquiryService.show(this.id).subscribe({
        next: (inquiry) => {
          this.inquiry = new Inquiry();
          this.inquiry.format(inquiry["data"]);
          this.isLoading = false;
        }, error: (inquiry) => {
          this.hasError = true;
        }
      });
    }
    invalid() {
      this.inquiryService.invalid(this.id).subscribe({
        next: (inquiry) => {
          this.inquiry = new Inquiry();
          this.inquiry.format(inquiry["data"]);
          this.isLoading = false;
          this.notification.success("Success","Inquiry Updated!");
        }, error: (inquiry) => {
          console.log(inquiry);
          this.notification.error("Inquiry", inquiry.error.message);
        }
      });
    }
    receive() {
      this.inquiryService.receive(this.id).subscribe({
        next: (inquiry) => {
          this.inquiry = new Inquiry();
          console.log(inquiry);
          this.inquiry.format(inquiry["data"]);
          this.isLoading = false;
          console.log(this.inquiry);
          this.notification.success("Success","Inquiry Updated!");
        }, error: (inquiry) => {
          this.notification.error("Inquiry", inquiry.error.message);
        }
      });
    }
    submit() {

    }
}
