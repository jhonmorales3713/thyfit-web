import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoTypeService } from 'src/app/admin/cargo-type/cargo-type.service';
import { InquiryService } from 'src/app/admin/warehouse/inquiry/inquiry.service';
import { AppNotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'inquiry-search',
  templateUrl: './inquiry-search.component.html'
})
export class InquirySearchComponent implements OnInit {
  referenceNumber: string;
  displayNull = false;
  displayAll = false;
  inquiry: any;
  searchBar: string;
  constructor(
    private container: ViewContainerRef,
    private notification: AppNotificationService,
    private inquiryService: InquiryService,
    private route : Router,
    private routeParam : ActivatedRoute,
  ) {
  }
  
  ngOnInit(): void {
    this.notification.setRootViewContainerRef(this.container); 
    this.routeParam.queryParams.subscribe(params => {
        if (!params['blankSearch'] && params['referenceNumber']) {
            this.searchBar = params['referenceNumber'];
        }
    });
  }
  search() {
    this.route.navigate(["customer/track-delivery"], { queryParams: { referenceNumber: this.searchBar } });
  }
}
