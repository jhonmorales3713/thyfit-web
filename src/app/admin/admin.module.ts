import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AdminHeaderComponent } from './header/header.component';
import { AdminFooterComponent } from './footer/footer.component';
import { AdminSidenavComponent } from './sidenav/sidenav.component';
import { AdminTopnavComponent } from './topnav/topnav.component';
import { DashboardPage } from './dashboard/dashboard.page';
import { MainAdminPage } from './admin.page';
import { AdminRouteModule } from './admin.route';
import { SharedModule } from '../shared/shared.module';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardService } from './dashboard/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../shared/api.service';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { UiErrorComponent } from '../shared/ui-error/ui-error.component';
import { LogInService } from './login/login.service';
import { LoginPage } from './login/login.page';
import { ModalService } from '../shared/services/modal.service';
import { AppNotificationService } from '../shared/services/notification.service';
import { NotificationComponent } from '../shared/notification/notification.component';
import { InquiryPage } from './warehouse/inquiry/inquiry.page';
import { InquiryShowPage } from './warehouse/inquiry/inquiry-show.page';
import { VehicleShowPage } from './vehicle/vehicle-show.page';
import { VehiclePage } from './vehicle/vehicle.page';
import { VehicleEditPage } from './vehicle/vehicle-edit.page';
import { VehicleFormComponent } from './vehicle/components/form.component';
import { VehicleNewPage } from './vehicle/vehicle-new.page';
import { UserRolePage } from './settings/user-role/user-role.page';
import { UserRoleShowPage } from './settings/user-role/user-role-show.page';
import { UserRoleFormComponent } from './settings/user-role/components/form.component';
import { UserRoleEditPage } from './settings/user-role/user-role-edit.page';
import { UserRoleNewPage } from './settings/user-role/user-role-new.page';
import { UserPage } from './settings/user/user.page';
import { UserShowPage } from './settings/user/user-show.page';
import { UserFormComponent } from './settings/user/components/form.component';
import { UserEditPage } from './settings/user/user-edit.page';
import { AccessDeniedPage } from './access-denied/access-denied.page';
import { ShipmentRequestPage } from './warehouse/shipment-request/shipment-request.page';
import { ShipmentRequestShowPage } from './warehouse/shipment-request/shipment-request-show.page';
import { ShipmentRequestFormComponent } from './warehouse/shipment-request/components/form.component';
import { ShipmentRequestEditPage } from './warehouse/shipment-request/shipment-request-edit.page';

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidenavComponent,
    AdminTopnavComponent,
    DashboardPage,
    MainAdminPage,
    InquiryPage,
    InquiryShowPage,
    VehicleShowPage,
    VehiclePage,
    VehicleEditPage,
    VehicleFormComponent,
    VehicleNewPage,
    UserRolePage,
    UserRoleShowPage,
    UserRoleFormComponent,
    UserRoleEditPage,
    UserRoleNewPage,
    UserPage,
    UserShowPage,
    UserEditPage,
    UserFormComponent,
    AccessDeniedPage,
    ShipmentRequestPage,
    ShipmentRequestShowPage,
    ShipmentRequestFormComponent,
    ShipmentRequestEditPage
  ],
  imports: [
    SharedModule,
    AdminRouteModule,
    CanvasJSAngularChartsModule,
  ],
  exports: [
  ],
  providers: [
    DashboardService,
    ApiService,
    ModalService,
    AppNotificationService,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
})
export class AdminModule { }
