import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AdminHeaderComponent } from './header/header.component';
import { AdminFooterComponent } from './footer/footer.component';
import { AdminSidenavComponent } from './sidenav/sidenav.component';
import { AdminTopnavComponent } from './topnav/topnav.component';
import { DashboardPage } from './dashboard/dashboard.page';
import { MainAdminPage } from './admin.page';
import { AdminRouteModule } from './admin.route';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
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
import { InquiryPage } from './inquiry/inquiry.page';
import { InquiryShowPage } from './inquiry/inquiry-show.page';
import { VehicleShowPage } from './vehicle/vehicle-show.page';
import { VehiclePage } from './vehicle/vehicle.page';

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
    VehiclePage
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
    AppNotificationService
  ],
})
export class AdminModule { }
