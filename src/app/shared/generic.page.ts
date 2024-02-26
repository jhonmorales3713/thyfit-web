import { Component, ElementRef, EventEmitter, HostListener, Injectable, Input, OnInit, Output, ViewContainerRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InquiryService } from '../admin/inquiry/inquiry.service';
import { AppNotificationService } from './services/notification.service';
import { ItemTypeService } from '../admin/item-type/item-type.service';
import { CargoTypeService } from '../admin/cargo-type/cargo-type.service';
@Injectable({
  providedIn: 'root'
})
export class GenericPage {
    hasError = false;
    constructor(
      private router: Router,
      private activatedRouter: ActivatedRoute,
      private containerRef: ViewContainerRef,
      private notif: AppNotificationService,
    ) {
        
    }
}
