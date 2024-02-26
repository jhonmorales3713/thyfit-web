import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { InquiryPage } from './inquiry/inquiry.page';
import { InquiryShowPage } from './inquiry/inquiry-show.page';
import { VehiclePage } from './vehicle/vehicle.page';
import { VehicleShowPage } from './vehicle/vehicle-show.page';

const routes: Routes = [
    {path: 'admin', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: DashboardPage},
    {path: 'inquiries', component: InquiryPage},
    {path: 'inquiries/:id', component: InquiryShowPage},
    {path: 'vehicles', component: VehiclePage},
    {path: 'vehicles/:id', component: VehicleShowPage},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouteModule { }
