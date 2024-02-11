import { Injectable, ComponentFactoryResolver, ViewContainerRef, Injector } from "@angular/core";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "../modal/modal.component";
import { ModalOptions } from "../modal/modal";
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalService = this.injector.get(NgbModal);
  constructor(
    private injector: Injector
  ) {}

  open (options: ModalOptions) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
    };
    const modal = this.modalService.open(ModalComponent, ngbModalOptions);
    modal.componentInstance.modalOptions = options;
  }
}