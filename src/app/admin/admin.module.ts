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
import { FoodPage } from './food/food.page';
import { FoodComponent } from './food/components/food.component';
import { FoodNewPage } from './food/food-new.page';
import { FoodService } from './food/food.service';
import { UiErrorComponent } from '../shared/ui-error/ui-error.component';
import { LogInService } from './login/login.service';
import { LoginPage } from './login/login.page';
import { ModalService } from '../shared/services/modal.service';
import { AppNotificationService } from '../shared/services/notification.service';
import { NotificationComponent } from '../shared/notification/notification.component';

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidenavComponent,
    AdminTopnavComponent,
    DashboardPage,
    MainAdminPage,
    FoodNewPage,
    FoodComponent,
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
    FoodService,
    ApiService,
    ModalService,
    AppNotificationService
  ],
})
export class AdminModule { }
