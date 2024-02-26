import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './dashboard/dashboard.page';
import { CustomerPage } from './customer.page';
import { SharedModule } from '../shared/shared.module';
import { CustomerRouteModule } from './customer.route';
import { TrackDeliveryPage } from './track-delivery/track-delivery.page';
import { InquiryPage } from './inquiry/inquiry.page';

@NgModule({
  declarations: [
    DashboardPage,
    CustomerPage,
    TrackDeliveryPage,
    InquiryPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomerRouteModule,
  ],providers:[]
})
export class CustomerModule { }
