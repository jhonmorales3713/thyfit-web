import { Component, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CargoTypeService } from 'src/app/admin/cargo-type/cargo-type.service';
import { InquiryService } from 'src/app/admin/inquiry/inquiry.service';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { DeliveryStatus } from '../inquiry/constant';
import { Inquiry } from 'src/app/admin/inquiry/inquiry.model';

@Component({
  selector: 'app-track-delivery',
  templateUrl: './track-delivery.page.html'
})
export class TrackDeliveryPage {
  referenceNumber: string;
  DeliveryStatus = DeliveryStatus;
  displayNull = false;
  displayAll = false;
  inquiry: Inquiry = new Inquiry();
  constructor(
    private container: ViewContainerRef,
    private notification: AppNotificationService,
    private inquiryService: InquiryService,
    private route : ActivatedRoute,
  ) {
  }
  ngOnInit(): void {
    this.notification.setRootViewContainerRef(this.container); 
    this.route.queryParams.subscribe(params => {
      this.referenceNumber = params['referenceNumber'];
      this.loadPage();
    });
  }
  loadPage() {
    this.inquiryService.showByRefNum(this.referenceNumber).subscribe(data => {
      this.displayNull = !data;
      this.inquiry.format(data["data"]);
      // console.log(this.getStatusClass(this.inquiry.status));
    });
    this.displayAll = true;
  }
  getStatusClass(status: string, deliveryStatus: string) {
      let statuses = {
        'pendi' : ['pendi'],
        'recei' : ['recei', 'pendi'],
        'forLoad' : ['forlo', 'recei', 'pendi'],
        'loaded' : ['load','forlo', 'recei', 'pendi'],
        'inTransit' : ['intra','load','forlo', 'recei', 'pendi'],
        'delivered' : ['deliv','intra','load','forlo', 'recei', 'pendi'],
        'cancelled' : ['recei', 'pendi'],
        'failed' : ['faile','deliv','intra','load','forlo', 'recei', 'pendi'],
      };
      return statuses[status].includes(deliveryStatus) ? 'text-success' : 'text-secondary';
  }
  displayDate(status: string, deliveryStatus: string) {
      let statuses = {
        'pendi' : ['pendi'],
        'recei' : ['recei', 'pendi'],
        'forLoad' : ['forlo', 'recei', 'pendi'],
        'loaded' : ['load','forlo', 'recei', 'pendi'],
        'inTransit' : ['intra','load','forlo', 'recei', 'pendi'],
        'delivered' : ['deliv','intra','load','forlo', 'recei', 'pendi'],
        'cancelled' : ['recei', 'pendi'],
        'failed' : ['faile','deliv','intra','load','forlo', 'recei', 'pendi'],
      };
      return statuses[status].includes(deliveryStatus);
  }
}
