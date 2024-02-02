import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiErrorComponent } from './ui-error/ui-error.component';
import { NgbModule, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from './notification/notification.component';
import { AppNotificationService } from './services/notification.service';

@NgModule({
    imports: [
        RouterModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        NgbModule,
        
    ],
    declarations: [
        UiErrorComponent,
        NotificationComponent,
    ],
    providers: [
        AppNotificationService,
    ],
    exports: [
        RouterModule,
        CommonModule,
        FormsModule,
        UiErrorComponent,
        NgbModule,
        NotificationComponent
    ],
})
export class SharedModule { }
