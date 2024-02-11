import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './shared/api.service';
import { LoginPage } from './admin/login/login.page';
import { LogInService } from './admin/login/login.service';
import { ModalService } from './shared/services/modal.service';
import { AppNotificationService } from './shared/services/notification.service';
import { FoodPage } from './admin/food/food.page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    FoodPage,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [ApiService, LogInService, ModalService, AppNotificationService],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
  ]
})
export class AppModule { }
