import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiErrorComponent } from './ui-error/ui-error.component';
import { NgbModule, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { AppNotificationService } from './services/notification.service';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';
import { NotificationComponent } from './notification/notification.component';
import { PaginationComponent } from './pagination/pagination.component';

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
        ModalComponent,
        PaginationComponent,
        NotificationComponent,
    ],
    providers: [
        ModalService,
    ],
    exports: [
        RouterModule,
        CommonModule,
        FormsModule,
        UiErrorComponent,
        NgbModule,
        ModalComponent,
        PaginationComponent,
        NotificationComponent
    ],
})
export class SharedModule { }
