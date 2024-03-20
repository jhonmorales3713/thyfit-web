import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { InquiryPage } from './warehouse/inquiry/inquiry.page';
import { InquiryShowPage } from './warehouse/inquiry/inquiry-show.page';
import { VehiclePage } from './vehicle/vehicle.page';
import { VehicleShowPage } from './vehicle/vehicle-show.page';
import { VehicleEditPage } from './vehicle/vehicle-edit.page';
import { VehicleNewPage } from './vehicle/vehicle-new.page';
import { UserRolePage } from './settings/user-role/user-role.page';
import { UserRoleShowPage } from './settings/user-role/user-role-show.page';
import { UserRoleEditPage } from './settings/user-role/user-role-edit.page';
import { UserRoleNewPage } from './settings/user-role/user-role-new.page';
import { UserPage } from './settings/user/user.page';
import { UserShowPage } from './settings/user/user-show.page';
import { UserEditPage } from './settings/user/user-edit.page';
import { AccessDeniedPage } from './access-denied/access-denied.page';
import { ShipmentRequestPage } from './warehouse/shipment-request/shipment-request.page';
import { ShipmentRequestShowPage } from './warehouse/shipment-request/shipment-request-show.page';
import { ShipmentRequestEditPage } from './warehouse/shipment-request/shipment-request-edit.page';
import { ShipmentRequestNewPage } from './warehouse/shipment-request/shipment-request-new.page';

const routes: Routes = [
    {path: 'admin', redirectTo: 'home', pathMatch:'full'},
    {path: 'dashboard', component: DashboardPage},
    {path: 'access-denied', component: AccessDeniedPage},
    {path: 'inquiries', component: InquiryPage},
    {path: 'inquiries/:id', component: InquiryShowPage},
    {path: 'vehicles', component: VehiclePage},
    {path: 'vehicles/new', component: VehicleNewPage},
    {path: 'vehicles/:id/edit', component: VehicleEditPage},
    {path: 'vehicles/:id', component: VehicleShowPage},
    {path: 'vehicles', component: VehiclePage},
    {path: 'user-roles', component: UserRolePage},
    {path: 'user-roles/new', component: UserRoleNewPage},
    {path: 'user-roles/:id', component: UserRoleShowPage},
    {path: 'user-roles/:id/edit', component: UserRoleEditPage},
    {path: 'users', component: UserPage},
    {path: 'users/new', component: UserRoleNewPage},
    {path: 'users/:id', component: UserShowPage},
    {path: 'users/:id/edit', component: UserEditPage},
    {path: 'shipment-requests', component: ShipmentRequestPage},
    {path: 'shipment-requests/new', component: ShipmentRequestNewPage},
    {path: 'shipment-requests/:id', component: ShipmentRequestShowPage},
    {path: 'shipment-requests/:id/edit', component: ShipmentRequestEditPage},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouteModule { }
