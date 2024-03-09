import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { InquiryPage } from './inquiry/inquiry.page';
import { InquiryShowPage } from './inquiry/inquiry-show.page';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouteModule { }
