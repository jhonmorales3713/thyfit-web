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

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    AdminModule,
  ],
  providers: [ApiService, LogInService],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminModule,
  ]
})
export class AppModule { }
