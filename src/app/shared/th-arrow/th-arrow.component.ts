import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoTypeService } from 'src/app/admin/cargo-type/cargo-type.service';
import { InquiryService } from 'src/app/admin/inquiry/inquiry.service';
import { AppNotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'th-arrow',
  templateUrl: './th-arrow.component.html'
})
export class TableHeaderArrowComponent implements OnInit {
  @Input() sortDirection : string = '+';
  @Input() name : string;
  @Input() sort : string;
  @Input() description : string;
  ngOnInit(): void {
  }
  get sortColumn() {
    return this.sort?.substring(1);
  }
}
