import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiErrorComponent } from './ui-error/ui-error.component';
import { NgbModule, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { AppNotificationService } from './services/notification.service';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';
import { NotificationComponent } from './notification/notification.component';
import { PaginationComponent } from './pagination/pagination.component';
import { InquirySearchComponent } from './inquiry-search/inquiry-search.component';
import { TableHeaderArrowComponent } from './th-arrow/th-arrow.component';
import { ErrorComponent } from '../error/error.component';
import { NumberInputComponent } from './ui-number-input/ui-number-input';
import { WholeNumberPipe } from './pipes/whole-number.pipe';
import { FormatNullablePipe } from './pipes/format-nullable.pipe';
import { InputSelectComponent } from './input-select/input-select.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [
        RouterModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        NgSelectModule,
    ],
    declarations: [
        UiErrorComponent,
        ModalComponent,
        PaginationComponent,
        InquirySearchComponent,
        NotificationComponent,
        TableHeaderArrowComponent,
        ErrorComponent,
        NumberInputComponent,
        WholeNumberPipe,
        InputSelectComponent,
        FormatNullablePipe,
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
        NotificationComponent,
        InquirySearchComponent,
        TableHeaderArrowComponent,
        NumberInputComponent,
        WholeNumberPipe,
        FormatNullablePipe,
        ErrorComponent,
        InputSelectComponent,
        NgSelectModule
    ],
})
export class SharedModule { }
