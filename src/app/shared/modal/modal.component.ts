import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, EventEmitter, Injectable, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { ModalOptions } from './modal';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodComponent } from 'src/app/admin/food/components/food.component';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls:["./modal.css"]
})
export class ModalComponent implements OnInit, AfterViewInit{
  modalOptions: ModalOptions;
  @ViewChild('container', {read: ViewContainerRef}) container;

  constructor(
    public activeModal: NgbActiveModal,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }
  loadContent() {
    this.container.createComponent(this.modalOptions.content);
    this.changeDetector.detectChanges();
  }  
  ngAfterViewInit() {
    this.loadContent();
  }
}