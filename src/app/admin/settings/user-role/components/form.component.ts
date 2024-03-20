import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { HttpStatusCode } from '@angular/common/http';
import { UserRoleService } from '../user-role.service';
import { UserRoleForm } from '../user-role.form';
import { SharedPermissions } from 'src/app/shared/constant';
import { Permissions } from '../constant';
@Component({
    selector: 'user-role-form',
    templateUrl: './form.component.html',
})
export class UserRoleFormComponent {
    T = Translations;
    id: number;
    isLoading = false;
    @Input() form: UserRoleForm;
    @Input() isUpdate = true;
    SharedPermissions = SharedPermissions;
    Permissions = Permissions;
    @Output() submitForm = new EventEmitter<{httpStatusCode: HttpStatusCode, data: any}>();
    constructor(
      private userRoleService: UserRoleService,) {
    }
    submit() {
      // submitForm
      if(this.isUpdate) {
        this.userRoleService.update(this.form.id, this.form.toPayLoad()).subscribe({
        next: (result) => {
          this.submitForm.emit({httpStatusCode: HttpStatusCode.Ok, data: result});  
        }, error: (failedRequest) => {
          FormUtils.setErrors(failedRequest.error.errors, this.form);
          this.submitForm.emit({httpStatusCode: HttpStatusCode.NotAcceptable, data: null});  
        }});
      } else {
        this.userRoleService.create(this.form.toPayLoad()).subscribe({
        next: (result) => {
          this.submitForm.emit({httpStatusCode: HttpStatusCode.Ok, data: result});  
        }, error: (failedRequest) => {
          FormUtils.setErrors(failedRequest.error.errors, this.form);
          this.submitForm.emit({httpStatusCode: HttpStatusCode.NotAcceptable, data: null});  
        }});
      }
    }
}
