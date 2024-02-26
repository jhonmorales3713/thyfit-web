import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { TrackDeliveryPage } from './track-delivery/track-delivery.page';
import { InquiryPage } from './inquiry/inquiry.page';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: DashboardPage},
    {path: 'track-delivery', component: TrackDeliveryPage},
    {path: 'inquiry/:id', component: InquiryPage},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRouteModule { }
